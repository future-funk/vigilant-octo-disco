import { FC, ReactElement } from 'react'
import { startCase, map, find, chain, filter, lowerCase } from 'lodash'
import { Stack, Box } from '@gic/battlefield-ui-pack'
import { renderSlot } from '@bpd/ui/libs/react-slots'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { useAppSelector, useAppDispatch } from '@bpd/bpd-web/shared/store'
import { BpdTabs, BpdTabsItemProps } from '@bpd/bpd-web/shared/ui'
import { ESGPortalCartoApi } from '@bpd/esg-portal/shared/data-access'
import { useGetFilterSelectedValues } from '../hooks'
import { LayoutBody as DrawerLayout } from '../layouts'
import { TAB } from '../constants'
import { EsgPortalSelectors, EsgPortalActions } from '../data'
import { conditionChecker } from '../utils'
import OverviewDrawer from './OverviewDrawer'
import AnalysisDrawer from './AnalysisDrawer'

export interface DrawerTabConfig extends Omit<BpdTabsItemProps, 'items'> {
  default?: string
  items?: DrawerTabConfig[]
  body?: ReactElement
}

const StyledContainer = withTheme(Stack)({
  padding: '10px 20px',
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
})

const getOption = ({
  config,
  path: injectedPath,
}: {
  config: DrawerTabConfig
  path: string
}) => {
  const [optionPath, ...rest] = injectedPath.split('.')
  const restPaths = rest.length ? `.${rest.join('.')}` : ''
  const path = [optionPath, restPaths].join('')
  return chain(config).get(path).value()
}

const CoreDrawer: FC = () => {
  const dispatch = useAppDispatch()
  const selectedFilterValues = useGetFilterSelectedValues({})
  const selectedCoreTab = useAppSelector(EsgPortalSelectors.getSelectedCoreTab)
  const selectedRecord = useAppSelector(EsgPortalSelectors.getSelectedRecord)

  const {
    data: locationData = [],
    isError,
    isLoading,
  } = ESGPortalCartoApi.useGetESGPhysicalMappingQuery({
    pointerCoordinates: selectedRecord
      ? {
          latitude: selectedRecord?.lat,
          longitude: selectedRecord?.lng,
        }
      : null,
  })

  const filteredLocations = filter(locationData, (location) =>
    conditionChecker(location, selectedFilterValues)
  )

  const DEFAULT_TAB_CONFIG: DrawerTabConfig = {
    default: TAB.OVERVIEW,
    items: [
      {
        tab: startCase(lowerCase(TAB.OVERVIEW)),
        key: TAB.OVERVIEW,
        body: (
          <OverviewDrawer
            records={filteredLocations}
            isError={isError}
            isLoading={isLoading}
          />
        ),
      },
      {
        tab: startCase(lowerCase(TAB.RISK_ANALYSIS)),
        key: TAB.RISK_ANALYSIS,
        body: (
          <AnalysisDrawer
            records={filteredLocations}
            isError={isError}
            isLoading={isLoading}
          />
        ),
      },
    ],
  }

  const selectedConfig = find(DEFAULT_TAB_CONFIG?.items, {
    key: selectedCoreTab,
  })!

  const getOptionFromConfig = (path: string) =>
    getOption({ config: selectedConfig, path })

  const [body] = map(['body'], getOptionFromConfig)

  const handleTabChange = (tab: string) => {
    dispatch(EsgPortalActions.setSelectedCoreTab(tab))
  }

  return (
    <DrawerLayout width={'100%'}>
      <StyledContainer>
        <Box>
          <BpdTabs
            animated={false}
            activeKey={selectedCoreTab}
            onChange={handleTabChange}
            items={map(DEFAULT_TAB_CONFIG?.items, (config) => ({
              ...config,
            }))}
          />
        </Box>
        {renderSlot(body)}
      </StyledContainer>
    </DrawerLayout>
  )
}

export default CoreDrawer
