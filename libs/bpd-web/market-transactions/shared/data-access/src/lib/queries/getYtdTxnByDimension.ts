import { QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import { TAGS } from '../constants'
import {
  GetYtdTxnByDimensionSource,
  getYtdTxnByDimensionSource,
} from '../sources'
import type { ReFlowSectorCartoBuilder } from '../types'

export interface YtdTxnByDimension {
  dt: string
  dimension: string
  priceUsd: number
  priceYoyPercent: number
  weightPercent: number
}

export type GetYtdTxnByDimensionResult = YtdTxnByDimension[]

const getYtdTxnByDimension = (builder: ReFlowSectorCartoBuilder) =>
  QueryBuilder.get<GetYtdTxnByDimensionResult, GetYtdTxnByDimensionSource>(
    builder,
    getYtdTxnByDimensionSource,
    [TAGS.MARKET_TRANSACTIONS_CARTO_TAG]
  )

export default getYtdTxnByDimension
