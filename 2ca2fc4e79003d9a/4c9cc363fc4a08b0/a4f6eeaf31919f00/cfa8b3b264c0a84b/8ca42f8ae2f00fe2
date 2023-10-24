import { IAuthState } from './AdfsOidcContext'
import { useSelector } from 'react-redux'
/**
 * ```js
 * const {
 *   // Auth state:
 *   token,
 *   error,
 *   isAuthenticated,
 *   isLoading,
 *   user,
 * } = useAdfsOidcAuth();
 * ```
 *
 * Use the `useAdfsOidcAuth` hook in your components to access the auth state and methods.
 *
 */
export const useAdfsOidcAuth = (): IAuthState =>
  useSelector((state: { auth: IAuthState }) => state.auth) as IAuthState
