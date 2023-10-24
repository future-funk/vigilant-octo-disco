import { Builder, abortPreviousQuery } from '@bpd/bpd-web/shared/data-access'
import { generatePath } from 'react-router-dom'
import { ENDPOINTS, TAGS } from '../constants'

export interface GetProjectCommentResult {
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

interface GetProjectCommentPayload {
  fiscalYear: string
  team: string
  projId: string
}

const query = (queryItem: GetProjectCommentPayload) => {
  const { fiscalYear, team, projId } = queryItem
  return {
    url: generatePath(ENDPOINTS.PROJECT.COMMENTS, {
      team,
      fiscalYear,
      projId,
    }),
  }
}

const getProjectComment = (builder: Builder) => {
  return builder.query<GetProjectCommentResult, GetProjectCommentPayload>({
    providesTags: [TAGS.MV_IRR_API_TAG_COMMENT],
    async queryFn(arg, api, extraOptions, baseQuery) {
      abortPreviousQuery(api)
      const { error, data, meta } = await baseQuery(query(arg))
      if (error) return { error, meta }
      return { data: data as GetProjectCommentResult, meta }
    },
  })
}

export default getProjectComment
