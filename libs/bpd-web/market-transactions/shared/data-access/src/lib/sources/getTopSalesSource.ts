import { formatStringArray } from '@bpd/utils/formatters'
import { createCartoQuery } from '@bpd/vendors/carto'
import { scopeId } from '../utils'

export interface GetTopSalesSource {
  n_mths: number
  is_portfolio: boolean
  countries?: string[]
  sectors?: string[]
  n_top: number
}

export const TOP_SALES = scopeId('TOP_SALES')

const getTopSalesSource = ({
  n_mths,
  countries,
  sectors,
  is_portfolio,
  n_top,
}: GetTopSalesSource) => {
  const sectorArray = formatStringArray(sectors)
  const countryArray = formatStringArray(countries)

  return createCartoQuery(
    TOP_SALES,
    `SELECT * FROM carto.fn_app_rca_re_flow_get_top_txns(${countryArray}, ${sectorArray}, ${n_mths}, ${is_portfolio}, ${n_top})`
  )
}

export default getTopSalesSource
