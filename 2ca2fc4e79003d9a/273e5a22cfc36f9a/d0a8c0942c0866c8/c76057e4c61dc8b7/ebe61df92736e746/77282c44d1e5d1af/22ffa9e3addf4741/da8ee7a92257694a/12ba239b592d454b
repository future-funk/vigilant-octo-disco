import { createCartoQuery } from '@bpd/vendors/carto'
import { scopeId } from '../utils'

export const REGIONS_COUNTRIES = scopeId('REGIONS_COUNTRIES')

const getBaseRegionsCountriesSource = () => {
  return createCartoQuery(
    REGIONS_COUNTRIES,
    `SELECT
      region,
      MAX(is_selected::INTEGER) OVER (PARTITION BY region)::BOOLEAN AS region_is_selected,
      country,
      is_selected AS country_is_selected
    FROM
      carto.app_rca_re_flow_regions_countries`
  )
}

export default getBaseRegionsCountriesSource
