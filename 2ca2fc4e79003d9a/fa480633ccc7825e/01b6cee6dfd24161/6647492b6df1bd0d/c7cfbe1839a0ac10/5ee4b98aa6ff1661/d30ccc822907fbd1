import { Stack, Typography } from '@gic/battlefield-ui-pack'
import { pick, toPairs, values, startCase, valuesIn, sumBy } from 'lodash'
import { FC, Fragment } from 'react'
import { useCartoSelector } from '../hooks'
import { getCartoLayers } from '../stores/createCartoSlice'
import LayersControlItem from './LayersControlItem'

export interface LayersControlGroupProps {
  ids: string[]
  title: string
  onChange: (event: {
    layerId: string
    legendId: string | null
    visible: boolean
    singleSelect?: boolean
  }) => void
}

const LayersControlGroup: FC<LayersControlGroupProps> = (props) => {
  const { title, ids, onChange } = props

  const layers = useCartoSelector(getCartoLayers)

  const hasLegend =
    sumBy(values(pick(layers, ids)), ({ legend }) => values(legend).length) > 0

  if (!hasLegend) return null

  return (
    <Stack spacing={1}>
      <Typography variant="subtitle2">{title}</Typography>
      <Stack spacing={0.5}>
        {values(pick(layers, ids)).map((layer) => {
          const isTypeNotExists =
            valuesIn(layer.legend).filter((legend) => !legend.type).length > 0
          if (isTypeNotExists) {
            return toPairs(layer.legend).map(([legendId, legend]) => (
              <Fragment key={`layer-control-item-${legendId}`}>
                <LayersControlItem
                  {...legend}
                  onChange={(visible) =>
                    onChange({ visible, legendId, layerId: layer.id })
                  }
                />
              </Fragment>
            ))
          }
          return (
            <Fragment key={layer.id}>
              <LayersControlItem
                label={startCase(layer.id)}
                visible={layer.visible}
                onChange={(visible) =>
                  onChange({ visible, legendId: null, layerId: layer.id })
                }
              />
            </Fragment>
          )
        })}
      </Stack>
    </Stack>
  )
}

export default LayersControlGroup
