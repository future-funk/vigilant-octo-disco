import { transformQueries } from '@bpd/bpd-web/shared/data-access'
import { blueprintApiSlice } from '@bpd/bpd-web/shared/store'
import { EXPERTS_TAG } from '../constants'
import { getDealExperts } from '../queries'

const api = blueprintApiSlice
  .enhanceEndpoints({ addTagTypes: [EXPERTS_TAG] })
  .injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
      getDealExperts: getDealExperts(builder),
    }),
  })

export const queries = transformQueries(api, '')

export default queries
