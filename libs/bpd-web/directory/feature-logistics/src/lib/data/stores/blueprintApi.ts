import { transformQueries } from '@bpd/bpd-web/shared/data-access'
import { blueprintApiSlice } from '@bpd/bpd-web/shared/store'
import { LOGISTICS_BPD_API_TAG } from '../constants'
import { postUserCardSelection } from '../queries'

const blueprintApi = blueprintApiSlice
  .enhanceEndpoints({ addTagTypes: [LOGISTICS_BPD_API_TAG] })
  .injectEndpoints({
    endpoints: (builder) => ({
      postEuLogisticsUserCardSelections: postUserCardSelection(builder),
    }),
  })

export const queries = transformQueries(blueprintApi, 'EuLogistics')

export default blueprintApi
