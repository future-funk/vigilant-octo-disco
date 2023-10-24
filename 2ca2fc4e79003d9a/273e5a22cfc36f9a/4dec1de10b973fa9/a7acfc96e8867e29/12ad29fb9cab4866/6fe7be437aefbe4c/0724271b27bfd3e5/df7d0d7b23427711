import { Popover, RadioChangeEvent } from 'antd'
import { Stack, Button, Typography } from '@gic/battlefield-ui-pack'
import { getCartoLayers } from '@bpd/vendors/carto'
import { useAppDispatch, useAppSelector } from '@bpd/bpd-web/shared/store'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { BpdIcon, BpdRadioGroup } from '@bpd/bpd-web/shared/ui'
import { LayerIcon } from '@bpd/bpd-web/shared/public'
import { Options } from '@bpd/bpd-web/shared/data-access'
import { DirectoryMapColorGroup } from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'
import {
  DirectoryActions,
  DirectorySelectors,
} from '@bpd/bpd-web/directory/feature-shell/shared/directory'
import { FILTER_COLUMN } from '../constants'

const StyledButton = withTheme(Button)(({ theme }) => ({
  backgroundColor: `${theme.palette.common.white} !important`,
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledContainer = withTheme(Stack)(({ theme }) => ({
  gap: theme.spacing(1),
  display: 'flex',
  flexDirection: 'row',
}))

const StyledChildrenContainer = withTheme(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}))

const COLOR_BY_OPTIONS: Options<DirectoryMapColorGroup> = [
  {
    label: 'Project',
    value: FILTER_COLUMN.PROJECT_NAME,
  },
  // {
  //   label: 'Country',
  //   value: 'country',
  // },
  {
    label: 'Asset Type',
    value: FILTER_COLUMN.ASSET_TYPE,
  },
  {
    label: 'Status',
    value: FILTER_COLUMN.STATUS,
  },
]

const MapController = () => {
  const dispatch = useAppDispatch()
  const layers = useAppSelector(getCartoLayers)

  const selectedColorByValue = useAppSelector(
    DirectorySelectors.getSelectedLogisticsColorByValue
  )

  const handleOptionChange = (event: RadioChangeEvent) => {
    dispatch(
      DirectoryActions.setSelectedLogisticsColorByValue(event.target.value)
    )
  }

  return (
    <Popover
      content={
        <StyledContainer>
          <StyledChildrenContainer>
            <Typography variant="subtitle2">Color By</Typography>
            <BpdRadioGroup
              options={COLOR_BY_OPTIONS}
              onChange={handleOptionChange}
              value={selectedColorByValue}
              optionType="default"
              buttonStyle="outline"
              style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}
            />
          </StyledChildrenContainer>
        </StyledContainer>
      }
      trigger="click"
      placement="top"
    >
      <StyledButton disableBorder icon={<BpdIcon icon={<LayerIcon />} />} />
    </Popover>
  )
}

export default MapController
