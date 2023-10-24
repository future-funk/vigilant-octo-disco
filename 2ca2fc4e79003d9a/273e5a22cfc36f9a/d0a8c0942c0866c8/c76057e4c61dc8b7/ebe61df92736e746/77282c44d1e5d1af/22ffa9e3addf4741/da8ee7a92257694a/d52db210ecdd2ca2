import { formatStringArray } from '@bpd/utils/formatters'
import { createCartoQuery } from '@bpd/vendors/carto'
import { scopeId } from '../utils'

export interface GetOverviewByDimensionSource {
  dimension: string
  countries: string[]
  sectors: string[]
}

export const OVERVIEW_BY_DIMENSION = scopeId('OVERVIEW_BY_DIMENSION')

const getOverviewByDimensionSource = ({
  dimension,
  countries,
  sectors,
}: GetOverviewByDimensionSource) => {
  const sectorArray = formatStringArray(sectors)
  const countryArray = formatStringArray(countries)

  return createCartoQuery(
    OVERVIEW_BY_DIMENSION,
    `SELECT * FROM carto.fn_app_rca_re_flow_get_overview_by_dimension(${countryArray}, ${sectorArray},  '${dimension}')`
  )
}

export default getOverviewByDimensionSource
