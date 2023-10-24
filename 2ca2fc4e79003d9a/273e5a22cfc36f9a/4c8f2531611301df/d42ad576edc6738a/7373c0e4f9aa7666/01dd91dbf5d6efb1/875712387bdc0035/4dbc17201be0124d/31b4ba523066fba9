import {
  Builder,
  QueryBuilder,
  QueryPayload,
} from '@bpd/bpd-web/shared/data-access'
import { generatePath } from 'react-router-dom'
import { ENDPOINTS, TAGS } from '../constants'
import { CommentsDto } from '../types'

export type GetCommentsResult = CommentsDto

export type GetCommentsPayload = QueryPayload<{ id: string }>

const getComments = (builder: Builder) =>
  QueryBuilder.get<GetCommentsResult, GetCommentsPayload>(
    builder,
    ({ url: { id } }) => ({
      url: generatePath(ENDPOINTS.DEALS.COMMENTS, { id }),
    }),
    [TAGS.COMMENTS]
  )

export default getComments
