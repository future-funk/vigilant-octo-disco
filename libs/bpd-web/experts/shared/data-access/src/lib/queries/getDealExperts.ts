import {
  Builder,
  QueryPayload,
  abortPreviousQuery,
  createQueryParams,
} from '@bpd/bpd-web/shared/data-access'
import { ExpertsResponseDto } from '../types'
import { DEAL_BASE, EXPERTS_TAG } from '../constants'

export type GetDealExpertsResult = ExpertsResponseDto

export type GetDealExpertsPayload = QueryPayload<{
  topN: number
  monthsAgo: number
  corpTitle: string[]
  dealStatus: string[]
  breakdownBy: string
}>

const query = (queryItem: GetDealExpertsPayload) => {
  const { url } = queryItem
  const { topN, monthsAgo, corpTitle, dealStatus, breakdownBy } = url
  return {
    url: `${DEAL_BASE}${createQueryParams([
      ['topN', topN],
      ['monthsAgo', monthsAgo],
      ['corpTitle', corpTitle],
      ['dealStatus', dealStatus],
      ['breakdownBy', breakdownBy],
    ])}`,
  }
}

const getDealExperts = (builder: Builder) => {
  return builder.query<GetDealExpertsResult, GetDealExpertsPayload>({
    providesTags: [EXPERTS_TAG],
    async queryFn(arg, api, extraOptions, baseQuery) {
      abortPreviousQuery(api)
      const { error, data, meta } = await baseQuery(query(arg))
      if (error) return { error, meta }
      return { data: data as GetDealExpertsResult, meta }
    },
  })
}

export default getDealExperts
