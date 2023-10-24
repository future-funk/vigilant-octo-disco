import { useSelector } from 'react-redux'
import { AuthSelectors } from './authz.slice'

export const useBPAuthz = () => useSelector(AuthSelectors.getUser)
