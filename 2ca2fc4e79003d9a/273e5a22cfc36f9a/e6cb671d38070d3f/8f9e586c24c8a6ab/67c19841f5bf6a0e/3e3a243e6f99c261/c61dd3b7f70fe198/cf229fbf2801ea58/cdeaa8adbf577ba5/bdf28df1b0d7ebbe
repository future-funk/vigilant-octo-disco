import { BpdFilterControl } from '@bpd/bpd-web/shared/ui'
import { WorkspaceConfig } from '@bpd/my-workspace/shared/data-access'
import { FC, SetStateAction } from 'react'
import { WorkspaceConfigFilterControl } from '../../types'

interface ListItemControlProps {
  configItemId: string
  filterControl: WorkspaceConfigFilterControl
  setActiveWorkspaceConfig: React.Dispatch<SetStateAction<WorkspaceConfig>>
}

const ListItemControl: FC<ListItemControlProps> = (props) => {
  const { configItemId, filterControl, setActiveWorkspaceConfig } = props

  const handleChange = (key: string, value: string | string[]) => {
    setActiveWorkspaceConfig((config: WorkspaceConfig) => ({
      ...config,
      [configItemId]: { ...config[configItemId], [key]: value },
    }))
  }

  return (
    <BpdFilterControl
      {...{
        key: filterControl.filterKey,
        ...filterControl,
        handleChange,
        style: { minWidth: 200 },
      }}
    />
  )
}

export default ListItemControl
