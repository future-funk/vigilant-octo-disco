import { transformQueries } from '@bpd/bpd-web/shared/data-access'
import { cartoApiSlice } from '@bpd/bpd-web/shared/store'
import { API_SCOPE } from '../constants'
import {
  getMapBoundary,
  getMarkets,
  getHoldings,
  getSearch,
  getMarketWeightedAverage,
  getTopInsight,
  getInsightCharts,
} from '../queries'

export const injectCartoEndpoints = () =>
  // .enhanceEndpoints({ addTagTypes: [DIRECTORY_CARTO_TAG] })
  cartoApiSlice.injectEndpoints({
    endpoints: (builder) => ({
      getDirectoryMapBoundary: getMapBoundary(builder),
      getDirectoryMarkets: getMarkets(builder),
      getDirectoryHoldings: getHoldings(builder),
      getDirectorySearch: getSearch(builder),
      getDirectoryMarketWeightedAverage: getMarketWeightedAverage(builder),
      getDirectoryTopInsights: getTopInsight(builder),
      getDirectoryInsightCharts: getInsightCharts(builder),
    }),
    overrideExisting: true,
  })

const cartoApi = injectCartoEndpoints()
export const queries = {
  ...transformQueries(cartoApi, API_SCOPE),
  //This function will assist us in returning a newly created mutation based on module override,
  //similar to the site analysis performed on the US site.
  getQueries: () => transformQueries(cartoApi, API_SCOPE),
}

export default cartoApi
