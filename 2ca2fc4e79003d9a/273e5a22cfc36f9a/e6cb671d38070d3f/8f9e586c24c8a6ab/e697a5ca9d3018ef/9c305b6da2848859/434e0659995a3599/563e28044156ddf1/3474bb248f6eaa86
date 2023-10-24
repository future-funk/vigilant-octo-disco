import { transformQueries } from '@bpd/bpd-web/shared/data-access'
import { blueprintApiSlice } from '@bpd/bpd-web/shared/store'
import { values } from 'lodash'
import { TAGS } from '../constants'
import { getMyWorkspaceConfig, putMyWorkspaceConfig } from '../queries'

const blueprintApi = blueprintApiSlice
  .enhanceEndpoints({ addTagTypes: values(TAGS) })
  .injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
      getMyWorkspaceConfig: getMyWorkspaceConfig(builder),
      putMyWorkspaceConfig: putMyWorkspaceConfig(builder),
    }),
  })

export const queries = transformQueries(blueprintApi, '')

export default blueprintApi
