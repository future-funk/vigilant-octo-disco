import { NTID } from '../constants'
import useCheckAuth from './useCheckAuth'

const useCheckAuthIIGOnly = (): boolean => {
  const allowdedUsers = [...NTID.IIG_USERS, ...NTID.IIG_VENDORS]

  return useCheckAuth({
    allowedNTIDs: allowdedUsers ?? [],
  })
}

export default useCheckAuthIIGOnly
