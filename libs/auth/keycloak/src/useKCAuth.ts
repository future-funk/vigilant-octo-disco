import { IAuthState } from './kc.context'
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
 * } = useKCAuth();
 * ```
 *
 * Use the `useKCAuth` hook in your components to access the auth state and methods.
 *
 */
export const useKCAuth = (): IAuthState =>
  useSelector((state: any) => state.auth) as IAuthState
