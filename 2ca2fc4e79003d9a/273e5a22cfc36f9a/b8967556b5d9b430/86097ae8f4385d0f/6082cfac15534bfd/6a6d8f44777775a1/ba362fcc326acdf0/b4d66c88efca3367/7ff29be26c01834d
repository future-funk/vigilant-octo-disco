import { Builder, QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import { generatePath } from 'react-router-dom'
import { ENDPOINTS, TAGS } from '../constants'

interface PutProjectCommentPayload {
  url: {
    fiscalYear: string
    team: string
    projId: string
  }
  body: {
    comment: string
  }
}

export interface PutProjectCommentResult {
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

const putProjectComment = (builder: Builder) =>
  QueryBuilder.put<PutProjectCommentResult, PutProjectCommentPayload>(
    builder,
    ({ url: { fiscalYear, team, projId }, body }) => ({
      url: generatePath(ENDPOINTS.PROJECT.COMMENTS, {
        team,
        fiscalYear,
        projId,
      }),
      body,
    }),
    [TAGS.MV_IRR_API_TAG_COMMENT]
  )

export default putProjectComment
