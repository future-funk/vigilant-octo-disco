import { FC, ReactElement, useEffect } from 'react'
import { capitalize, chain, map, find } from 'lodash'
import { Stack, Box } from '@gic/battlefield-ui-pack'
import { BpdTabs, BpdTabsItemProps, SortConfig } from '@bpd/bpd-web/shared/ui'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { renderSlot } from '@bpd/ui/libs/react-slots'
import { useAppDispatch, useAppSelector } from '@bpd/bpd-web/shared/store'
import {
  DirectoryActions,
  DirectorySelectors,
} from '@bpd/bpd-web/directory/feature-shell/shared/directory'
import { TABS } from '../constants'
import LogisticsOverviewDrawer from './LogisticsOverviewDrawer'
import LogisticsAnalyticsDrawer from './LogisticsAnalyticsDrawer'
import LogisticsDrawerSort from './LogisticsDrawerSort'
import { LogisticsQuery } from '../data'
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

export const DEFAULT_TAB_CONFIG: DirectoryDrawerTabConfig = {
  default: TABS.OVERVIEW,
  items: [
    //dont change the order as it is being used in location-analysis eu overview
    {
      tab: capitalize(TABS.OVERVIEW),
      key: TABS.OVERVIEW,
      body: <LogisticsOverviewDrawer sort={<LogisticsDrawerSort />} />,
    },
    {
      tab: capitalize(TABS.ANALYTICS),
      key: TABS.ANALYTICS,
      body: <LogisticsAnalyticsDrawer />,
    },
  ],
}

export interface LogisticsCoreDrawerProps {
  config?: DirectoryDrawerTabConfig
}

const LogisticsCoreDrawer: FC<LogisticsCoreDrawerProps> = (props) => {
  const { config = DEFAULT_TAB_CONFIG } = props

  const dispatch = useAppDispatch()

  const selectedDirectoryTab = useAppSelector(
    DirectorySelectors.getSelectedDirectoryTab
  )

  const [postUserCardSelection] = LogisticsQuery.usePostUserCardSelections()

  useEffect(() => {
    //reset the selection in db
    postUserCardSelection({ ids: [] })
  }, [])

  const selectedConfig = find(config?.items, { key: selectedDirectoryTab })!

  const getOptionFromConfig = (path: string) =>
    getOption({ config: selectedConfig, path })

  const [body] = map(['body'], getOptionFromConfig)

  const handleTabChange = (tab: string) => {
    dispatch(DirectoryActions.setSelectedDirectoryTab(tab))
  }

  return (
    <StyledContainer>
      <Box>
        <BpdTabs
          animated={false}
          activeKey={selectedDirectoryTab}
          onChange={handleTabChange}
          items={map(config?.items, (config) => ({
            ...config,
          }))}
        />
      </Box>
      {renderSlot(body)}
    </StyledContainer>
  )
}

export default LogisticsCoreDrawer
