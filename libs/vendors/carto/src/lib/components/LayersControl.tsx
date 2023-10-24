import { withTheme } from '@bpd/bpd-web/shared/theme'
import { LayerIcon } from '@bpd/bpd-web/shared/public'
import { BpdIcon } from '@bpd/bpd-web/shared/ui'
import { updateLayer } from '@carto/react-redux'
import { Button, Stack } from '@gic/battlefield-ui-pack'
import { Popover } from 'antd'
import { chain, keys, sumBy, values, get } from 'lodash'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { useCartoSelector } from '../hooks'
import { getCartoLayers } from '../stores/createCartoSlice'
import LayersControlGroup, {
  LayersControlGroupProps,
} from './LayersControlGroup'
import { default as LayersControlRadioGroup } from './LayersControlRadioGroup'

export type LayerControlType = 'Radio' | 'Checkbox'

type Group = Pick<LayersControlGroupProps, 'ids' | 'title'> & {
  controlType?: LayerControlType
}

export interface LayersControlProps {
  groups?: Group[]
}

const StyledContainer = withTheme(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(1),
  padding: theme.spacing(2),
}))

const StyledChildrenContainer = withTheme(Stack)(({ theme }) => ({
  gap: theme.spacing(1)
}))

const StyledButton = withTheme(Button)(({ theme }) => ({
  backgroundColor: `${theme.palette.common.white} !important`,
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const LayersControl: FC<LayersControlProps> = (props) => {
  const { groups: injectedGroups, children } = props

  const dispatch = useDispatch()

  const layers = useCartoSelector(getCartoLayers)

  const hasLegend =
    sumBy(values(layers), ({ legend }) => values(legend).length) > 0

  const handleChange = (event: {
    layerId: string
    legendId?: string
    visible: boolean
    singleSelect?: boolean
  }) => {
    const { visible, legendId, layerId, singleSelect = false } = event
    const previousState = layers[layerId].legend[legendId]
    // this check req. when layer has multiple legends to filter from type, ex: CN Logistics
    if(previousState){ 
      dispatch(
        updateLayer({
          id: layerId,
          layerAttributes: {
            legend: {
              ...(singleSelect
                ? chain(layers[layerId].legend)
                    .mapValues((legend) => ({ ...legend, visible: false }))
                    .value()
                : {}),
              [legendId]: { ...previousState, visible },
            },
          },
        })
      )
    } else {
      dispatch(
        updateLayer({
          id: layerId,
          layerAttributes: {
            visible,
          },
        })
      )
    }
  }

  const groups = injectedGroups
    ? injectedGroups
    : [{ title: 'Sites Layer', ids: keys(layers) }]

  return (
    <Popover
      content={
        <StyledContainer>
          {groups.map((group) => {
            const Controller =
              group.controlType === 'Radio'
                ? LayersControlRadioGroup
                : LayersControlGroup
            return (
              <Controller
                key={`carto-layer-control-${group.title}`}
                title={group.title}
                ids={group.ids}
                onChange={handleChange}
              />
            )
          })}
          <StyledChildrenContainer>{children}</StyledChildrenContainer>
        </StyledContainer>
      }
      trigger="click"
      placement="top"
    >
      <StyledButton
        disableBorder
        disabled={!hasLegend}
        icon={<BpdIcon icon={<LayerIcon />} />}
      />
    </Popover>
  )
}

export default LayersControl
