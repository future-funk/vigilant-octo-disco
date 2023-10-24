import {
  abortPreviousQuery,
  Builder,
  createQueryParams,
  QueryPayload,
  Team,
} from '@bpd/bpd-web/shared/data-access'
import { map } from 'lodash'
import { ENDPOINTS, TAGS } from '../constants'
import { DealsDto } from '../types'

export type GetDealsResult = DealsDto

export type GetDealsPayload = QueryPayload<{
  category?: string[] | null
  ntid?: string | null
  status?: string[]
  subTeam?: string
  team?: Team
  lastUpdatedIn?: number
  vintageDtFrom?: string
  vintageDtTo?: string
}>

const query = ({
  url: {
    category,
    ntid,
    status,
    subTeam,
    team,
    lastUpdatedIn,
    vintageDtFrom,
    vintageDtTo,
  },
}: GetDealsPayload) => ({
  url: `${ENDPOINTS.DEALS.BASE}${createQueryParams([
    ['category', category],
    ['ntid', ntid],
    ['status', status],
    ['sub_team', subTeam],
    ['team', team],
    ['lastupdatedin', lastUpdatedIn],
    ['vintage_dt_from', vintageDtFrom],
    ['vintage_dt_to', vintageDtTo],
  ])}`,
})

const transformResponse = (response: GetDealsResult) =>
  map(response, (deal) => ({
    ...deal,
    normalizedStaffs: map(deal.staffs, 'ntid').join(' '),
  }))

const getDeals = (builder: Builder) =>
  builder.query<GetDealsResult, GetDealsPayload>({
    providesTags: [TAGS.DEALS],
    async queryFn(arg, api, extraOptions, baseQuery) {
      abortPreviousQuery(api)
      const { error, data, meta } = await baseQuery(query(arg))
      if (error) return { error, meta }
      return { data: transformResponse(data as GetDealsResult), meta }
    },
  })

export default getDeals
