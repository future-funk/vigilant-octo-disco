import { useAppSelector } from '@bpd/bpd-web/shared/store'
import { useAppPalette } from '@bpd/bpd-web/shared/theme'
import {
  CartoSelectors,
  createCartoLayer,
  createGetIsVisible,
  getSource,
  useRegisterSource,
  createGetDomainColors
} from '@bpd/vendors/carto'
import { reduce, values, get, find } from 'lodash'
import { getPoiSource, DirectorySelectors } from '../data'

const TYPES = {
  AIRPORT: 'Airport',
  TRAIN_STATION: 'Train Station',
  CITY_CENTRE: 'City Centre',
}

interface PoiLayerProps {
  visibility?: boolean
}


const useCreateLegend = () => {
  const palette = useAppPalette()

  const colors = {
    [TYPES.AIRPORT]: palette.map.blue,
    [TYPES.TRAIN_STATION]: palette.map.aqua,
    [TYPES.CITY_CENTRE]: palette.map.brightPurple
  }

  const icons = {
    [TYPES.AIRPORT]: {
      x: 0,
      y: 0,
      width: 128,
      height: 128,
      mask: true,
      url: `${window.location.origin}/assets/carto-icons/v3/plane.png`,
    },
    [TYPES.TRAIN_STATION]: {
      x: 0,
      y: 0,
      width: 128,
      height: 128,
      mask: true,
      url: `${window.location.origin}/assets/carto-icons/v3/train.png`,
    },
    [TYPES.CITY_CENTRE]: {
      x: 0,
      y: 0,
      width: 128,
      height: 128,
      mask: true,
      url: `${window.location.origin}/assets/carto-icons/v3/city.png`,
    },
  }

  return reduce(
    values(TYPES),
    (legend, type) => ({
      ...legend,
      [type]: {
        attr: 'poiType',
        icon: icons?.[type as keyof typeof icons],
        color: colors?.[type as keyof typeof colors],
        label: type,
        value: type,
        visible: false,
      },
    }),
    {}
  )
}

export const POI_LAYER_ID = 'poiLayer'

const PoiLayer = ({ visibility = false }: PoiLayerProps) => {
  const initialLegend = useCreateLegend()

  const selectedDirectory = useAppSelector(DirectorySelectors.getSelectedDirectory)

  const layer = useAppSelector((state) =>
    CartoSelectors.getLayer(state, POI_LAYER_ID)
  )

  const { legend } = layer || {}

  const source = useAppSelector((state) =>
    getSource(state, POI_LAYER_ID)
  )

  useRegisterSource(
    {
      source: getPoiSource({ types: ['Train Station', 'City Centre', 'Airport']}),
      layer: { id: POI_LAYER_ID },
      legend: initialLegend,
    },{
      update: [selectedDirectory]
    }
  )

  return createCartoLayer({
    ...source,
    id: POI_LAYER_ID,
    pointType: 'icon',
    pickable: true,
    getIcon: (data: unknown) => {
      const poiType = get(data, ['properties', 'poiType'])
      const { icon = null } = find(values(legend), { value: poiType }) || {}
      return icon
    },
    getIsVisible: createGetIsVisible(legend, 'poiType'),

    getIconSize: (data: unknown) => {
      const isVisible = !visibility ? createGetIsVisible(legend, 'poiType')(data) : visibility
      return isVisible ? 12 : 0
    },
    getIconColor: ({ properties }) => createGetDomainColors('poiType', legend)({ properties }),
    updateTriggers: { getIcon: legend, getIconSize: legend },
  })
}

export default PoiLayer
