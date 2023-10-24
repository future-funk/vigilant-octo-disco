import { transformQueries } from '@bpd/bpd-web/shared/data-access'
import { cartoApiSlice } from '@bpd/bpd-web/shared/store'
import { getESGLandscape, getMapBoundary } from '../queries'
import { TAGS, API_SCOPE } from '../constants'

cartoApiSlice.enhanceEndpoints({ addTagTypes: [TAGS.ESG_LANDSCAPE] })

export const injectCartoEndpoints = () =>
  cartoApiSlice.injectEndpoints({
    endpoints: (builder) => ({
      getESGPhysicalMapping: getESGLandscape(builder),
      getMapBoundary: getMapBoundary(builder)
    }),
    overrideExisting: true,
  })

const cartoApi = injectCartoEndpoints()
export const queries = transformQueries(cartoApi, API_SCOPE)

export default cartoApi
