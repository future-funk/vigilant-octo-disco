import { useAppSelector } from '@bpd/bpd-web/shared/store'
import { useAppPalette } from '@bpd/bpd-web/shared/theme'
import {
  CartoSelectors,
  createCartoLayer,
  getSource,
  useRegisterSource,
} from '@bpd/vendors/carto'
import { getHighwaySource, DirectorySelectors } from '../data'

interface PoiHighwayLayerProps {
  visibility?: boolean
}

const useCreateLegend = () => {
  const palette = useAppPalette()
  return {
    Highway: {
      attr: 'type',
      color: palette.map.blue,
      label: 'Highway',
      value: 'Highway',
      visible: false,
    },
  }
}

export const HIGHWAY_LAYER_ID = 'highwayLayer'

const PoiByHighwayLayer = ({ visibility }: PoiHighwayLayerProps) => {
  const layer = useAppSelector((state) =>
    CartoSelectors.getLayer(state, HIGHWAY_LAYER_ID)
  )

  const selectedDirectory =
    useAppSelector(DirectorySelectors.getSelectedDirectory) || ''

  const initialLegend = useCreateLegend()

  const { legend } = layer || {}

  const source = useAppSelector((state) => getSource(state, HIGHWAY_LAYER_ID))

  useRegisterSource(
    {
      source: getHighwaySource(),
      layer: { id: HIGHWAY_LAYER_ID },
      legend: initialLegend,
    },
    {
      update: [selectedDirectory],
    }
  )

  return createCartoLayer({
    ...source,
    id: HIGHWAY_LAYER_ID,
    stroked: false,
    filled: false,
    lineWidthMinPixels: 0.5,
    getLineWidth: 1.5,
    getLineColor: (d) => [76, 200, 163],
    getIsVisible: () =>
      !visibility ? legend?.Highway?.visible || false : visibility,
    updateTriggers: { getIsVisible: legend },
    opacity: 0.1,
  })
}

export default PoiByHighwayLayer
