import { Builder, abortPreviousQuery } from '@bpd/bpd-web/shared/data-access'
import { generatePath } from 'react-router-dom'
import { ENDPOINTS, TAGS } from '../constants'

export interface MarketValuesHistory {
  sysDt: string
  id: number
  fyStartDt: string
  team: string
  projId: string
  lastUpdateDt?: string
  lastUpdateUser: string
  lastUpdateInd: string
  field: string
  oldVal: string
  newVal: string
  lastUpdateUserName: string
  initials: string
}

export type GetMarketValuesHistoryResult = MarketValuesHistory[]
interface GetMarketValuesHistoryPayload {
  fiscalYear: string
  team: string
  projId: string
}

const query = (requestPayload: GetMarketValuesHistoryPayload) => {
  const { fiscalYear, team, projId } = requestPayload
  return {
    url: generatePath(ENDPOINTS.PROJECT.MV_HISTORY, {
      team,
      fiscalYear,
      projId,
    }),
  }
}

const getMarketValuesHistory = (builder: Builder) => {
  return builder.query<
    GetMarketValuesHistoryResult,
    GetMarketValuesHistoryPayload
  >({
    providesTags: [TAGS.MV_IRR_API_TAG],
    async queryFn(arg, api, extraOptions, baseQuery) {
      abortPreviousQuery(api)
      const { error, data, meta } = await baseQuery(query(arg))
      if (error) return { error, meta }
      return { data: data as GetMarketValuesHistoryResult, meta }
    },
  })
}

export default getMarketValuesHistory
