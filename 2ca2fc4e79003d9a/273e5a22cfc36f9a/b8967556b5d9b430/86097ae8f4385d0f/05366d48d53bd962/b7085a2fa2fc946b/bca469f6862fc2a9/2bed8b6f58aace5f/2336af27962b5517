import { includes } from 'lodash'
import { useBPAuthz } from '@bpd/auth-authorization'
import {
  ALLOWED_CF_DIVISION_IDS,
  ALLOWED_MV_DIVISION_IDS,
  ALLOWED_USERS_UPLOAD_CF,
  ALLOWED_USERS_UPLOAD_MV,
} from '../constants'
import { UiSelectors, useAppSelector } from '@bpd/bpd-web/shared/store'

interface AccessFlags {
  doShowMvBtn: boolean
  doShowCfBtn: boolean
}

const useGetMvAndCfAccessFlags = (): AccessFlags => {
  const team = useAppSelector(UiSelectors.getTeam)

  const { ntid, divisionId } = useBPAuthz()

  return {
    doShowMvBtn:
      includes(ALLOWED_MV_DIVISION_IDS, divisionId) ||
      includes(ALLOWED_USERS_UPLOAD_MV[team], ntid),
    doShowCfBtn:
      includes(ALLOWED_CF_DIVISION_IDS[team], divisionId) ||
      includes(ALLOWED_USERS_UPLOAD_CF[team], ntid),
  }
}

export default useGetMvAndCfAccessFlags
