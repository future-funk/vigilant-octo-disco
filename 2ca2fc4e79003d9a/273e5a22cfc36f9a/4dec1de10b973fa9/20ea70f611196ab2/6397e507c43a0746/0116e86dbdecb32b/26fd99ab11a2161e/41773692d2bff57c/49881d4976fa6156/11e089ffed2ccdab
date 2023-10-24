import { ReactElement, FC, useEffect } from 'react'
import { BpdTabsItemProps, SortConfig } from '@bpd/bpd-web/shared/ui'
import { BaseDrawerProps } from '@bpd/bpd-web/directory/feature-shell/shared/ui'
import { Box, Stack } from '@gic/battlefield-ui-pack'
import { BpdTabs } from '@bpd/bpd-web/shared/ui'
import { map, find, chain, capitalize } from 'lodash'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { renderSlot } from '@bpd/ui/libs/react-slots'
import { useAppDispatch, useAppSelector } from '@bpd/bpd-web/shared/store'
import { DirectoryActions, DirectorySelectors } from '../data/stores'

import {
  DirectoryDrawerSort,
  DirectoryInsightDrawer,
  DirectoryOverviewDrawer,
} from '.'

import { TABS } from '../constants'

export interface DrawerConfig {
  pinned?: ReactElement
  count?: ReactElement
}

export interface DirectoryDrawerTabConfig
  extends Omit<BpdTabsItemProps, 'items'> {
  default?: string
  items?: DirectoryDrawerTabConfig[]
  body?: ReactElement
  filter?: ReactElement
  sort?: ReactElement<{ config: SortConfig[]; default?: SortConfig }>
  config?: ReactElement<DrawerConfig>
}

export interface DirectoryCoreDrawerProps extends Partial<BaseDrawerProps> {
  config?: DirectoryDrawerTabConfig
  keyFilter?: ReactElement
}

const StyledContainer = withTheme(Stack)({
  padding: '10px 20px',
  height: '100%',
  overflow: 'hidden',
})

const getOption = ({
  config,
  path: injectedPath,
}: {
  config: DirectoryDrawerTabConfig
  path: string
}) => {
  const [optionPath, ...rest] = injectedPath.split('.')
  const restPaths = rest.length ? `.${rest.join('.')}` : ''
  const path = [optionPath, restPaths].join('')
  return chain(config).get(path).value()
}

const OVERVIEW = {
  tab: capitalize(TABS.OVERVIEW),
  key: TABS.OVERVIEW,
  body: <DirectoryOverviewDrawer filter={<DirectoryDrawerSort />} />,
}

const INSIGHT = {
  tab: capitalize(TABS.INSIGHT),
  key: TABS.INSIGHT,
  body: <DirectoryInsightDrawer />,
}

const CONFIG: DirectoryDrawerTabConfig = {
  default: TABS.OVERVIEW,
  items: [OVERVIEW, INSIGHT],
}

const DirectoryCoreDrawer: FC<DirectoryCoreDrawerProps> = (props) => {
  const dispatch = useAppDispatch()

  const selectedDirectoryTab = useAppSelector(
    DirectorySelectors.getSelectedDirectoryTab
  )

  const selectedConfig = find(CONFIG?.items, { key: selectedDirectoryTab })!

  const getOptionFromConfig = (path: string) =>
    getOption({ config: selectedConfig, path })

  const [body] = map(['body'], getOptionFromConfig)

  const handleTabChange = (tab: string) => {
    dispatch(DirectoryActions.setSelectedDirectoryTab(tab))
  }

  useEffect(() => {
    dispatch(DirectoryActions.setSelectedDirectoryTab(CONFIG?.default || ''))
  }, [])

  return (
    <StyledContainer>
      <Box>
        <BpdTabs
          animated={false}
          activeKey={selectedDirectoryTab}
          onChange={handleTabChange}
          items={map(CONFIG?.items, (config) => ({
            ...config,
          }))}
        />
      </Box>
      {renderSlot(body)}
    </StyledContainer>
  )
}

export default DirectoryCoreDrawer
