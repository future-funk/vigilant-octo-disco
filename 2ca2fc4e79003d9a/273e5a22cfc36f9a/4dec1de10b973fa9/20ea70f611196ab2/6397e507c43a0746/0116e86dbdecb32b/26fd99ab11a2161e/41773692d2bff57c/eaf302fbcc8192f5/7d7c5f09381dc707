import { legendValue } from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'
import { useAppPalette } from '@bpd/bpd-web/shared/theme'
import {  map, filter,  valuesIn } from 'lodash'
import { toDictionary } from '@bpd/utils/utils'
import { LegendData } from '@bpd/vendors/carto'

interface LayerLegendValues {
  name: string,
  value?: string,
  color?: string,
  legendName?: string
}

export interface LayerLegendsProps {
  types: Record<string, LayerLegendValues>, 
  colors?: Record<string, string>,
  type: string,
  visible?: boolean
}

const useGetLayerLegends = ({ types, colors, type, visible }: LayerLegendsProps) => {
  const { legend } = useAppPalette()

  const legends = map(filter(valuesIn(types || []), (o) => { return o.legendName !== 'n/a' }), (value: legendValue) => {
    return {
      label: value.legendName,
      value: value.value,
      color: colors && colors[value.name] || legend[value.color as keyof typeof legend],
      visible: visible || false,
      type
    }
  })

  return toDictionary<LegendData>(legends, 'value')
}

export default useGetLayerLegends
