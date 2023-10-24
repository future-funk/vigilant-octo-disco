import { createCartoQuery } from '@bpd/vendors/carto'
import { scopeId } from '../utils'

export interface GetSearchSource {
  team: string
  searchParam: string
}

export const DIRECTORY_SEARCH_SOURCE_ID = scopeId('DIRECTORY_SEARCH_SOURCE_ID')

const getSearchSource = ({ team, searchParam }: GetSearchSource) =>
  createCartoQuery(
    DIRECTORY_SEARCH_SOURCE_ID,
    `(SELECT distinct prop_id AS id,type,bp_name AS project_name,prop_name AS prop_name,CONCAT_WS(', ',NULLIF(TRIM(prop_address),''), NULLIF(TRIM(proj_city), '')) AS address,prop_thumbnail_url AS url,lat,lng,prop_valuation,bp_inv_status FROM VW_DIRECTORY WHERE 1=1 AND lower(team)='${team}' AND (bp_name ilike '%${searchParam}%' OR prop_name ilike '%${searchParam}%' OR prop_address ilike '%${searchParam}%' OR proj_city ilike '%${searchParam}%') AND bp_inv_status='Market' LIMIT 3) UNION (SELECT distinct prop_id AS id,type,bp_name AS project_name,prop_name AS prop_name,CONCAT_WS(', ',NULLIF(TRIM(prop_address),''), NULLIF(TRIM(proj_city), '')) AS address,prop_thumbnail_url AS url,lat,lng,prop_valuation,bp_inv_status FROM VW_DIRECTORY WHERE 1=1 AND lower(team)='${team}' AND (bp_name ilike '%${searchParam}%' OR prop_name ilike '%${searchParam}%' OR prop_address ilike '%${searchParam}%' OR proj_city ilike '%${searchParam}%') AND bp_inv_status='Holding' LIMIT 3)`
  )

export default getSearchSource
