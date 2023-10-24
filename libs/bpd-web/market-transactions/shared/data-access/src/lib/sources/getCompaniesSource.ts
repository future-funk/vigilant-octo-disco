import { formatStringArray } from '@bpd/utils/formatters'
import { createCartoQuery } from '@bpd/vendors/carto'
import { scopeId } from '../utils'

export interface GetCompaniesSource {
  countries: string[]
  sectors: string[]
  n_mths: number
  txn_type: string | null
  is_gross: boolean | null
  n_top: number
  search?: string
}

export const CAMPANY_TOP_TXNS = scopeId('CAMPANY_TOP_TXNS')

const getCompaniesSource = ({
  txn_type,
  n_mths,
  countries,
  sectors,
  is_gross,
  n_top,
  search,
}: GetCompaniesSource) => {
  const sectorArray = formatStringArray(sectors)
  const countryArray = formatStringArray(countries)
  const p_txn_type = txn_type ? `'${txn_type}'` : null
  const p_is_gross = txn_type ? `'${is_gross}'` : null
  const search_term = search ? `'${search}'` : null

  return createCartoQuery(
    CAMPANY_TOP_TXNS,
    `SELECT * FROM carto.fn_app_rca_re_flow_get_company_top_txns(${countryArray}, ${sectorArray}, ${n_mths}, ${p_txn_type}, ${p_is_gross}, ${n_top}, ${search_term})`
  )
}

export default getCompaniesSource
