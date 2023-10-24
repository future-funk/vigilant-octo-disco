import { ApiError } from './errors'
declare global {
  interface Window {
    location: Location
  }
}
type ResponseMode = 'fragment' | 'query'
type Scope = 'openId'
type ResponseType = 'code'
type GrantType = 'authorization_code'
export interface AdfsOpenIdConnectConfig {
  authServerUrl: string
  clientId: string
  redirectUri?: string
  scope?: Scope | undefined
  grantType?: GrantType | undefined
  responseType?: ResponseType
  responseMode?: ResponseMode | undefined
}

export interface AdfsOpenIdConnectInitOptions {
  token?: string
  refreshToken?: string
  silentCheckSsoRedirectUri?: string
  onLoad?: 'check-sso' | 'url-redirect'
}

interface CreateTokenUrlResponse {
  url: string
  data: URLSearchParams
}

interface OAuthParams {
  code?: string
  error?: string
  error_description?: string
  error_uri?: string
  access_token?: string
  refresh_token?: string
}

interface ParsedCallbackUrl {
  code?: string
  error?: string
  error_description?: string
  error_uri?: string
  newUrl?: string
}

interface OidcEndpoints {
  authorize: () => string
  token: () => string
  refreshToken: () => string
}

interface TokenPayload {
  exp: number
  preferred_username?: string
  session_state: string
  iat: number
}

interface AdfsOpenIdConnectCallbacks {
  onAuthSuccess: (() => void) | null
  onAuthError:
    | ((e: { error: string; error_description?: string }) => void)
    | null
  onReady: ((_authenticated: boolean) => void) | null
  onAuthRefreshError: ((error: ApiError | Error) => void) | null
  onTokenExpired: (() => void) | null
  onAuthLogout: (() => void) | null
  onAuthRefreshSuccess: (() => void) | null
}

class AdfsOpenIdConnect {
  private _initOptions: AdfsOpenIdConnectInitOptions = {}
  private _authenticated = false
  private _clientId = ''
  private _authServerUrl: string | null = null
  private _scope = 'openid'
  private _redirectUri = `${window.location.origin}${window.location.pathname}`
  private _grantType = 'authorization_code'
  private _responseType = 'code'
  private _responseMode = 'fragment'
  private _refreshToken = ''
  private _refreshTokenParsed: TokenPayload | null = null
  private _endpoints: OidcEndpoints | null = null
  private _tokenTimeoutHandle: NodeJS.Timeout | null = null
  private _token: string | null = null
  private _tokenParsed: TokenPayload | null = null
  private _timeSkew: number | null = null
  private _sessionId = ''
  private _minValidity = 5
  private _config: AdfsOpenIdConnectConfig | null | string = null

  public onAuthSuccess: AdfsOpenIdConnectCallbacks['onAuthSuccess'] = null
  public onAuthError: AdfsOpenIdConnectCallbacks['onAuthError'] = null
  public onReady: AdfsOpenIdConnectCallbacks['onReady'] = null
  public onAuthRefreshError: AdfsOpenIdConnectCallbacks['onAuthRefreshError'] =
    null
  public onTokenExpired: AdfsOpenIdConnectCallbacks['onTokenExpired'] = null
  public onAuthLogout: AdfsOpenIdConnectCallbacks['onAuthLogout'] = null
  public onAuthRefreshSuccess: AdfsOpenIdConnectCallbacks['onAuthRefreshSuccess'] =
    null

  constructor(config: AdfsOpenIdConnectConfig) {
    if (!(this instanceof AdfsOpenIdConnect)) {
      return new AdfsOpenIdConnect(config)
    }

    const currentUrl = new URL(window.location.href)
    this._redirectUri = `${currentUrl.origin}${currentUrl.pathname}`
    this._config = config
    this._minValidity = 5
  }

  public async init(initOptions: AdfsOpenIdConnectInitOptions): Promise<void> {
    this._initOptions = {
      ...initOptions,
      ...(initOptions.silentCheckSsoRedirectUri
        ? { onLoad: 'check-sso' }
        : { onLoad: 'url-redirect' }),
    }

    if (
      !!window.parent &&
      window.parent !== window &&
      this._initOptions.onLoad === 'check-sso'
    ) {
      window.parent.postMessage(window.location.href, window.location.origin)
      throw new Error(
        'No need to load Iframe content fully if we are loading the same app inside iframe.'
      )
    }

    try {
      await this.loadConfig()
      await this.processInit()
      this.onReady?.(this._authenticated)
    } catch (e) {
      console.error(e)
      throw new Error('Failed to load config.')
    }
  }

  private async loadConfig(): Promise<void> {
    let configUrl

    if (!this._config) {
      configUrl = 'oidc.json'
    } else if (typeof this._config === 'string') {
      configUrl = this._config
    }

    if (configUrl) {
      try {
        const response = await fetch(configUrl)
        if (!response.ok) {
          throw new Error(
            `Failed to load ${configUrl} (${response.status} ${response.statusText})`
          )
        }
        const responseConfig = await response.json()
        this.setConfig(responseConfig)
      } catch (error) {
        console.error(error)
        throw new Error('Failed to load oidc.json file')
      }
    } else {
      this.setConfig(this._config as unknown as AdfsOpenIdConnectConfig)
    }
  }

  private setConfig(config: AdfsOpenIdConnectConfig) {
    const { authServerUrl, clientId, redirectUri } = config

    if (!clientId) {
      throw new Error('clientId missing')
    }

    this._authServerUrl = authServerUrl
    this._redirectUri = redirectUri || this._redirectUri
    this._clientId = clientId
    this._scope = config.scope || this._scope
    this._grantType = config.grantType || this._grantType
    this._responseType = config.responseType || this._responseType
    this._responseMode = config.responseMode || this._responseMode
    this.setupOidcEndpoints()
  }

  private setupOidcEndpoints(): void {
    const baseUrl = `${this._authServerUrl}/adfs/oauth2`
    this._endpoints = {
      authorize: () => `${baseUrl}/authorize`,
      token: () => `${baseUrl}/token`,
      refreshToken: () => `${baseUrl}/token`,
    }
  }

  private async processInit(): Promise<void> {
    const callback = this.parseCallbackUrl(window.location.href)
    if (callback) {
      window.history.replaceState(window.history.state, '', callback.newUrl)
      if (callback.code) {
        return this.processCallback(callback)
      }
    }
    if (this._initOptions) {
      const { token, refreshToken } = this._initOptions
      if (token && refreshToken) {
        this.setToken(token, refreshToken, null)
      } else {
        await this.onLoad()
      }
    }
  }

  private async onLoad(): Promise<void> {
    return new Promise((resolve, reject) => {
      const { silentCheckSsoRedirectUri, onLoad } = this._initOptions
      const redirectUri = silentCheckSsoRedirectUri || this._redirectUri
      switch (onLoad) {
        case 'check-sso':
          if (!redirectUri)
            console.error(
              'silentCheckSsoRedirectUri should be passed as part of init fn.'
            )
          this.checkSsoSilently(redirectUri, resolve, reject)
          break
        case 'url-redirect':
          window.location.href = this.createLoginUrl({ redirectUri })
          break
        default:
          throw new Error('Invalid value for onLoad')
      }
    })
  }

  public async checkSsoSilently(
    redirectUri: string,
    resolve: () => void,
    reject: () => void
  ) {
    const src = this.createLoginUrl({ redirectUri })
    const iframe = document.createElement('iframe')
    iframe.setAttribute('src', src)
    iframe.setAttribute('title', 'oidc-silent-check-sso')
    iframe.style.display = 'none'
    document.body.appendChild(iframe)

    const messageCallback = (event: MessageEvent) => {
      if (
        event.origin !== window.location.origin ||
        iframe.contentWindow !== event.source
      ) {
        return
      }

      const oauth = this.parseCallbackUrl(event.data)
      this.processCallback(oauth, { resolve, reject })

      document.body.removeChild(iframe)
      window.removeEventListener('message', messageCallback)
    }

    window.addEventListener('message', messageCallback)
  }

  private createLoginUrl(options: { redirectUri: string }): string {
    const params = {
      client_id: this._clientId,
      redirect_uri: options.redirectUri,
      response_mode: this._responseMode,
      response_type: this._responseType,
      scope: this._scope,
      prompt: 'none',
    }
    const url = new URL(this._endpoints!.authorize())
    url.search = new URLSearchParams(params).toString()
    return url.toString()
  }

  private parseCallbackUrl(url: string): ParsedCallbackUrl | null {
    const supportedParams = ['code', 'error', 'error_description', 'error_uri']
    const queryIndex = url.indexOf('?')
    const fragmentIndex = url.indexOf('#')
    let newUrl = ''
    let parsed = null
    if (this._responseMode === 'fragment' || fragmentIndex !== -1) {
      newUrl = url.substring(0, fragmentIndex)
      parsed = this.parseCallbackParams(
        url.substring(fragmentIndex + 1),
        supportedParams
      )
    } else if (this._responseMode === 'query' || queryIndex !== -1) {
      newUrl = url.substring(0, queryIndex)
      parsed = this.parseCallbackParams(
        url.substring(queryIndex + 1),
        supportedParams
      )
    }
    return parsed ? { ...parsed, newUrl } : null
  }

  private parseCallbackParams(
    hashOrQuery: string,
    supportedParams: string[]
  ): OAuthParams | null {
    const searchParams = new URLSearchParams(hashOrQuery)
    const oauthParams = supportedParams.reduce(
      (params: OAuthParams, key: string) => {
        const value = searchParams.get(key)
        if (value) {
          params[key as keyof OAuthParams] = value
        }
        return params
      },
      {}
    )

    return Object.keys(oauthParams).length ? oauthParams : null
  }

  private async processCallback(
    oauth: { error?: string; error_description?: string; code?: string } | null,
    promise?: { reject: () => void; resolve: () => void }
  ) {
    const timeLocal = Date.now()
    const { error } = oauth || {}

    if (error) {
      this.onAuthError?.({
        error,
        error_description: oauth?.error_description ?? '',
      })
      promise?.reject()
      return
    }
    const authSuccess = (accessToken: string, refreshToken: string): void => {
      const averageTime = (timeLocal + Date.now()) / 2
      this.setToken(accessToken, refreshToken, averageTime)
      this.onAuthSuccess?.()
      promise?.resolve()
    }

    try {
      const tokenResponse = await this.fetchToken({ code: oauth?.code || '' })
      const { error, error_description, ...tokenData } =
        await tokenResponse.json()
      if (error) {
        this.onAuthError?.({
          error,
          error_description: error_description ?? '',
        })
        promise?.reject()
        return
      }
      const { access_token, refresh_token } = tokenData
      authSuccess(access_token, refresh_token)
      promise?.resolve()
    } catch (error) {
      console.log(error)
      this.onAuthError?.({ error: (error as unknown as Error).message })
    }
  }

  private fetchToken = async (oauth: { code: string }): Promise<Response> => {
    try {
      const { url, data } = this.createTokenUrl(oauth)
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data,
        redirect: 'follow',
      })

      if (response.ok) {
        return response
      } else {
        console.error(response)
        throw new ApiError({ response, message: 'fetchToken call failed.' })
      }
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  private createTokenUrl({ code }: { code: string }): CreateTokenUrlResponse {
    const { silentCheckSsoRedirectUri: redirect_uri } = this._initOptions ?? {}
    const url = this._endpoints!.token()
    const data = new URLSearchParams({
      scope: this._scope,
      client_id: this._clientId,
      redirect_uri: redirect_uri ?? this._redirectUri,
      grant_type: 'authorization_code',
      code,
    })
    return { url, data }
  }

  private setToken(
    token: string | null,
    refreshToken: string | null,
    timeLocal: number | null
  ): void {
    clearTimeout(this._tokenTimeoutHandle!)
    this._tokenTimeoutHandle = null

    if (refreshToken) {
      this._refreshToken = refreshToken
      this._refreshTokenParsed = this.decodeToken(refreshToken)
    } else {
      this._refreshToken = ''
      this._refreshTokenParsed = null
    }

    if (token) {
      this._token = token
      this._tokenParsed = this.decodeToken(token)
      this._sessionId = this._tokenParsed?.['session_state'] || ''
      this._authenticated = true

      if (timeLocal) {
        this._timeSkew =
          Math.floor(timeLocal / 1000) - (this._tokenParsed?.['iat'] || 0)
      }

      if (this._timeSkew != null) {
        console.log(
          '[OIDC] Estimated time difference between browser and server is ' +
            this._timeSkew +
            ' seconds'
        )

        if (this.onTokenExpired) {
          const expiresIn =
            Math.max(
              0,
              (this._tokenParsed?.['exp'] || 0) -
                Date.now() / 1000 +
                this._timeSkew
            ) * 1000
          console.log(
            '[OIDC] Token expires in ' + Math.round(expiresIn / 1000) + ' s'
          )

          if (expiresIn <= 0) {
            this.onTokenExpired()
          } else {
            this._tokenTimeoutHandle = setTimeout(
              this.onTokenExpired,
              expiresIn
            )
          }
        }
      }
    } else {
      this._token = null
      this._tokenParsed = null
      this._sessionId = ''

      this._authenticated = false
    }
  }

  private decodeToken(token: string): TokenPayload | null {
    const [, payload] = token.split('.')
    try {
      return JSON.parse(atob(payload))
    } catch {
      return null
    }
  }

  private clearToken(): void {
    if (this._token) {
      this.setToken(null, null, null)
      this.onAuthLogout?.()
      //doLogin
    }
  }

  public isTokenExpired(minValidity: number): boolean {
    if (!this._tokenParsed || !this._refreshToken) {
      throw new Error('Not authenticated')
    }

    if (this._timeSkew == null) {
      console.warn(
        '[OIDC] Unable to determine if token is expired as timeskew is not set'
      )
      return true
    }

    const { exp } = this._tokenParsed
    const currentTime = Math.ceil(Date.now() / 1000) + this._timeSkew
    let expiresIn = exp - currentTime
    if (minValidity) {
      if (isNaN(minValidity)) {
        throw new Error('Invalid minValidity')
      }
      expiresIn -= minValidity
    }
    const expiresSoon = expiresIn <= (minValidity || 0)
    console.log(`[OIDC] Token ${expiresSoon ? 'will soon' : 'will not'} expire`)
    return expiresIn <= 0
  }
  private createRefreshTokenUrl(): { url: string; data: URLSearchParams } {
    const url = this._endpoints?.refreshToken()
    const data = new URLSearchParams({
      scope: this._scope,
      client_id: this._clientId,
      redirect_uri:
        this._initOptions.silentCheckSsoRedirectUri || this._redirectUri,
      grant_type: 'refresh_token',
      refresh_token: this._refreshToken,
    })

    return { url: url!, data }
  }

  public async updateToken(minValidity = this._minValidity): Promise<void> {
    if (!this._refreshToken) {
      this.setToken(null, null, null)
      throw new Error('refreshToken is missing to update token.')
    }

    const shouldRefreshToken =
      minValidity === -1 ||
      !this._tokenParsed ||
      this.isTokenExpired(minValidity)
    if (!shouldRefreshToken) return

    const { url, data } = this.createRefreshTokenUrl()
    const headers = new Headers()
    headers.append('Content-Type', 'application/x-www-form-urlencoded')

    const requestOptions = {
      method: 'POST',
      headers,
      body: data,
    }

    const failureCallback = (error: ApiError | Error) => {
      const { response } = error as unknown as ApiError
      console.log('[OIDC] Failed to refresh token')

      if (response?.status === 400) {
        this.clearToken()
      }

      this.onAuthRefreshError?.(error)
    }

    try {
      const startTime = Date.now()
      const response = await fetch(url, requestOptions)
      const endTime = Date.now()
      const timeLocal = (startTime + endTime) / 2

      if (response.ok) {
        const tokenResponse = await response.json()
        this.setToken(
          tokenResponse.access_token,
          tokenResponse.refresh_token,
          timeLocal
        )
        this.onAuthRefreshSuccess?.()
      } else {
        console.error(response)
        throw new ApiError({ response, message: 'API error' })
      }
    } catch (e: any) {
      console.error(e)
      failureCallback(e)
    }
  }

  public isLoggedIn(): boolean {
    return !!this._token && !!this._authenticated
  }

  public getToken(): string | null {
    return this._token
  }

  public getUsername(): string | undefined {
    return this._tokenParsed?.['preferred_username']
  }

  public getTokenParsed(): Record<string, any> | null {
    return Object.freeze({ ...this._tokenParsed })
  }
  public doLogin() {
    return this.processInit()
  }
}
export default AdfsOpenIdConnect
