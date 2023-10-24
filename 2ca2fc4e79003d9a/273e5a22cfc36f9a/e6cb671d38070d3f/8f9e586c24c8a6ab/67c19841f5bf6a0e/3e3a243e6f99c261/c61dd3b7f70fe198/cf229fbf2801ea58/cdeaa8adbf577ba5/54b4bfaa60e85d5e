import { useAppSelector } from '@bpd/bpd-web/shared/store'
import {
  MyWorkspaceQueries,
  WorkspaceConfig,
} from '@bpd/my-workspace/shared/data-access'
import { message } from 'antd'
import { isEmpty, isEqual, map } from 'lodash'
import { FC, useEffect, useMemo, useState } from 'react'
import { WORKSPACE_CONFIG_ITEMS } from '../../constants'
import { MyWorkspaceSelectors } from '../../data'
import { WorkspaceConfigItem } from '../../types'
import Footer from './Footer'
import ListItem from './ListItem'
import StyledList from './StyledList'
import StyledModal from './StyledModal'

interface ConfigModalProps {
  onCloseModal: () => void
}

export const ConfigModal: FC<ConfigModalProps> = (props) => {
  const { onCloseModal } = props
  const workspaceConfigResult = useAppSelector(
    MyWorkspaceSelectors.getMyWorkspaceConfig
  )
  const [putMyWorkspaceConfig, { isLoading }] =
    MyWorkspaceQueries.usePutMyWorkspaceConfig()

  const [activeWorkspaceConfig, setActiveWorkspaceConfig] =
    useState<WorkspaceConfig>()

  useEffect(() => {
    if (!isEmpty(workspaceConfigResult)) {
      setActiveWorkspaceConfig(workspaceConfigResult)
    }
  }, [workspaceConfigResult])

  const listItems: WorkspaceConfigItem[] = useMemo(() => {
    if (isEmpty(activeWorkspaceConfig)) {
      return []
    }

    return map(WORKSPACE_CONFIG_ITEMS, (configItem: WorkspaceConfigItem) => {
      const subConfigItem = activeWorkspaceConfig[configItem.id]

      const { enabled, ...restItems } = subConfigItem || {}
      const { filterControls } = configItem

      return {
        ...configItem,
        enabled,
        filterControls: map(filterControls, (filterControl) => ({
          ...filterControl,
          value: restItems[filterControl.filterKey],
        })),
      }
    })
  }, [activeWorkspaceConfig])

  const handleChangeSwitch = (id: string) => {
    const subConfigItem = activeWorkspaceConfig[id] as WorkspaceConfigItem
    if (subConfigItem) {
      setActiveWorkspaceConfig((config) => ({
        ...config,
        [id]: {
          ...subConfigItem,
          enabled: !subConfigItem.enabled,
        },
      }))
    }
  }

  const handleSaveConfig = async () => {
    try {
      if (!isEqual(workspaceConfigResult, activeWorkspaceConfig)) {
        const response = await putMyWorkspaceConfig(activeWorkspaceConfig)
        if (!(response as any).data) {
          throw new Error()
        }
        message.success('Updated successfully')
      }
      onCloseModal()
    } catch (error) {
      message.error('Unable to update workspace configuration')
    }
  }

  return (
    <StyledModal
      visible
      destroyOnClose
      disableFooter
      width={640}
      bodyStyle={{ minHeight: 500, paddingTop: 8 }}
      title="My Workspace Configuration"
      onCancel={onCloseModal}
    >
      <StyledList
        itemLayout="vertical"
        size="small"
        split
        dataSource={listItems}
        footer={<Footer {...{ handleSaveConfig, isLoading }} />}
        renderItem={(item) => (
          <ListItem
            {...{ item, handleChangeSwitch, setActiveWorkspaceConfig }}
          ></ListItem>
        )}
      />
    </StyledModal>
  )
}

export default ConfigModal
