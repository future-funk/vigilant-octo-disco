import { formatStringArray } from '@bpd/utils/formatters'
import { createCartoQuery } from '@bpd/vendors/carto'
import { scopeId } from '../utils'

export interface GetCompanyDecompByNetFlowSource {
  countries: string[]
  sectors: string[]
  months: number
  companyName: string
  companyCountry: string
  dimension: string
}

export const COMAPANY_TXN_DECOMP_BY_NET_FLOW = scopeId(
  'COMAPANY_TXN_DECOMP_BY_NET_FLOW'
)

export const COMAPANY_TXN_NET_FLOW_DATA = scopeId(
  'COMAPANY_TXN_DECOMP_BY_NET_FLOW'
)

const getCompanyDecompByNetFlowSource = ({
  countries,
  sectors,
  months = 12,
  companyName,
  companyCountry: company_country,
  dimension,
}: GetCompanyDecompByNetFlowSource) => {
  const sectorArray = formatStringArray(sectors)
  const countryArray = formatStringArray(countries)
  const companyCountry = company_country ? `'${company_country}'` : null

  return createCartoQuery(
    COMAPANY_TXN_DECOMP_BY_NET_FLOW,
    `SELECT
    CASE WHEN t.row_num <= 5 THEN
        t.dimension
    ELSE
        'Others'
    END AS dimension,
    SUM(t.net_price_usd) AS net_price_usd,
    SUM(t.net_percent) AS net_percent
    FROM (
      SELECT
          dimension,
          net_price_usd,
          net_percent,
          ROW_NUMBER() OVER (ORDER BY ABS(net_price_usd) DESC) AS row_num
      FROM
          carto.fn_app_rca_re_flow_get_company_txn_decomp(
            ${countryArray},
            ${sectorArray},
            ${months},
            '${companyName}',
            ${companyCountry},
            '${dimension}')
    ) t
    GROUP BY 1
    ORDER BY 2 DESC`
  )
}

export default getCompanyDecompByNetFlowSource
