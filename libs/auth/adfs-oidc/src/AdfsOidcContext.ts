import { createContext } from 'react'
import { HttpError as BaseHttpError } from '@bpd/auth-authorization'
import { AxiosRequestConfig } from 'axios'

export declare class User {
  name?: string
}

interface HttpError extends BaseHttpError, Error {
  errorCode?: number
}

export interface IAuthState<TUser extends User = User> {
  token?: string | null
  error?: HttpError
  isAuthenticated?: boolean
  isLoading?: boolean
  user?: TUser
}

export interface IAdfsOidcContext {
  //getAuthTokenHeader: (config?: IConfig) => Promise<IConfig>;
  getAuthTokenHeader: (
    config: AxiosRequestConfig
  ) => Promise<AxiosRequestConfig | void>
}

/**
 * The initial auth state.
 */
export const initialAuthState: IAuthState = {
  isAuthenticated: false,
  isLoading: true,
}

/**
 * @ignore
 */
const stub = (): never => {
  throw new Error(
    'You forgot to wrap your component in <AdfsOidcAuthProvider>.'
  )
}

/**
 * @ignore
 */
const initialContext = {
  getAuthTokenHeader: stub,
}

/**
 * The AdfsOidc Context
 */
export const AdfsOidcContext = createContext<IAdfsOidcContext>(initialContext)
