import { get } from 'lodash'
import { useAppPalette } from '@bpd/bpd-web/shared/theme'

interface useGetLegendColorsProps {
  legend?: string
}

const useGetLegendColors = (props?: useGetLegendColorsProps) => {
  const { legend } = props ?? {}

  const palette = useAppPalette()

  const colors = {
    Melcombe: palette.map.red,
    Mileway: palette.map.green,
    'Exeter - SMA I': palette.map.blue,
    'Exeter - SMA II': palette.map.darkBlue,
    'Exeter - SMA III': palette.map.darkSkyBlue,
    'KW Cella JV1': palette.map.gold,
    'KW Alpha JV2': palette.map.orange,
    'P3 Logistics': palette.map.maroon,
    Container: palette.map.red,
    Hostel: palette.map.green,
    Office: palette.map.blue,
    Land: palette.map.darkBlue,
    Canteen: palette.map.gold,
    Warehouse: palette.map.orange,
    'Warehouse under construction': palette.map.maroon,
    Development: palette.map.orange,
    Yielding: palette.map.green,
    Vacant: palette.map.red,
  }

  if (get(colors, legend)) return get(colors, legend)
  return colors
}

export default useGetLegendColors
