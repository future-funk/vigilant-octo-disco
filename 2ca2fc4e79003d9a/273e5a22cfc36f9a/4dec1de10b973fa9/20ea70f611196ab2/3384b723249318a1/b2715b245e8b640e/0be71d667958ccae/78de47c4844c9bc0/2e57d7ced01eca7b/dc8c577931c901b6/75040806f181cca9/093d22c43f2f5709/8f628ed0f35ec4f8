import { scopeId } from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'
import { createCartoQuery } from '@bpd/vendors/carto'

export interface GetLocationSource {
  latitude: number
  longitude: number
  siteMapBoundary: string
}

export const LOCATION_SOURCE_ID = scopeId('LOCATION_SOURCE_ID')

const getLocationSource = ({
  latitude,
  longitude,
  siteMapBoundary,
}: GetLocationSource) => {
  const distance = `ROUND(CAST(ST_Distance(ST_GeomFromText('POINT(${longitude} ${latitude})'), geography(the_geom))*0.000621371 as numeric), 2) AS distance`
  return createCartoQuery(
    LOCATION_SOURCE_ID,
    `SELECT k.* FROM (
            SELECT p.name_en, p.cartodb_id, p.name, p.poi_type, ${distance}
            FROM mv_dm_cn_poi p WHERE ${
              siteMapBoundary
                ? `the_geom && ST_MakeEnvelope (${siteMapBoundary},4326)`
                : '1=1'
            } 
            AND p.poi_type IN('City Centre', 'Train Station', 'Airport')
            
            UNION ALL
        
            (SELECT DISTINCT c.rn as name_en, 0 as cartodb_id, '' as name, 'Highway' as poi_type, 0 as distance FROM (
              SELECT DISTINCT * 
              FROM (
                SELECT * ,${distance} FROM road4 WHERE ${
      siteMapBoundary
        ? `the_geom && ST_MakeEnvelope (${siteMapBoundary},4326)`
        : '1=1'
    } AND (gb > 420000 AND gb <420300)) t
                WHERE t.distance < 5
                ORDER BY t.distance
              ) c LIMIT 5)
           ) k
           ORDER BY k.distance ASC
          `
  )
}

export default getLocationSource
