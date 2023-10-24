import {
  Builder,
  QueryBuilder,
  QueryPayload,
} from '@bpd/bpd-web/shared/data-access'
import { generatePath } from 'react-router-dom'
import { map, values } from 'lodash'
import { updateBlueprintApiQueryData } from '@bpd/bpd-web/shared/store'
import { DealDto } from '../types'
import { ENDPOINTS, TAGS } from '../constants'

export type PostCommentResult = unknown

export type PostCommentPayload = QueryPayload<
  { id: string },
  { comment: string }
>

const postComment = (builder: Builder) =>
  QueryBuilder.post<PostCommentResult, PostCommentPayload>(
    builder,
    ({ url: { id }, body }) => ({
      url: generatePath(ENDPOINTS.DEALS.COMMENTS, { id }),
      body,
    }),
    [TAGS.COMMENTS]
  )

export default postComment
