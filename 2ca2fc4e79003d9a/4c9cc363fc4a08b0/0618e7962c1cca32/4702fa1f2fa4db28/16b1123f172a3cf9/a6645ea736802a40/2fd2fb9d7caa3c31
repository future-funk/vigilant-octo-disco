import { useEffect } from 'react'

export interface UnauthorizedProps {
  to: string
}

export function Unauthorized(props: UnauthorizedProps) {
  const { to } = props
  useEffect(() => {
    window.location.href = `/${to}.html`
  }, [to])
  return null
}
