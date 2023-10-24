import { useCheckAuthMvIrr } from '../hooks'

interface AuthMvIrrOptionProps {
  NotAllowedComponent?: JSX.Element
  team?: string
}

const withAuthMvIrr = (
  WrappedComponent: React.ComponentType<any>,
  wrapperOptions?: AuthMvIrrOptionProps
) => {
  const AuthComponent = (props: any) => {
    const { NotAllowedComponent, team } = wrapperOptions || {}
    const isAllowed = useCheckAuthMvIrr(team)

    if (!isAllowed) {
      return NotAllowedComponent ?? null
    }

    return <WrappedComponent {...props} />
  }

  return AuthComponent
}

export default withAuthMvIrr
