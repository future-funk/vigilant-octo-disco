import { scopeId } from '../utils'
import { createCartoQuery } from '@bpd/vendors/carto'

export interface GetMarketWeightedAverageSource {
  subQuery: string
}

export const MARKET_WEIGHTED_AVERAGE_SOURCE_ID = scopeId(
  'MARKET_WEIGHTED_AVERAGE_SOURCE_ID'
)

const getMarketWeightedAverage = ({
  subQuery,
}: GetMarketWeightedAverageSource) => {
  return createCartoQuery(MARKET_WEIGHTED_AVERAGE_SOURCE_ID, subQuery)
}

export default getMarketWeightedAverage
