import { FC } from 'react'
import { capitalize, size } from 'lodash'
import { RadioChangeEvent } from 'antd'
import { ExpandOutlined, CompressOutlined } from '@ant-design/icons'
import { Stack, Typography } from '@gic/battlefield-ui-pack'
import { formatNumber } from '@bpd/utils/formatters'
import { BpdRadioGroup, BpdIcon, BpdLink } from '@bpd/bpd-web/shared/ui'
import { useAppDispatch, useAppSelector } from '@bpd/bpd-web/shared/store'
import { MapContainer } from '@bpd/vendors/carto'
import { Options } from '@bpd/bpd-web/shared/data-access'
import { ESGPortalRequestPayload } from '@bpd/esg-portal/shared/data-access'
import { EsgPortalActions, EsgPortalSelectors } from '../data'
import { TAB } from '../constants'
import Map from './Map'
import OverviewDrawerHeader from './OverviewDrawerHeader'
import OverviewCardDrawer from './OverviewCardDrawer'
import OverviewTableDrawer from './OverviewTableDrawer'

interface OverviewDrawerProps {
  records: ESGPortalRequestPayload[]
  isError: boolean
  isLoading: boolean
}

const OVERVIEW_TABS: Options<string> = [
  {
    label: capitalize(TAB.MAP),
    value: TAB.MAP,
  },
  {
    label: capitalize(TAB.CARD),
    value: TAB.CARD,
  },
  {
    label: capitalize(TAB.TABLE),
    value: TAB.TABLE,
  },
]

const OverviewDrawer: FC<OverviewDrawerProps> = (props) => {
  const { records, isError, isLoading } = props

  const dispatch = useAppDispatch()

  const selectedOverviewTab = useAppSelector(
    EsgPortalSelectors.getSelectedOverviewTab
  )

  const isDrawerExpanded = useAppSelector(
    EsgPortalSelectors.getIsDrawerExpanded
  )

  const selectedRecord = useAppSelector(EsgPortalSelectors.getSelectedRecord)

  const handleTabChange = (event: RadioChangeEvent) => {
    const { value } = event.target

    if (value === TAB.MAP && !isDrawerExpanded ) dispatch(EsgPortalActions.toggleIsDrawerExpanded())
    dispatch(EsgPortalActions.setSelectedOverviewTab(value))
  }

  const handleToggleView = () => {
    if (selectedOverviewTab === TAB.MAP)
      dispatch(EsgPortalActions.setSelectedOverviewTab(TAB.CARD))
    dispatch(EsgPortalActions.toggleIsDrawerExpanded())
  }

  return (
    <>
      <OverviewDrawerHeader
        left={
          <Stack>
            <Typography variant="body3">
              {`Showing ${formatNumber(size(records))} records.`}
            </Typography>
          </Stack>
        }
        right={
          <Stack
            py={1}
            alignItems="center"
            justifyContent={'flex-end'}
            flexDirection={{ lg: 'row', xs: 'row' }}
            spacing={2}
            flexWrap={'wrap'}
          >
            <BpdRadioGroup
              options={OVERVIEW_TABS}
              optionType="button"
              buttonStyle="solid"
              value={selectedOverviewTab}
              onChange={handleTabChange}
            />
            <BpdLink
              title={''}
              onClick={handleToggleView}
              startIcon={
                <BpdIcon
                  icon={
                    isDrawerExpanded ? <CompressOutlined /> : <ExpandOutlined />
                  }
                />
              }
            />
          </Stack>
        }
      />
      {selectedOverviewTab === TAB.MAP && (
        <MapContainer>
          <Map />
        </MapContainer>
      )}
      {selectedOverviewTab === TAB.CARD && (
        <OverviewCardDrawer
          records={records}
          isError={isError}
          isLoading={isLoading}
          selectedRecordId={selectedRecord?.id}
        />
      )}
      {selectedOverviewTab === TAB.TABLE && (
        <OverviewTableDrawer
          records={records}
          isError={isError}
          isLoading={isLoading}
        />
      )}
    </>
  )
}

export default OverviewDrawer
