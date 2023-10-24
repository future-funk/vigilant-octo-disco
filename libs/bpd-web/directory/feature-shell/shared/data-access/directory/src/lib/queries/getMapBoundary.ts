import { MapBounds, QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import { DIRECTORY_TAG } from '../constants'
import { GetMapBoundarySource, getMapBoundarySource } from '../sources'
import type { DirectoryCartoBuilder } from '../types'

export type GetMapBoundaryResult = MapBounds

const getMapBoundary = (builder: DirectoryCartoBuilder) =>
  QueryBuilder.get<GetMapBoundaryResult, GetMapBoundarySource>(
    builder,
    getMapBoundarySource,
    [DIRECTORY_TAG]
  )

export default getMapBoundary
