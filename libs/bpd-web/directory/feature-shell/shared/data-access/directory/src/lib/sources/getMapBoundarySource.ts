import { createCartoQuery } from '@bpd/vendors/carto'
import { scopeId } from '../utils'

export interface GetMapBoundarySource {
  appBpId: string
}

export const MAP_BOUNDARY_SOURCE_ID = scopeId('MAP_BOUNDARY')

const getMapBoundarySource = ({ appBpId }: GetMapBoundarySource) =>
  createCartoQuery(
    MAP_BOUNDARY_SOURCE_ID,
    `
        SELECT ST_Extent(the_geom) as bounds 
        FROM carto.tblrc_app_properties 
        WHERE app_bp_id='${appBpId}'
        `
  )

export default getMapBoundarySource
