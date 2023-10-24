import { formatStringArray } from '@bpd/utils/formatters'
import { createCartoQuery } from '@bpd/vendors/carto'
import { scopeId } from '../utils'

export interface GetYtdTxnByDimensionSource {
  dimension: string
  countries: string[]
  sectors: string[]
}

export const YTD_TXN_BY_DIMENSION = scopeId('YTD_TXN_BY_DIMENSION')

const getYtdTxnByDimensionSource = ({
  dimension,
  countries,
  sectors,
}: GetYtdTxnByDimensionSource) => {
  const sectorArray = formatStringArray(sectors)
  const countryArray = formatStringArray(countries)

  return createCartoQuery(
    YTD_TXN_BY_DIMENSION,
    `SELECT * FROM carto.fn_app_rca_re_flow_get_ytd_by_dimension(${countryArray}, ${sectorArray},  '${dimension}')`
  )
}

export default getYtdTxnByDimensionSource
