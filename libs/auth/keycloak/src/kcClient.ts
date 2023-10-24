import { TimeoutError } from './errors'
import { Modal } from 'antd'
declare global {
  interface Window {
    Keycloak: any
  }
}

export interface IKCClientOptions {
  minValidity?: number
  onAuthRefreshError?: () => void
  onUpdateToken: (token: string) => void
}

export interface IGetAuthenticatedSilentlyOptions {
  timeoutInSeconds?: number
  silentCheckSsoRedirectUri?: string
  onLoad?: string
  pkceMethod?: string
  checkLoginIframe?: boolean
}

export class KCClient {
  private readonly scope: any
  private readonly minValidity: number
  private readonly onUpdateToken: (token: string) => void | null
  constructor(private options: IKCClientOptions) {
    this.scope = new window.Keycloak(`${window.location.origin}/keycloak.json`)
    this.minValidity = options.minValidity || 180
    this.scope.onTokenExpired = this.onTokenExpired.bind(this)
    this.scope.onAuthRefreshError =
      options.onAuthRefreshError || this.onAuthRefreshError.bind(this)
    this.onUpdateToken = options.onUpdateToken
  }
  /**
   * ```js
   * await kcClient.checkSession();
   
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
  ): Promise<boolean | any> {
    const defaultOptions = {
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
      pkceMethod: 'S256',
      checkLoginIframe: false,
    }
    let merged = { ...defaultOptions, ...options }
    try {
      await this.scope.init(merged)
      return true
    } catch (e) {}
  }

  public isLoggedIn(): Boolean {
    return !!this.getToken()
  }

  /**
   * Returns true if the token has less than `minValidity` seconds left before
   * it expires.
   * @param minValidity If not specified, `0` is used.
   */
  public isTokenExpired(minValidity: number = 180): Boolean {
    return !!this.scope.isTokenExpired(minValidity)
  }

  public async updateToken() {
    var refreshed = await this.scope.updateToken(this.minValidity)
    this.onUpdateToken(this.getToken())
    return refreshed
  }
  public getUserName(): string {
    return this.scope.tokenParsed?.preferred_username
  }

  public hasRole(roles: Array<any>): Boolean {
    return roles.some((role) => this.scope.hasRealmRole(role))
  }

  public getToken(): string {
    return this.scope.token
  }
  public login(): void {
    return this.scope.login()
  }
  private async onTokenExpired() {
    console.log('token expired')
    try {
      await this.updateToken()
      console.log('successfully got a new token')
    } catch (err) {
      console.log(err)
    }
  }

  private onAuthRefreshError() {
    Modal.confirm({
      centered: true,
      title: 'Session timed out',
      cancelButtonProps: { style: { display: 'none' } },
      onOk: () => {
        //window.location.href = '/';
        this.login()
      },
    })
  }
}
