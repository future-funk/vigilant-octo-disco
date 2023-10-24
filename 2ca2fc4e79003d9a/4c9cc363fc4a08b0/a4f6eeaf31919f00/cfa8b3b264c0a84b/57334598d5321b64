import { TimeoutError } from './errors'
import { Modal } from 'antd'
import AdfsOpenIdConnect from './AdfsOidc'

export interface IAdfsOidcClientOptions {
  minValidity?: number
  onAuthRefreshError?: () => void
  onUpdateToken: (token: string | null) => void
}

export interface IGetAuthenticatedSilentlyOptions {
  silentCheckSsoRedirectUri?: string
}
const config = {
  authServerUrl: process.env['NX_REACT_APP_PUBLIC_ADFS_BASE_URL']!,
  clientId: process.env['NX_REACT_APP_PUBLIC_OPENID_CLIENT_ID']!,
}
console.log(config)
export class AdfsOidcClient {
  private readonly scope: AdfsOpenIdConnect
  private readonly minValidity: number
  private readonly onUpdateToken: (token: string | null) => void | null
  constructor(private options: IAdfsOidcClientOptions) {
    this.scope = new AdfsOpenIdConnect(config)
    this.minValidity = options.minValidity || 3600
    this.scope.onTokenExpired = this.onTokenExpired.bind(this)
    this.scope.onAuthRefreshError =
      options.onAuthRefreshError || this.onAuthRefreshError.bind(this)
    this.scope.onAuthError = this.onAuthError.bind(this)
    this.onUpdateToken = options.onUpdateToken
  }
  /**
   * ```js
   * await adfsOidcClient.checkSession();
   
   * @param options
   */
  public async checkSession(
    options?: IGetAuthenticatedSilentlyOptions
  ): Promise<boolean | any> {
    try {
      return await this.getAuthenticatedSilently(options)
    } catch (error) {
      throw new TimeoutError()
    }
  }

  public async getAuthenticatedSilently(
    options: IGetAuthenticatedSilentlyOptions = {}
  ): Promise<void | boolean> {
    const defaultOptions = {
      silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
    }
    const merged = { ...defaultOptions, ...options }
    try {
      await this.scope.init(merged)
      return true
    } catch (e) {
      console.log(e)
    }
  }

  public isLoggedIn(): boolean {
    return !!this.getToken()
  }

  /**
   * Returns true if the token has less than `minValidity` seconds left before
   * it expires.
   * @param minValidity If not specified, `0` is used.
   */
  public isTokenExpired(minValidity = 180): boolean {
    return !!this.scope.isTokenExpired(minValidity)
  }

  public async updateToken() {
    const refreshed = await this.scope.updateToken(this.minValidity)
    this.onUpdateToken(this.getToken())
    return refreshed
  }
  public getUsername(): string | undefined {
    return this.scope.getUsername()
  }

  public getToken(): string | null {
    return this.scope.getToken()
  }
  public login() {
    return this.scope.doLogin()
  }
  private async onTokenExpired() {
    console.log('token expired')
    try {
      await this.updateToken()
      console.log('successfully got a new token')
    } catch (err) {
      console.log(err)
      this.login()
      //this.onAuthRefreshError()
    }
  }

  private onAuthRefreshError() {
    Modal.confirm({
      keyboard: false,
      centered: true,
      title: 'Session timed out',
      cancelButtonProps: { style: { display: 'none' } },
      onOk: () => {
        //reload the page
        window.location.href = window.location.pathname
        //this.login()
      },
    })
  }
  private onAuthError() {
    Modal.confirm({
      keyboard: false,
      centered: true,
      title: 'Authentication Failed',
      cancelButtonProps: { style: { display: 'none' } },
      content: 'Please contact Blueprint Support Team for assistance.',
    })
  }
}
