import { QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import { TAGS } from '../constants'
import {
  GetOverviewByDimensionSource,
  getOverviewByDimensionSource,
} from '../sources'
import type { ReFlowSectorCartoBuilder } from '../types'

export interface OverviewByDimension {
  dt: string
  dimension: string
  priceUsd: number
  priceYoyUsd: number
  priceYoyPercent: number
  weightPercent: number
  weightYoyPercent: number
}

export type GetOverviewByDimensionResult = OverviewByDimension[]

const getOverviewByDimension = (builder: ReFlowSectorCartoBuilder) =>
  QueryBuilder.get<GetOverviewByDimensionResult, GetOverviewByDimensionSource>(
    builder,
    getOverviewByDimensionSource,
    [TAGS.MARKET_TRANSACTIONS_CARTO_TAG]
  )

export default getOverviewByDimension
