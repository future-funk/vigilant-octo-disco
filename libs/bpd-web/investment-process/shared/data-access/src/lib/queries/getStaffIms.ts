import {
  Builder,
  createQueryParams,
  QueryBuilder,
  QueryPayload,
  Team,
} from '@bpd/bpd-web/shared/data-access'
import { ENDPOINTS } from '../constants'
import { StaffImsDto } from '../types'

export type GetStaffImsResult = StaffImsDto

export type GetStaffImsPayload = QueryPayload<{
  team: Team
}>

const getStaffIms = (builder: Builder) =>
  QueryBuilder.get<GetStaffImsResult, GetStaffImsPayload>(
    builder,
    ({ url: { team } }) => ({
      url: `${ENDPOINTS.STAFFS.IM}${createQueryParams([['team', team]])}`,
    })
  )

export default getStaffIms
