import { useBPAuthz } from '@bpd/auth-authorization'

/**
 * Checks if the user is authenticated based on the provided parameters.
 * @param allowedNTIDs - Array of allowed NTIDs.
 * @param allowedDivisionIds - Array of allowed division IDs.
 * @param allowedOffices - Array of allowed offices.
 * @returns A boolean indicating if the user is authorized.
 */
const useCheckAuth = ({
  allowedNTIDs = [],
  allowedDivisionIds = [],
  allowedOffices = [],
}: {
  allowedNTIDs?: string[]
  allowedDivisionIds?: string[]
  allowedOffices?: string[]
}): boolean => {
  const { ntid, divisionId, office } = useBPAuthz() ?? {}

  const isAllowed =
    allowedNTIDs.includes(ntid) ||
    allowedDivisionIds.includes(divisionId) ||
    allowedOffices.includes(office)

  return isAllowed
}

export default useCheckAuth
