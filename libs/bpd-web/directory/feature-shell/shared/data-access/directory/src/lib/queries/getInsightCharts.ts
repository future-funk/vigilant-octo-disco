import { DirectoryCartoBuilder } from '../types'
import { QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import {
  GetInsightChartsSource,
  getInsightChartsSource,
} from '../sources'

export interface InsightCharts {
  count: number,
  maxcr: number,
  mincr: number
}

export type GetInsightChartsResult = InsightCharts[]

const getInsightCharts = (builder: DirectoryCartoBuilder) =>
  QueryBuilder.get<GetInsightChartsResult, GetInsightChartsSource>(
    builder,
    getInsightChartsSource
  )

export default getInsightCharts
