import { formatStringArray } from '@bpd/utils/formatters'
import { createCartoQuery } from '@bpd/vendors/carto'
import { scopeId } from '../utils'

export interface GetCompanyTxnsSource {
  countries: string[]
  sectors: string[]
  months: number
  companyName: string
  companyCountry: string
}

export const COMAPANY_TXNS = scopeId('COMAPANY_TXNS')

const getCompanyTxnsSource = ({
  countries,
  sectors,
  months = 12,
  companyName,
  companyCountry: company_country,
}: GetCompanyTxnsSource) => {
  const sectorArray = formatStringArray(sectors)
  const countryArray = formatStringArray(countries)
  const companyCountry = company_country ? `'${company_country}'` : null

  return createCartoQuery(
    COMAPANY_TXNS,
    `SELECT * FROM carto.fn_app_rca_re_flow_get_company_txns(${countryArray}, ${sectorArray}, ${months}, '${companyName}', ${companyCountry})`
  )
}

export default getCompanyTxnsSource
