import { scopeId } from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'
import { createCartoQuery } from '@bpd/vendors/carto'
import { map } from 'lodash'

export interface getPoiSourceProps {
  types: string[]
}

export const POI_SOURCE_ID = scopeId('POI_SOURCE_ID')

const getPoiSource = ({ types }: getPoiSourceProps) =>
  createCartoQuery(
    POI_SOURCE_ID,
    `SELECT * FROM mv_dm_cn_poi ${ types ? `WHERE poi_type IN (${map(types, type => `'${type}'`)})` : ``}`
  )

export default getPoiSource
