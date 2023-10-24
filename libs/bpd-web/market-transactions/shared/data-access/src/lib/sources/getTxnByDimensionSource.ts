import { formatStringArray } from '@bpd/utils/formatters'
import { createCartoQuery } from '@bpd/vendors/carto'
import { scopeId } from '../utils'

export interface GetTxnByDimensionSource {
  dimension: string
  frequency: string
  countries: string[]
  sectors: string[]
}

export const TXN_BY_DIMENSION = scopeId('TXN_BY_DIMENSION')

const getTxnByDimensionSource = ({
  dimension,
  countries,
  sectors,
  frequency,
}: GetTxnByDimensionSource) => {
  const sectorArray = formatStringArray(sectors)
  const countryArray = formatStringArray(countries)

  return createCartoQuery(
    TXN_BY_DIMENSION,
    `SELECT * FROM carto.fn_app_rca_re_flow_get_txn_by_dimension(${countryArray}, ${sectorArray}, '${frequency}', '${dimension}')`
  )
}

export default getTxnByDimensionSource
