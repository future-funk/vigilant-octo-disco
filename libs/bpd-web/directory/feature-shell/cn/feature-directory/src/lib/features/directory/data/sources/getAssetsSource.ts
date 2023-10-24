import { isNil } from 'lodash'
import { createCartoQuery } from '@bpd/vendors/carto'
import { scopeId } from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'

export interface GetAssetsSource {
  column?: string | null
  pointerCoordinates?: {
    longitude: number
    latitude: number
  } | null
  viewport?: string | null
  limit?: number
}

export const ASSETS_SOURCE_ID = scopeId('ASSETS_SOURCE_ID')

const getAssetsSource = ({
  column,
  pointerCoordinates,
  viewport,
  limit,
}: GetAssetsSource) =>
  createCartoQuery(
    ASSETS_SOURCE_ID,
    `SELECT ${
      !isNil(column)
        ? `distinct ${column}`
        : `* ${
            pointerCoordinates
              ? `, ROUND(CAST(ST_Distance(ST_GeomFromText('POINT(${pointerCoordinates.longitude} ${pointerCoordinates.latitude})'), geography(the_geom))*0.000621371 as numeric), 2) AS distance`
              : ``
          }`
    } FROM dm_cn_lg_gic_own_sites WHERE 1=1 
    ${
      !isNil(viewport) ? ` AND (the_geom && ST_MakeEnvelope(${viewport}))` : ``
    } 
    ${!isNil(column) ? ` AND ${column} IS NOT NULL ORDER BY ${column} ASC` : ``}
    ${!isNil(limit) ? ` LIMIT ${limit}` : ``}`
  )

export default getAssetsSource
