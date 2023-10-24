import { Builder, abortPreviousQuery } from '@bpd/bpd-web/shared/data-access'
import { generatePath } from 'react-router-dom'
import { ENDPOINTS, TAGS } from '../constants'

export interface CashflowsHistory {
  fyStartDt: string
  projId: string
  txnDt: string
  category: string
  lastUpdateDt?: string
  lastUpdateUser: string
  lastUpdateInd: string
  field: string
  oldVal?: number | string
  newVal?: number
  lastUpdateUserName: string
  initials: string
  sysDt: string
}

export type GetCashflowsHistoryResult = CashflowsHistory[]

interface GetCashflowsHistoryPayload {
  fiscalYear: string
  team: string
  projId: string
}

const query = (requestPayload: GetCashflowsHistoryPayload) => {
  const { fiscalYear, team, projId } = requestPayload
  return {
    url: generatePath(ENDPOINTS.PROJECT.CASHFLOWS_HISTORY, {
      team,
      fiscalYear,
      projId,
    }),
  }
}

const getCashflowsHistory = (builder: Builder) => {
  return builder.query<GetCashflowsHistoryResult, GetCashflowsHistoryPayload>({
    providesTags: [TAGS.MV_IRR_API_TAG],
    async queryFn(arg, api, extraOptions, baseQuery) {
      abortPreviousQuery(api)
      const { error, data, meta } = await baseQuery(query(arg))
      if (error) return { error, meta }
      return { data: data as GetCashflowsHistoryResult, meta }
    },
  })
}

export default getCashflowsHistory
