import { scopeId } from '../utils'
import { createCartoQuery } from '@bpd/vendors/carto'

export interface GetTopInsightSource {
  sqlQuery: string
}

export const TOP_INSIGHT_SOURCE_ID = scopeId('TOP_INSIGHT_SOURCE_ID')

const getTopInsight = ({ sqlQuery }: GetTopInsightSource) =>
  createCartoQuery(TOP_INSIGHT_SOURCE_ID, sqlQuery)

export default getTopInsight
