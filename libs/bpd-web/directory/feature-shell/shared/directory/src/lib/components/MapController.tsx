import { withTheme } from '@bpd/bpd-web/shared/theme'
import { BpdIcon, BpdRadioGroup } from '@bpd/bpd-web/shared/ui'
import { LayerIcon } from '@bpd/bpd-web/shared/public'
import { Popover, RadioChangeEvent } from 'antd'
import { Button, Stack, Typography } from '@gic/battlefield-ui-pack'
import {
  DARK_MATTER,
  VOYAGER,
  POSITRON,
  GOOGLE_SATELLITE,
  GOOGLE_HYBRID,
} from '@carto/react-basemaps'
import { useAppSelector, useAppDispatch } from '@bpd/bpd-web/shared/store'
import { setBasemap } from '@carto/react-redux'
import { ReactElement } from 'react'

export interface MapControllerProps {
  children: ReactElement
}

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

const StyledMapLayerContainer = withTheme(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}))

const StyledChildrenContainer = withTheme(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}))

const MAP_OPTIONS: any = [
  {
    label: 'Default',
    value: POSITRON,
  },
  {
    label: 'Satellite',
    value: GOOGLE_SATELLITE,
  },
  {
    label: 'Hybrid',
    value: GOOGLE_HYBRID,
  },
]

const MapController = (props: MapControllerProps) => {
  const { children } = props

  const dispatch = useAppDispatch()

  const selectedCartoBaseMap = useAppSelector((state) => state.carto.basemap)

  const handleOptionChange = (event: RadioChangeEvent) => {
    dispatch(setBasemap(event.target.value))
  }

  return (
    <Popover
      content={
        <StyledContainer>
          <StyledChildrenContainer>{children}</StyledChildrenContainer>
          <StyledMapLayerContainer>
            <Typography variant="subtitle2">Map Layer</Typography>
            <BpdRadioGroup
              options={MAP_OPTIONS}
              onChange={handleOptionChange}
              value={selectedCartoBaseMap}
              optionType="default"
              buttonStyle="outline"
              style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}
            />
          </StyledMapLayerContainer>
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
