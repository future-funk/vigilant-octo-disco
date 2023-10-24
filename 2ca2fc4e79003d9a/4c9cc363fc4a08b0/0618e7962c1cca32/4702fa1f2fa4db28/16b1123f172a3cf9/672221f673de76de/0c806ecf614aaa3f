import { useBPAuthz } from '@bpd/auth-authorization'
import { ReactElement } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

export interface IRequireAuthzProps {
  allowedRoles?: Array<string>
  fallbackTo?: string
  children?: ReactElement
}

export function RequireAuthz(props: IRequireAuthzProps) {
  const user = useBPAuthz()

  const location = useLocation()

  const { allowedRoles, fallbackTo = '/' } = props

  const roles = (user?.roles || '').split(',')

  return !!user?.ntid && roles.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : (
    <Navigate to={fallbackTo} state={{ from: location }} replace /> //redirect to home screen
  )
}
