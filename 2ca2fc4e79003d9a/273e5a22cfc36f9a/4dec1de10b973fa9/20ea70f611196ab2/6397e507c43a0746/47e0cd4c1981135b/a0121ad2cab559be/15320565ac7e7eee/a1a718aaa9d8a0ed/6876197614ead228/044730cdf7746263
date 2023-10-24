import { DirectoryCartoBuilder } from '../types'
import { QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import {
  GetMarketWeightedAverageSource,
  getMarketWeightedAverageSource,
} from '../sources'

export interface MarketWeightedAverage {
  value: number
  dealcount: number
  currency: string
}

export type GetMarketWeightedAverageResult = MarketWeightedAverage[]

const getMarketWeightedAverage = (builder: DirectoryCartoBuilder) =>
  QueryBuilder.get<GetMarketWeightedAverageResult, GetMarketWeightedAverageSource>(
    builder,
    getMarketWeightedAverageSource
  )

export default getMarketWeightedAverage
