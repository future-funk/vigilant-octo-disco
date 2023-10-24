import { compact } from 'lodash'
import { createCartoQuery } from '@bpd/vendors/carto'
import { scopeId } from '../utils'

export interface GetESGLandscapeSource {
  pointerCoordinates?: {
    longitude: number
    latitude: number
  } | null
}

export const ESG_LANDSCAPE = scopeId('ESG_LANDSCAPE')

const getESGLandscapeSource = ({
  pointerCoordinates,
}: GetESGLandscapeSource) => {
  const selectClause = compact([
    '*',
    pointerCoordinates
      ? `ROUND(CAST(ST_Distance(ST_GeomFromText('POINT(${pointerCoordinates.longitude} ${pointerCoordinates.latitude})'), geography(the_geom))*0.001 as numeric), 2) AS distance`
      : null,
  ]).join(' , ')

  return createCartoQuery(
    ESG_LANDSCAPE,
    `SELECT ${selectClause} FROM dm_gl_esg WHERE 1=1`
  )
}

export default getESGLandscapeSource
