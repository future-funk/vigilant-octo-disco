import { QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import { TAGS } from '../constants'
import {
  GetCompanyDecompByDimensionSource,
  getCompanyDecompByDimensionSource,
} from '../sources'
import type { ReFlowSectorCartoBuilder } from '../types'

export interface CompanyDecompByDimension {
  dimension: string
  priceUsd: number
  percent: number
  buyPriceUsd: number
  buyPercent: number
  sellPriceUsd: number
  sellPercent: number
  netPriceUsd: number
  netPercent: number
}

export type GetCompanyDecompByDimensionResult = CompanyDecompByDimension[]

const getCompanyDecompByDimension = (builder: ReFlowSectorCartoBuilder) =>
  QueryBuilder.get<
  GetCompanyDecompByDimensionResult,
    GetCompanyDecompByDimensionSource
  >(builder, getCompanyDecompByDimensionSource, [TAGS.MARKET_TRANSACTIONS_CARTO_TAG])

export default getCompanyDecompByDimension
