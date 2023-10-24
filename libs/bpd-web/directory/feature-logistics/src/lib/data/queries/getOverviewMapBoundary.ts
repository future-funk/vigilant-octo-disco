import { MapBounds, QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import { LOGISTICS_CARTO_TAG } from '../constants'
import {
  GetOverviewMapBoundarySource,
  getOverviewMapBoundarySource,
} from '../sources'
import { LogisticsCartoBuilder } from '../types'

export type GetMapBoundaryResult = MapBounds

const getOverviewMapBoundary = (builder: LogisticsCartoBuilder) =>
  QueryBuilder.get<GetMapBoundaryResult, GetOverviewMapBoundarySource>(
    builder,
    getOverviewMapBoundarySource,
    [LOGISTICS_CARTO_TAG]
  )

export default getOverviewMapBoundary
