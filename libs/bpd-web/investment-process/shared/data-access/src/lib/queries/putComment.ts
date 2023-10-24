import {
  Builder,
  QueryBuilder,
  QueryPayload,
} from '@bpd/bpd-web/shared/data-access'
import { generatePath } from 'react-router-dom'
import { ENDPOINTS, TAGS } from '../constants'

export type PutCommentResult = unknown

export type PutCommentPayload = QueryPayload<
  { commentId: string; id: string },
  { comment: string }
>

const putComment = (builder: Builder) =>
  QueryBuilder.put<PutCommentResult, PutCommentPayload>(
    builder,
    ({ url: { commentId, id }, body }) => ({
      url: `${generatePath(ENDPOINTS.DEALS.COMMENTS, { id })}/${commentId}`,
      body,
    }),
    [TAGS.COMMENTS]
  )

export default putComment
