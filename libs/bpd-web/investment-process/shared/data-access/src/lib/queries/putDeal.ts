import {
  Builder,
  QueryBuilder,
  QueryPayload,
} from '@bpd/bpd-web/shared/data-access'
import { ENDPOINTS } from '../constants'

export type PutDealResult = unknown

export type PutDealPayload = QueryPayload<
  { id: string },
  { staffs: { id: number; commitment: number }[] }
>

const putDeal = (builder: Builder) =>
  QueryBuilder.put<PutDealResult, PutDealPayload>(
    builder,
    ({ url: { id }, body }) => ({
      url: `${ENDPOINTS.DEALS.BASE}/${id}`,
      body,
    })
  )

export default putDeal
