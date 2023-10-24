import { useBpAuth } from '@bpd/auth-adfs-oidc'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

export interface IRequireAuthProps {}

export function RequireAuth() {
  const { isAuthenticated } = useBpAuth()
  const location = useLocation()

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  )
}
export default RequireAuth
