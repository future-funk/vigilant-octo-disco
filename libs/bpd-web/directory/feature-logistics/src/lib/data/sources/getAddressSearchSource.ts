import { createCartoQuery } from '@bpd/vendors/carto'
import { scopeId } from '../constants'

export interface GetAddressSearchSource {
  team: string
  searchParam: string
}

export const DIRECTORY_SEARCH_SOURCE_ID = scopeId('DIRECTORY_SEARCH_SOURCE_ID')

const getAddressSearchSource = ({
  team,
  searchParam,
}: GetAddressSearchSource) =>
  createCartoQuery(
    DIRECTORY_SEARCH_SOURCE_ID,
    `SELECT *, project_name AS prop_name, 'Holding' as bp_inv_status FROM carto.fn_app_eu_lg_get_gic_owned_assets() WHERE (PROP_ID ilike '%${searchParam}%' OR PROJECT_ID ilike '%${searchParam}%' OR PROJECT_NAME ilike '%${searchParam}%' OR NAME ilike '%${searchParam}%' OR ADDRESS ilike '%${searchParam}%' OR CITY ilike '%${searchParam}%' OR country ilike '%${searchParam}%') LIMIT 6`
  )

export default getAddressSearchSource
