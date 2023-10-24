import { FC, ReactNode } from 'react'
import { useNavigate, useParams, Outlet } from 'react-router-dom'
import Company360Provider from './Company360Provider'

const envVariable = {
  environment: `${process.env['NX_REACT_APP_ENV']}`,
}

export interface C360ComponentProps {
  children?: ReactNode
}

const C360Component: FC<C360ComponentProps> = (props) => {
  const navigate = useNavigate()

  const params = useParams()

  return (
    <Company360Provider
      environment={
        `${envVariable.environment}` === 'prd' ? 'production' : 'staging'
      }
      router={{
        push: (location: string, state: any) => {
          navigate(`/company360${location}`, { state })
        },
        replace: (location: string, state: any) =>
          navigate(location, { state, replace: true }),
        query: params,
      }}
    >
      <Outlet />
    </Company360Provider>
  )
}

export default C360Component
