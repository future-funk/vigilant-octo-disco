import { QueryBuilder, MapBounds } from '@bpd/bpd-web/shared/data-access'
import { TAGS } from '../constants'
import { GetMapBoundarySource, getMapBoundarySource } from '../sources'
import { ESGCartoBuilder } from '../types'

export type GetMapBoundaryResult = MapBounds

const getMapBoundary = (builder: ESGCartoBuilder) =>
  QueryBuilder.get<GetMapBoundaryResult, GetMapBoundarySource>(
    builder,
    getMapBoundarySource,
    [TAGS.ESG_LANDSCAPE]
  )

export default getMapBoundary
