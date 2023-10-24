import { WorkspaceConfig } from '@bpd/my-workspace/shared/data-access'
import { List, Space, Switch } from 'antd'
import { map } from 'lodash'
import { FC, SetStateAction } from 'react'
import { WorkspaceConfigItem } from '../../types'
import ListItemControl from './ListItemControl'

interface ListItemProps {
  item: WorkspaceConfigItem
  handleChangeSwitch: (id: string) => void
  setActiveWorkspaceConfig: React.Dispatch<SetStateAction<WorkspaceConfig>>
}

const ListItem: FC<ListItemProps> = (props) => {
  const { item, handleChangeSwitch, setActiveWorkspaceConfig } = props
  return (
    <List.Item
      key={item.title}
      extra={
        <Switch
          checked={item.enabled}
          onChange={() => handleChangeSwitch(item.id)}
        />
      }
    >
      <List.Item.Meta title={item.title} description={item.description} />
      {item.enabled ? (
        <Space>
          {map(item.filterControls, (filterControl) => (
            <ListItemControl
              {...{
                key: `${item.id}-${filterControl.filterKey}`,
                configItemId: item.id,
                filterControl,
                setActiveWorkspaceConfig,
              }}
            />
          ))}
        </Space>
      ) : null}
    </List.Item>
  )
}

export default ListItem
