import { scopeId } from '../utils'
import { createCartoQuery } from '@bpd/vendors/carto'

export interface GetInsightChartsSource {
  subQuery: string
}

export const INSIGHT_CHARTS_SOURCE_ID = scopeId('INSIGHT_CHARTS_SOURCE_ID')

const getInsightChartsSource = ({ subQuery }: GetInsightChartsSource) =>
  createCartoQuery(
    INSIGHT_CHARTS_SOURCE_ID,
    subQuery
  )

export default getInsightChartsSource