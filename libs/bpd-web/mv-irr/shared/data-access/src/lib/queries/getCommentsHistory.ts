import { Builder, abortPreviousQuery } from '@bpd/bpd-web/shared/data-access'
import { generatePath } from 'react-router-dom'
import { ENDPOINTS, TAGS } from '../constants'

export interface CommentsHistory {
  fyStartDt: string
  team: string
  projId: string
  comment: string
  createdDt: string
  createdUser: string
  lastUpdateDt: string
  lastUpdateUser: string
  createdUserName: string
  lastUpdateUserName: string
}

export type GetCommentsHistoryResult = CommentsHistory[]
interface GetCommentsHistoryPayload {
  fiscalYear: string
  team: string
  projId: string
}

const query = (requestPayload: GetCommentsHistoryPayload) => {
  const { fiscalYear, team, projId } = requestPayload
  return {
    url: generatePath(ENDPOINTS.PROJECT.COMMENTS_HISTORY, {
      team,
      fiscalYear,
      projId,
    }),
  }
}

const getCommentsHistory = (builder: Builder) => {
  return builder.query<GetCommentsHistoryResult, GetCommentsHistoryPayload>({
    providesTags: [TAGS.MV_IRR_API_TAG],
    async queryFn(arg, api, extraOptions, baseQuery) {
      abortPreviousQuery(api)
      const { error, data, meta } = await baseQuery(query(arg))
      if (error) return { error, meta }
      return { data: data as GetCommentsHistoryResult, meta }
    },
  })
}

export default getCommentsHistory
