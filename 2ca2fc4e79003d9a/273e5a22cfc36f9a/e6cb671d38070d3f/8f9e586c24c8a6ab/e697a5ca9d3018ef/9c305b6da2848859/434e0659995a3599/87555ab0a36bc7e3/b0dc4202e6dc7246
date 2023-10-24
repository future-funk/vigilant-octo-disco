import { Builder, QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import { ENDPOINTS, TAGS } from '../constants'
import { WorkspaceConfig } from '../types'

const getMyWorkspaceConfig = (builder: Builder) =>
  QueryBuilder.get<WorkspaceConfig, null>(
    builder,
    () => ({ url: `${ENDPOINTS.MY_WORKSPACE.GET_WORKSPACE_CONFIG}` }),
    [TAGS.MY_WORKSPACE_CONFIG]
  )

export default getMyWorkspaceConfig
