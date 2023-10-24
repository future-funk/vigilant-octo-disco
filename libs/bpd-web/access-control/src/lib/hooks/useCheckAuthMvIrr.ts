import useCheckAuth from './useCheckAuth'
import { AUTH_MVIRR } from '../constants'
import { UiSelectors, useAppSelector } from '@bpd/bpd-web/shared/store'

const { USERS, OFFICES } = AUTH_MVIRR

const useCheckAuthMvIrr = (currentTeam?: string): boolean => {
  const team = useAppSelector(UiSelectors.getTeam)

  const selectedTeam = currentTeam || team

  return useCheckAuth({
    allowedNTIDs: USERS[selectedTeam] ?? [],
    allowedOffices: OFFICES[selectedTeam] ?? [],
  })
}

export default useCheckAuthMvIrr
