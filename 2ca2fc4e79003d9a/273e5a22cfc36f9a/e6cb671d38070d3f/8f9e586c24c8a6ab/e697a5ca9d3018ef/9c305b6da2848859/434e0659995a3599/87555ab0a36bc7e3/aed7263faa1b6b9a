import { Builder, QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import { ENDPOINTS, TAGS } from '../constants'
import { WorkspaceConfig } from '../types'

export type PutMyConfigResults = WorkspaceConfig

const putMyWorkspaceConfig = (builder: Builder) =>
  QueryBuilder.put<PutMyConfigResults, WorkspaceConfig>(
    builder,
    (body) => ({ url: `${ENDPOINTS.MY_WORKSPACE.BASE}`, body }),
    [TAGS.MY_WORKSPACE_CONFIG]
  )

export default putMyWorkspaceConfig
