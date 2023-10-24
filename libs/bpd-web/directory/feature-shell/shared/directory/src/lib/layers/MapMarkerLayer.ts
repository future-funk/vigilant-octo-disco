import { useAppSelector } from '@bpd/bpd-web/shared/store'
import { IconLayer } from '@deck.gl/layers/typed'
import { MapSelectors } from '@bpd/vendors/carto'

export interface IconLayerData {
  coordinates: [number, number]
}

const ICON = {
  x: 0,
  y: 0,
  width: 128,
  height: 128,
  // mask: true,
  url: `${window.location.origin}/assets/carto-icons/v3/map-marker.png`,
}

const MAP_MARKER_LAYER_ID = 'directoryMapMarkerLayer'

const MapMarkerLayer = () => {
  const selectedSite = useAppSelector(MapSelectors.getMarkerCoordinates)
  const [latitude, longitude] = [
    selectedSite?.latitude,
    selectedSite?.longitude,
  ]

  if (!latitude || !longitude) return null

  return new IconLayer<IconLayerData>({
    id: MAP_MARKER_LAYER_ID,
    data: [{ coordinates: [longitude, latitude] }],
    pickable: true,
    sizeScale: 15,
    getIcon: () => ICON,
    getSize: () => 2,
    getPosition: (data) => data.coordinates,
    getPixelOffset: [0, -14],
    parameters: { depthTest: false },
  })
}

export default MapMarkerLayer
