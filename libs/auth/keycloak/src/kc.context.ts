import { createContext } from 'react'

export declare class User {
  name?: string
}
export interface IError extends Error {
  status?: number
  errorCode?: number
}

export interface IAuthState<TUser extends User = User> {
  token?: string
  error?: IError
  isAuthenticated?: boolean
  isLoading?: boolean
  user?: TUser
}

/**
 * Contains the authenticated state and authentication methods provided by the `kcClient` hook.
 */
export interface IConfig {
  headers?: object
}
export interface IKCContext {
  //getAuthTokenHeader: (config?: IConfig) => Promise<IConfig>;
  getAuthTokenHeader: (config?: IConfig) => any
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
  throw new Error('You forgot to wrap your component in <KCAuthProvider>.')
}

/**
 * @ignore
 */
const initialContext = {
  getAuthTokenHeader: stub,
}

/**
 * The KC Context
 */
export const KCContext = createContext<IKCContext>(initialContext)
