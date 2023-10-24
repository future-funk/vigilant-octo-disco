import { ReactElement, useMemo, FC } from 'react'
import { capitalize, chain, filter, get, map, size, isLength } from 'lodash'
import pluralize from 'pluralize'
import { RadioChangeEvent, Checkbox } from 'antd'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'
import { Stack, Typography } from '@gic/battlefield-ui-pack'
import { useAppSelector, useAppDispatch } from '@bpd/bpd-web/shared/store'
import {
  BpdButton,
  BpdRadioGroup,
  BpdVerticalDivider,
  orderByConfig,
} from '@bpd/bpd-web/shared/ui'
import { renderSlot } from '@bpd/ui/libs/react-slots'
import { useGetCSVDownloadData } from '@bpd/bpd-web/directory/feature-shell/shared/directory'
import { Options } from '@bpd/bpd-web/shared/data-access'
import { TABS } from '../constants'
import DrawerHeader from './DrawerHeader'
import DownloadButton from './DownloadButton'
import LogisticsOverviewCardDrawer from './LogisticsOverviewCardDrawer'
import LogisticsOverviewTableDrawer from './LogisticsOverviewTableDrawer'
import { csvExportConfig } from '../config'
import { MapSelectors } from '@bpd/vendors/carto'
import {
  LogisticsCartoQuery,
  LogisticsResponseDto,
  DirectoryActions,
  DirectorySelectors,
  LogisticsQuery,
} from '../data'
import {
  useOverviewQueryArgs,
  useSelectedCardsManager,
  useGetMapViewportLegends,
} from '../hooks'
import { conditionHelper } from '../utils'

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

interface LogisticsOverviewDrawerProps {
  sort: ReactElement
  onCreateAnalysis?: (selectedProps: string[]) => void
}

const LogisticsOverviewDrawer: FC<LogisticsOverviewDrawerProps> = (props) => {
  const { sort: SortByFilter, onCreateAnalysis } = props

  const dispatch = useAppDispatch()

  const { selectedCards: selectedAssets, showSelectedCards } =
    useSelectedCardsManager()

  const { filters: selectedFilterValues, ...rest } = useOverviewQueryArgs()

  const markerCoordinates = useAppSelector(MapSelectors.getMarkerCoordinates)

  const [postUserCardSelection] = LogisticsQuery.usePostUserCardSelections()

  const { data, isError, isFetching, isLoading } =
    LogisticsCartoQuery.useGetLogisticsAssetsQuery(
      {
        filters: selectedFilterValues,
        pointerCoordinates: markerCoordinates,
        viewport: get(rest, 'viewport'),
      },
      {
        skip: showSelectedCards || !get(rest, 'viewport'),
      }
    )

  const logisticsAssets = showSelectedCards ? selectedAssets : data || []

  const filteredAssets = useMemo(
    () =>
      filter(logisticsAssets, (logisticsAsset) =>
        conditionHelper(logisticsAsset, selectedFilterValues)
      ),
    [logisticsAssets, selectedFilterValues]
  )

  useGetMapViewportLegends(
    filteredAssets,
    isLoading || isFetching || isLength(logisticsAssets)
  )

  const selectedDirectoryOverviewTab = useAppSelector(
    DirectorySelectors.getSelectedDirectoryOverviewTab
  )

  const selectedSort = useAppSelector(
    DirectorySelectors.getSelectedLogisticsSort
  )


  const sortedAssets = orderByConfig(filteredAssets, selectedSort, {
    fields: [selectedSort.field],
    shiftTo: 'end',
  })

  const downloadUrl = useGetCSVDownloadData(sortedAssets, csvExportConfig)

  const dispatchSelectedAssets = (
    newlySelectedAssets: LogisticsResponseDto[]
  ) => {
    postUserCardSelection({ ids: map(newlySelectedAssets, 'cartodbId') })

    dispatch(DirectoryActions.setSelectedAssets(newlySelectedAssets))
  }

  const handleTabChange = (event: RadioChangeEvent) => {
    dispatch(
      DirectoryActions.setSelectedDirectoryOverviewTab(event.target.value)
    )
  }

  const handleAssetCheckboxToggle = (newlySelectedAssetIds: number[] = []) => {
    const newlySelectedAssets = chain([
      ...selectedAssets.filter((asset) =>
        newlySelectedAssetIds?.includes(asset.cartodbId)
      ),
      ...filteredAssets
        .map((asset) => ({
          ...asset,
        }))
        .filter((item: LogisticsResponseDto) =>
          newlySelectedAssetIds?.includes(item.cartodbId)
        ),
    ])
      .filter((item: LogisticsResponseDto) =>
        newlySelectedAssetIds?.includes(item.cartodbId)
      )
      .uniqBy('cartodbId')
      .value()

    dispatchSelectedAssets(newlySelectedAssets)
  }

  const handleSelectAllAssetsToggle = (e: CheckboxChangeEvent) => {
    const newlySelectedAssets = e.target?.checked
      ? map(filteredAssets, (asset) => ({
          ...asset,
        }))
      : []

    dispatchSelectedAssets(newlySelectedAssets)
  }

  const handleCreateNewAnalysis = () => {
    onCreateAnalysis?.(
      chain(selectedAssets)
        .map((item) => item.propId)
        .value()
    )
  }

  const handleClearSelection = () => {
    if (size(selectedAssets)) dispatch(DirectoryActions.setSelectedAssets([]))
  }

  return (
    <>
      <DrawerHeader
        left={
          selectedDirectoryOverviewTab === TABS.CARD && (
            <Stack flexDirection="column" alignItems="flex-start">
              <Stack
                flexDirection={'row'}
                alignItems={'center'}
                sx={{ gap: 1 }}
              >
                <Checkbox
                  onChange={handleSelectAllAssetsToggle}
                  checked={
                    size(selectedAssets) &&
                    size(selectedAssets) === size(filteredAssets)
                  }
                />
                <Typography variant="subtitle3">
                  Select / Unselect All
                </Typography>
              </Stack>
              <Stack>
                <Typography variant="body3">
                  {`Showing ${size(filteredAssets)} records.`}
                </Typography>
              </Stack>
            </Stack>
          )
        }
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
                onChange={handleTabChange}
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
        <Stack height={'100%'}>
          {size(selectedAssets) ? (
            <Stack
              alignItems={'center'}
              justifyContent={'center'}
              p={1}
              bgcolor="primary.lightAlt"
              flexDirection={'row'}
              sx={{ gap: 2 }}
            >
              <Typography variant="body2" sx={{ display: 'flex' }}>
                <Typography variant="subtitle2">
                  {size(selectedAssets)}
                </Typography>
                : selected {pluralize('unit', size(selectedAssets))}
              </Typography>
              <Stack flexDirection="row" sx={{ gap: 1 }}>
                <BpdButton
                  title={`Clear ${pluralize(
                    'Selection',
                    size(selectedAssets)
                  )}`}
                  variant="outlined"
                  size={0}
                  onClick={handleClearSelection}
                />
                <BpdButton
                  title={'Create New Analysis'}
                  variant="outlined"
                  size={0}
                  onClick={handleCreateNewAnalysis}
                />
              </Stack>
            </Stack>
          ) : (
            ''
          )}
          <LogisticsOverviewCardDrawer
            records={sortedAssets}
            isError={isError}
            isFetching={isFetching}
            checkedList={map(selectedAssets, 'cartodbId')}
            setCheckedList={handleAssetCheckboxToggle}
          />
        </Stack>
      )}
      {selectedDirectoryOverviewTab === TABS.TABLE && (
        <LogisticsOverviewTableDrawer
          records={sortedAssets}
          isError={isError}
          isLoading={isLoading}
        />
      )}
    </>
  )
}

export default LogisticsOverviewDrawer
