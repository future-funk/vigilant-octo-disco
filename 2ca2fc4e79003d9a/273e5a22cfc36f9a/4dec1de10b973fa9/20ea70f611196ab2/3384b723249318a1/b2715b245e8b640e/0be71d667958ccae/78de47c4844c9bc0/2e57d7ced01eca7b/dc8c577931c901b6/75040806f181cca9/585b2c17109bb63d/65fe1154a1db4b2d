import { API_SCOPE } from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'
import { transformQueries } from '@bpd/bpd-web/shared/data-access'
import { cartoApiSlice } from '@bpd/bpd-web/shared/store'
import { getAssets, getLocation } from '../queries'

const cartoApi = cartoApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDirectoryAssets: getAssets(builder),
    getDirectoryLocation: getLocation(builder),
  }),
  overrideExisting: true,
})

export const queries = transformQueries(cartoApi, API_SCOPE)

export default cartoApi
