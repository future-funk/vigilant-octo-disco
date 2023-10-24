import { Popover, RadioChangeEvent } from 'antd'
import { Button, Stack, Typography } from '@gic/battlefield-ui-pack'
import { updateLayer } from '@carto/react-redux'
import { useAppSelector, useAppDispatch } from '@bpd/bpd-web/shared/store'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { BpdRadioGroup, BpdIcon } from '@bpd/bpd-web/shared/ui'
import { LayerIcon } from '@bpd/bpd-web/shared/public'
import { Options } from '@bpd/bpd-web/shared/data-access'
import { getCartoLayers } from '@bpd/vendors/carto'
import { COLOR_BY_LABEL, COLOR_BY_COLUMN } from '../constants'
import { EsgPortalSelectors, EsgPortalActions } from '../data'

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

const COLOR_BY_OPTIONS: Options<string> = [
  {
    label: COLOR_BY_LABEL.stormSurgeRr,
    value: COLOR_BY_COLUMN.STORM_SURGE_RR,
  },
  {
    label: COLOR_BY_LABEL.hurricaneRr,
    value: COLOR_BY_COLUMN.HURRICANE_RR,
  },
  {
    label: COLOR_BY_LABEL.inlandFloodRr,
    value: COLOR_BY_COLUMN.INLAND_FLOOR_RR,
  },
  {
    label: COLOR_BY_LABEL.wildfireRr,
    value: COLOR_BY_COLUMN.WILDFIRE_RR,
  },
  {
    label: COLOR_BY_LABEL.bucket,
    value: COLOR_BY_COLUMN.BUCKET,
  },
]

const MapController = () => {
  const dispatch = useAppDispatch()
  const layers = useAppSelector(getCartoLayers)

  const selectedColorByValue = useAppSelector(
    EsgPortalSelectors.getColorByValue
  )

  const handleOptionChange = (event: RadioChangeEvent) => {
    dispatch(EsgPortalActions.setColorByValue(event.target.value))

    Object.keys(layers).forEach((data) => {
      let layerLegend = {}
      Object.keys(layers[data].legend).forEach((l) => {
        layerLegend = {
          ...layerLegend,
          [l]: {
            ...layers[data].legend[l],
            visible: layers[data].legend[l].type === event.target.value,
          },
        }
      })

      dispatch(
        updateLayer({
          id: data,
          layerAttributes: { legend: layerLegend },
        })
      )
    })
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
