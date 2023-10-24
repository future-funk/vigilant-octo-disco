import { Stack, StatStack, Typography } from '@gic/battlefield-ui-pack'
import { chain, pick, toPairs, values } from 'lodash'
import { FC, Fragment } from 'react'
import { Radio, RadioChangeEvent } from 'antd'
import { useCartoSelector } from '../hooks'
import { getCartoLayers } from '../stores/createCartoSlice'
import { LayersControlGroupProps } from './LayersControlGroup'
export interface LayersControlRadioGroupProps extends LayersControlGroupProps {}

const LayersControlRadioGroup: FC<LayersControlRadioGroupProps> = (props) => {
  const { title, ids, onChange } = props

  const layers = useCartoSelector(getCartoLayers)

  return (
    <Stack spacing={1}>
      <Typography variant="subtitle2">{title}</Typography>
      <Stack spacing={0.5}>
        {values(pick(layers, ids)).map((layer) => (
          <Radio.Group
            onChange={(e: RadioChangeEvent) =>
              onChange({
                visible: true,
                legendId: e.target.value,
                layerId: layer.id,
                singleSelect: true,
              })
            }
            value={chain(layer.legend)
              .pickBy((value) => value.visible)
              .keys()
              .first()
              .value()}
          >
            <Stack>
              {toPairs(layer.legend).map(([legendId, legend]) => (
                <Radio value={legendId}>{legend.label}</Radio>
              ))}
            </Stack>
          </Radio.Group>
        ))}
      </Stack>
    </Stack>
  )
}

export default LayersControlRadioGroup
