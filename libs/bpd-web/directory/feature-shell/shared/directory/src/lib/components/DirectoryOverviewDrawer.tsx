import { FC, ReactElement, useMemo } from 'react'
import { RadioChangeEvent } from 'antd'
import { filter, capitalize } from 'lodash'
import { MapSelectors } from '@bpd/vendors/carto'
import { Stack } from '@gic/battlefield-ui-pack'
import {
  useAppSelector,
  useAppDispatch,
  UiSelectors,
} from '@bpd/bpd-web/shared/store'
import {
  BpdRadioGroup,
  BpdVerticalDivider,
  orderByConfig,
} from '@bpd/bpd-web/shared/ui'
import DrawerHeader from './DrawerHeader'

import {
  TABS,
  HOLDING_SOURCE_ID,
} from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'
import { Options } from '@bpd/bpd-web/shared/data-access'

import DirectoryOverviewCardDrawer from './DirectoryOverviewCardDrawer'
import DirectoryOverviewTableDrawer from './DirectoryOverviewTableDrawer'
import { DirectorySelectors, DirectoryActions } from '../data/stores'

import DownloadButton from './DownloadButton'

import {
  DirectoryQueries,
  Directory,
} from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'
import { generateConditions } from '../utils'
import { csvExportConfig } from '../configs/csv'

import {
  useGetSelectedFilterValues,
  useGetActiveMapLegends,
  useGetMapLayerData,
  useGetCSVDownloadData,
} from '../hooks'
import { renderSlot } from '@bpd/ui/libs/react-slots'

export interface DirectoryOverview {
  filter?: ReactElement
}

const OVERVIEW_TABS: Options<string> = [
  {
    label: capitalize(TABS.CARD),
    value: TABS.CARD,
  },
  {
    label: capitalize(TABS.TABLE),
    value: TABS.TABLE,
  },
]

const DirectoryOverviewDrawer: FC<DirectoryOverview> = (props) => {
  const { filter: SortByFilter } = props

  const dispatch = useAppDispatch()

  const appTeam = useAppSelector(UiSelectors.getTeam)

  const markerCoordinates = useAppSelector(MapSelectors.getMarkerCoordinates)

  const currentViewport = useAppSelector(
    (state) => state?.carto?.viewport || ''
  )

  const selectedDirectoryOverviewTab = useAppSelector(
    DirectorySelectors.getSelectedDirectoryOverviewTab
  )

  const selectedColorBy = useAppSelector(
    DirectorySelectors.getSelectedDirectoryColorByValue
  )

  const selectedSort = useAppSelector(
    DirectorySelectors.getSelectedDirectorySort
  )

  const { selectedFilterValues } = useGetSelectedFilterValues()

  const {
    data = [],
    isLoading: marketDataIsLoading,
    isError: marketDataError,
    isFetching: marketDataIsFetching,
  } = DirectoryQueries.useGetMarkets(
    {
      team: appTeam,
      viewport: currentViewport,
      pointerCoordinates: markerCoordinates,
      limit: 1000,
    },
    {
      skip: !appTeam,
    }
  )

  const { data: holdingData, isLoading: ownedDataIsLoading } =
    useGetMapLayerData({
      dataSource: HOLDING_SOURCE_ID,
      params: { rowsPerPage: 1000 },
      enabled: true,
    })

  const directories: Directory[] = useMemo(
    () => [...(data || []), ...(holdingData?.data ?? [])],
    [marketDataIsFetching, ownedDataIsLoading]
  )

  const filteredItems = filter(directories, (directory) =>
    generateConditions(directory, selectedFilterValues)
  )

  useGetActiveMapLegends(
    filteredItems,
    selectedColorBy,
    JSON.stringify(selectedFilterValues),
    marketDataIsFetching || ownedDataIsLoading
  )

  const sortedItems = orderByConfig(filteredItems, selectedSort, {
    fields: [selectedSort.field],
    shiftTo: 'end',
  })

  const downloadUrl = useGetCSVDownloadData(sortedItems, csvExportConfig)

  const handleChange = (event: RadioChangeEvent) => {
    dispatch(
      DirectoryActions.setSelectedDirectoryOverviewTab(event.target.value)
    )
  }

  return (
    <>
      <DrawerHeader
        right={
          <Stack
            alignItems="flex-end"
            flexDirection={{ lg: 'row', xs: 'column' }}
            spacing={2}
            flexWrap={'wrap'}
          >
            <Stack>{SortByFilter && renderSlot(SortByFilter)}</Stack>
            <Stack flexBasis={'auto'} flexGrow={1} flexShrink={0}>
              <BpdRadioGroup
                options={OVERVIEW_TABS}
                optionType="button"
                buttonStyle="solid"
                value={selectedDirectoryOverviewTab}
                onChange={handleChange}
              />
            </Stack>
            <BpdVerticalDivider sx={{ display: { xs: 'none' } }} />
            <Stack>
              <DownloadButton downloadUrl={downloadUrl} />
            </Stack>
          </Stack>
        }
      />
      {selectedDirectoryOverviewTab === TABS.CARD && (
        <DirectoryOverviewCardDrawer
          data={sortedItems}
          isFetching={
            marketDataIsFetching || ownedDataIsLoading || marketDataIsLoading
          }
          team={appTeam}
          isError={marketDataError}
        />
      )}
      {selectedDirectoryOverviewTab === TABS.TABLE && (
        <DirectoryOverviewTableDrawer
          items={sortedItems}
          team={appTeam}
          isError={marketDataError}
          isLoading={marketDataIsFetching || ownedDataIsLoading}
        />
      )}
    </>
  )
}

export default DirectoryOverviewDrawer
