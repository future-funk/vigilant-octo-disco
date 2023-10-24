import {
  Builder,
  createQueryParams,
  QueryBuilder,
} from '@bpd/bpd-web/shared/data-access'
import { Team } from '@bpd/ui/constants'
import { generatePath } from 'react-router-dom'
import { ENDPOINTS, DAW_TAG } from '../constants'

export interface Participant {
  roleType: string
  roleOption: string
  displayName: string
  isPreSelected?: boolean
}
export type GetSearchParticipantsResult = Participant[]

export type GetSearchParticipantsPayload = {
  roleCode: string
  team: Team | null
}

const getSearchParticipants = (builder: Builder) =>
  QueryBuilder.get<GetSearchParticipantsResult, GetSearchParticipantsPayload>(
    builder,
    ({ roleCode, team }) => ({
      url: `${generatePath(ENDPOINTS.SEARCH_PARTICIPANTS)}${createQueryParams([
        ['role_code', roleCode],
        ['team', team],
      ])}`,
    }),
    [DAW_TAG]
  )

export default getSearchParticipants
