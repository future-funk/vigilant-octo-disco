import { FC, ReactElement } from 'react'
import { capitalize, filter, map, join } from 'lodash'
import { RadioChangeEvent } from 'antd'
import { Stack, Box } from '@gic/battlefield-ui-pack'
import { renderSlot } from '@bpd/ui/libs/react-slots'
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
import { TABS } from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'
import { Options } from '@bpd/bpd-web/shared/data-access'
import { MapSelectors } from '@bpd/vendors/carto'
import {
  DirectoryDrawerHeader,
  DirectoryOverviewCardDrawer,
  generateConditions,
  useGetActiveMapLegends,
  CN_LOGISTICS,
} from '@bpd/bpd-web/directory/feature-shell/shared/directory'
import {
  DirectorySelectors,
  DirectoryCartoQuery,
  DirectoryActions,
} from '../data'
import { useGetFilterSelectedValues } from '../hooks'
import DirectoryOverviewDrawerModal from './DirectoryOverviewDrawerModal'
import DownloadButton from './DownloadButton'
import DirectoryTableDrawer from './DirectoryTableDrawer'

export interface DirectoryOverviewDrawerProps {
  filter: ReactElement
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

const DirectoryOverviewDrawer: FC<DirectoryOverviewDrawerProps> = (props) => {
  const { filter: SortByFilter } = props

  const dispatch = useAppDispatch()

  const appTeam: string = useAppSelector(UiSelectors.getTeam)

  const selectedFilterValues = useGetFilterSelectedValues()

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

  const {
    data: directories = [],
    isLoading,
    isFetching,
    isError,
  } = DirectoryCartoQuery.useGetDirectoryAssetsQuery(
    {
      viewport: currentViewport,
      pointerCoordinates: markerCoordinates,
    },
    {
      skip: !currentViewport,
    }
  )

  const filteredItems = filter(directories, (directory) =>
    generateConditions(
      { ...directory, bpInvStatus: CN_LOGISTICS },
      selectedFilterValues
    )
  )

  useGetActiveMapLegends(
    filteredItems,
    selectedColorBy,
    JSON.stringify(selectedFilterValues),
    isLoading || isFetching
  )

  const sortedItems = orderByConfig(filteredItems, selectedSort, {
    fields: [selectedSort?.field],
    shiftTo: 'end',
  })

  const handleChange = (event: RadioChangeEvent) => {
    dispatch(
      DirectoryActions.setSelectedDirectoryOverviewTab(event.target.value)
    )
  }

  return (
    <>
      <DirectoryDrawerHeader
        right={
          <Stack alignItems="center" direction="row" spacing={2}>
            <Box>
              <Stack direction="row" spacing={2}>
                {SortByFilter && renderSlot(SortByFilter)}
                <BpdRadioGroup
                  options={OVERVIEW_TABS}
                  optionType="button"
                  buttonStyle="solid"
                  value={selectedDirectoryOverviewTab}
                  onChange={handleChange}
                />
                <BpdVerticalDivider />
                <DownloadButton
                  directoryIds={join(
                    map(sortedItems, (items) => items?.cartodbId),
                    ', '
                  )}
                />
              </Stack>
            </Box>
          </Stack>
        }
      />
      {selectedDirectoryOverviewTab === TABS.CARD && (
        <DirectoryOverviewCardDrawer
          data={sortedItems}
          isFetching={isLoading}
          isError={isError}
          team={appTeam}
        />
      )}
      {selectedDirectoryOverviewTab === TABS.TABLE && (
        <DirectoryTableDrawer
          items={sortedItems}
          team={appTeam}
          isError={isError}
          isLoading={isLoading || isFetching}
        />
      )}
      <DirectoryOverviewDrawerModal />
    </>
  )
}

export default DirectoryOverviewDrawer
