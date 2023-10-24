import { QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import { LogisticsCartoBuilder, AnalyticsResponseDto } from '../types'
import { LOGISTICS_CARTO_TAG } from '../constants'
import { getAnalyticsSource, GetAnalyticsSource } from '../sources'

export type GetAnalyticsResult = AnalyticsResponseDto[]

const getAnalytics = (builder: LogisticsCartoBuilder) =>
  QueryBuilder.get<GetAnalyticsResult, GetAnalyticsSource>(
    builder,
    getAnalyticsSource,
    [LOGISTICS_CARTO_TAG]
  )

export default getAnalytics
