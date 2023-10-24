import { transformQueries } from '@bpd/bpd-web/shared/data-access'
import { cartoApiSlice } from '@bpd/bpd-web/shared/store'
import {
  getTopMsaAssets,
  getMsaAssets,
  getMsaLastUpdateDt,
  getMsaSectors,
} from '../queries'
import { TAGS, API_SCOPE } from '../constants'

cartoApiSlice.enhanceEndpoints({ addTagTypes: [TAGS.MSA_EXPOSURE_CARTO_TAG] })

export const injectCartoEndpoints = () =>
  cartoApiSlice.injectEndpoints({
    endpoints: (builder) => ({
      getMsaExposureMsaAssets: getMsaAssets(builder),
      getMsaExposureTopMsaAssets: getTopMsaAssets(builder),
      getMsaExposureMsaLastUpdateDt: getMsaLastUpdateDt(builder),
      getMsaExposureMsaSectors: getMsaSectors(builder),
    }),
    overrideExisting: true,
  })

const cartoApi = injectCartoEndpoints()
export const queries = transformQueries(cartoApi, API_SCOPE)

export default cartoApi
