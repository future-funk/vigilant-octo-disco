import {
  Builder,
  QueryBuilder,
  QueryPayload,
} from '@bpd/bpd-web/shared/data-access'
import { generatePath } from 'react-router-dom'
import { ENDPOINTS } from '../constants'
import { DealHistoriesDto } from '../types'

export type GetHistoryResult = DealHistoriesDto

export type GetHistoryPayload = QueryPayload<{ id: string }>

const getHistory = (builder: Builder) =>
  QueryBuilder.get<GetHistoryResult, GetHistoryPayload>(
    builder,
    ({ url: { id }, body }) => ({
      url: generatePath(ENDPOINTS.DEALS.HISTORY, { id }),
      body,
    })
  )

export default getHistory
