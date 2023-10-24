import { Builder, abortPreviousQuery } from '@bpd/bpd-web/shared/data-access'
import { generatePath } from 'react-router-dom'
import { ENDPOINTS, TAGS } from '../constants'

export interface CategoriesHistory {
  fyStartDt: string
  team: string
  projId: string
  txnDt: Date
  category: string
  oldVal: string
  newVal: string
  lastUpdateDt?: string
  lastUpdateUser: string
  lastUpdateInd: string
  field: string
  lastUpdateUserName: string
  initials: string
}

export type GetCategoriesHistoryResult = CategoriesHistory[]
interface GetCategoriesHistoryPayload {
  fiscalYear: string
  team: string
  projId: string
}

const query = (requestPayload: GetCategoriesHistoryPayload) => {
  const { fiscalYear, team, projId } = requestPayload
  return {
    url: generatePath(ENDPOINTS.PROJECT.CATEGORIES_HISTORY, {
      team,
      fiscalYear,
      projId,
    }),
  }
}

const getCategoriesHistory = (builder: Builder) => {
  return builder.query<GetCategoriesHistoryResult, GetCategoriesHistoryPayload>(
    {
      providesTags: [TAGS.MV_IRR_API_TAG],
      async queryFn(arg, api, extraOptions, baseQuery) {
        abortPreviousQuery(api)
        const { error, data, meta } = await baseQuery(query(arg))
        if (error) return { error, meta }
        return { data: data as GetCategoriesHistoryResult, meta }
      },
    }
  )
}

export default getCategoriesHistory
