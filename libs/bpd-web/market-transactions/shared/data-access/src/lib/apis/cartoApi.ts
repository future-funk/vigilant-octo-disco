import { transformQueries } from '@bpd/bpd-web/shared/data-access'
import { cartoApiSlice } from '@bpd/bpd-web/shared/store'
import { TAGS } from '../constants'
import {
  getBaseRegionsCountries,
  getBaseSectors,
  getCompanies,
  getCompanyDecompByDimension,
  getCompanyDecompByNetFlow,
  getCompanyTxns,
  getDataSourceInfo,
  getOverviewByDimension,
  getTopSales,
  getTxnByDimension,
  getYtdTxnByDimension,
} from '../queries'

cartoApiSlice.enhanceEndpoints({ addTagTypes: [TAGS.MARKET_TRANSACTIONS_CARTO_TAG] })

export const injectCartoEndpoints = () =>
  cartoApiSlice.injectEndpoints({
    endpoints: (builder) => ({
      getBaseRegionsCountries: getBaseRegionsCountries(builder),
      getBaseSectors: getBaseSectors(builder),
      getCompanies: getCompanies(builder),
      getCompanyDecompByDimension: getCompanyDecompByDimension(builder),
      getCompanyDecompByNetFlow: getCompanyDecompByNetFlow(builder),
      getCompanyTxns: getCompanyTxns(builder),
      getDataSourceInfo: getDataSourceInfo(builder),
      getOverviewByDimension: getOverviewByDimension(builder),
      getTopSales: getTopSales(builder),
      getTxnByDimension: getTxnByDimension(builder),
      getYtdTxnByDimension: getYtdTxnByDimension(builder),
    }),
    overrideExisting: true,
  })

const cartoApi = injectCartoEndpoints()
export const queries = transformQueries(cartoApi, '')

export default cartoApi
