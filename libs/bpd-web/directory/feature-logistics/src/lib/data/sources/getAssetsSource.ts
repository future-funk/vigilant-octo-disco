import { compact, size } from 'lodash'
import { createCartoQuery } from '@bpd/vendors/carto'
import { scopeId } from '../constants'
import { generateQueryCondition } from '../../utils'
export interface GetAssetsSource {
  filters?: Record<string, string[]>
  viewport?: string | null
  limit?: number
  pointerCoordinates?: {
    longitude: number
    latitude: number
  } | null
}

export const ASSETS_SOURCE_ID = scopeId('ASSETS_SOURCE_ID')

const getAssetsSource = ({
  filters,
  viewport,
  pointerCoordinates,
  limit,
}: GetAssetsSource) => {
  const selectClause = compact([
    'name',
    'address',
    'asset_type',
    'cartodb_id',
    'country',
    'currency',
    'lat',
    'lng',
    'occupancy',
    'pop_coverage',
    'project_id',
    'project_name',
    'prop_id',
    'purchase_price_lcy',
    'reversion_potential',
    'status',
    'total_erv_psm_pa_lcy',
    'total_gla_sqm',
    'total_rent_psm_pa_lcy',
    'walb',
    'wale',
    'the_geom_webmercator',
    // 'distance',
    'leases_count',
    pointerCoordinates
      ? `ROUND(CAST(ST_Distance(ST_GeomFromText('POINT(${pointerCoordinates.longitude} ${pointerCoordinates.latitude})'), geography(the_geom))*0.001 as numeric), 2) AS distance`
      : null,
  ]).join(' , ')

  const paramClause = generateQueryCondition(filters, viewport)

  const limitClause = limit ? `LIMIT ${limit}` : ''

  const orderByClause = pointerCoordinates ? ' order by distance ' : ''

  return createCartoQuery(
    ASSETS_SOURCE_ID,
    `SELECT ${selectClause}   
    FROM carto.fn_app_eu_lg_get_gic_owned_assets(${paramClause})
    ${orderByClause}
    ${limitClause}`
  )
}

export default getAssetsSource
