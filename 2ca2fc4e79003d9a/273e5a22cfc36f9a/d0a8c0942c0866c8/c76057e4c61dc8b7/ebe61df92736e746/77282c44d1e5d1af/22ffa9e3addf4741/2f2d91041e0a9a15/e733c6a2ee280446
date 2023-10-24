import { QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import { TAGS } from '../constants'
import { GetTxnByDimensionSource, getTxnByDimensionSource } from '../sources'
import type { ReFlowSectorCartoBuilder } from '../types'

export interface TxnByDimension {
  dt: string
  dimension: string
  priceMomPercent: null | number
  priceQoqPercent: null | number
  priceUsd: number
  priceYoyPercent: number
  weightPercent: number
  rollingUsd: number
}

export type GetTxnByDimensionResult = TxnByDimension[]

const getTxnByDimension = (builder: ReFlowSectorCartoBuilder) =>
  QueryBuilder.get<GetTxnByDimensionResult, GetTxnByDimensionSource>(
    builder,
    getTxnByDimensionSource,
    [TAGS.MARKET_TRANSACTIONS_CARTO_TAG]
  )

export default getTxnByDimension
