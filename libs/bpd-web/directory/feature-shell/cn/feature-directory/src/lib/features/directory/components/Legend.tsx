import { LegendControlGroup as CoreLegendControlGroup } from '@bpd/vendors/carto'
import { FC } from 'react'
import { ASSETS_LAYER_ID } from '../layers'

export const GROUPS = [
    {
      title: 'Layers',
      ids: [ASSETS_LAYER_ID],
    }
]

const Legend: FC = () => (
  <CoreLegendControlGroup groups={GROUPS} />
)

export default Legend
