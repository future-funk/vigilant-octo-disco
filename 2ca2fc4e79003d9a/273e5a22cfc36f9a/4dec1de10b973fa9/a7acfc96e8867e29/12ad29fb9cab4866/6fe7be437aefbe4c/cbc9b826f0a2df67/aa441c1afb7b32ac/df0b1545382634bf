import { API_SCOPE } from '../constants'
import { transformQueries } from '@bpd/bpd-web/shared/data-access'
import { cartoApiSlice } from '@bpd/bpd-web/shared/store'
import {
  getAssets,
  getAddressSearch,
  getAnalytics,
  getOverviewMapBoundary,
} from '../queries'

export const injectCartoEndpoints = () =>
  cartoApiSlice.injectEndpoints({
    endpoints: (builder) => ({
      getLogisticsAssets: getAssets(builder),
      getDirectorySearch: getAddressSearch(builder),
      getLogisticsAnalytics: getAnalytics(builder),
      getOverviewMapBoundary: getOverviewMapBoundary(builder),
    }),
    overrideExisting: true,
  })

const cartoApi = injectCartoEndpoints()

export const queries = transformQueries(cartoApi, API_SCOPE)

export default cartoApi
