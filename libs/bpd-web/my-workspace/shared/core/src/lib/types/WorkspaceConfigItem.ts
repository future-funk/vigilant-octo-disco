import { WorkspaceConfigFilterControl } from './WorkspaceConfigFilterControl'

export interface WorkspaceConfigItem {
  id: string
  title: string
  description: string
  filterControls: WorkspaceConfigFilterControl[]
  enabled: boolean
}
