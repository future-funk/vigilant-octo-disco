import {
  Builder,
  createQueryParams,
  QueryBuilder,
} from '@bpd/bpd-web/shared/data-access'
import { Team } from '@bpd/ui/constants'
import { generatePath } from 'react-router-dom'
import { ENDPOINTS, DAW_TAG } from '../constants'

export interface Staff {
  ntid: string
  name: string
  initials: string
  location: string
  deptId: string
  divId: string
  corpTitle: string
  emailAddress: string
  left: boolean
  teams: string
  divDesc: string
  deptDesc: string
}
export type GetStaffsResult = Staff[]

export type GetStaffsPayload = {
  team: Team | null
}

const getStaffs = (builder: Builder) =>
  QueryBuilder.get<GetStaffsResult, GetStaffsPayload>(
    builder,
    ({ team }) => ({
      url: `${generatePath(ENDPOINTS.STAFFS)}${createQueryParams([
        ['team', team],
      ])}`,
    }),
    [DAW_TAG]
  )

export default getStaffs
