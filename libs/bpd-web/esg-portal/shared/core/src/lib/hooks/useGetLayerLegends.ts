import { useAppPalette } from '@bpd/bpd-web/shared/theme'
import { useAppSelector } from '@bpd/bpd-web/shared/store'
import { map, filter, valuesIn } from 'lodash'
import { toDictionary } from '@bpd/utils/utils'
import { LegendData } from '@bpd/vendors/carto'
import { EsgPortalSelectors } from '../data'

interface LayerLegendValues {
  name: string
  value?: string | number
  color?: string
  legendName?: string
}

export interface LayerLegendsProps {
  types: Record<string, LayerLegendValues>
  colors?: Record<string, string>
  type: string
  visible?: boolean
}

const useGetLayerLegends = ({
  types,
  colors,
  type,
  visible,
}: LayerLegendsProps) => {
  const { legend } = useAppPalette()

  const selectedTab = useAppSelector(EsgPortalSelectors.getColorByValue)

  const legends = map(
    filter(valuesIn(types || []), (o) => {
      return o.legendName !== 'n/a'
    }),
    (value: LayerLegendValues, index) => {
      return {
        key: `${type}-${index}`,
        label: value.legendName,
        value: value.value,
        color:
          (colors && colors[value.name]) ||
          legend[value.color as keyof typeof legend],
        visible: selectedTab === type ? true : false,
        type,
      }
    }
  )

  return toDictionary<LegendData>(legends, 'key')
}

export default useGetLayerLegends
