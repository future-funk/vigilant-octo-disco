import { createCartoQuery } from '@bpd/vendors/carto'
import { generateQueryCondition } from '../../utils'
import { scopeId } from '../constants'

export interface GetOverviewMapBoundarySource {
  filters?: Record<string, string[]>
  viewport?: string | null
}

export const MAP_BOUNDARY_SOURCE_ID = scopeId('MAP_BOUNDARY')

const getOverviewMapBoundarySource = ({
  filters,
  viewport,
}: GetOverviewMapBoundarySource) => {
  const paramClause = generateQueryCondition(filters, viewport)

  return createCartoQuery(
    MAP_BOUNDARY_SOURCE_ID,
    `SELECT ST_Extent(the_geom) as bounds
    FROM carto.fn_app_eu_lg_get_gic_owned_assets(${paramClause})
    `
  )
}

export default getOverviewMapBoundarySource
