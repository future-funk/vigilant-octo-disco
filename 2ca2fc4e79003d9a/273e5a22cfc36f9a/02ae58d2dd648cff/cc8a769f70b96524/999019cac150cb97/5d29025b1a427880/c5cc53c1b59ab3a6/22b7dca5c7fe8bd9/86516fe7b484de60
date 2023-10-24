import { chain, get, snakeCase, isEmpty } from 'lodash'
import { createCartoQuery } from '@bpd/vendors/carto'
import { scopeId } from '../utils'

export interface GetMapBoundarySource {
  filters?: Record<string, string[]>
}

export const MAP_BOUNDARY_SOURCE_ID = scopeId('MAP_BOUNDARY')

const getMapBoundarySource = ({ filters }: GetMapBoundarySource) => {
  let whereClause = ''

  chain(filters)
    .keys()
    .forEach((column) => {
      const selectedValues = get(filters, column)
      whereClause += !isEmpty(selectedValues)
        ? ` AND ${snakeCase(column)} IN (${get(filters, column)})`
        : ``
    })
    .value()

  return createCartoQuery(
    MAP_BOUNDARY_SOURCE_ID,
    `SELECT ST_Extent(the_geom) as bounds FROM carto.dm_gl_esg WHERE 1=1 ${whereClause}`
  )
}

export default getMapBoundarySource
