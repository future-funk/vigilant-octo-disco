import {
  Builder,
  QueryBuilder,
  QueryPayload,
} from '@bpd/bpd-web/shared/data-access'
import { generatePath } from 'react-router-dom'
import { ENDPOINTS, TAGS } from '../constants'

export type DeleteCommentResult = unknown

export type DeleteCommentPayload = QueryPayload<{
  commentId: string
  id: string
}>

const deleteComment = (builder: Builder) =>
  QueryBuilder.delete<DeleteCommentResult, DeleteCommentPayload>(
    builder,
    ({ url: { commentId, id } }) => ({
      url: `${generatePath(ENDPOINTS.DEALS.COMMENTS, { id })}/${commentId}`,
    }),
    [TAGS.COMMENTS]
  )

export default deleteComment
