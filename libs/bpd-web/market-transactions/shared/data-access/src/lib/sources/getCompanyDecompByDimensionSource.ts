import { formatStringArray } from '@bpd/utils/formatters'
import { createCartoQuery } from '@bpd/vendors/carto'
import { scopeId } from '../utils'

export interface GetCompanyDecompByDimensionSource {
  countries: string[]
  sectors: string[]
  months: number
  companyName: string
  companyCountry: string
  dimension: string
}

export const COMAPANY_TXN_DECOMP_BY_DIMENSION = scopeId(
  'COMAPANY_TXN_DECOMP_BY_DIMENSION'
)

const getCompanyDecompByDimensionSource = ({
  countries,
  sectors,
  months = 12,
  companyName,
  companyCountry: company_country,
  dimension,
}: GetCompanyDecompByDimensionSource) => {
  const sectorArray = formatStringArray(sectors)
  const countryArray = formatStringArray(countries)
  const companyCountry = company_country ? `'${company_country}'` : null

  return createCartoQuery(
    COMAPANY_TXN_DECOMP_BY_DIMENSION,
    `SELECT * FROM carto.fn_app_rca_re_flow_get_company_txn_decomp(${countryArray}, ${sectorArray}, ${months}, '${companyName}', ${companyCountry}, '${dimension}')`
  )
}

export default getCompanyDecompByDimensionSource
