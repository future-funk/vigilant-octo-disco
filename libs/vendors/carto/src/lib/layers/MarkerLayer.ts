import { Layer } from '@deck.gl/core/typed'
import { IconLayer } from '@deck.gl/layers/typed'
import { Coordinate } from '../types'

export interface MarkerLayerArg {
  coordinate: Coordinate
}

const ICON = {
  x: 0,
  y: 0,
  width: 128,
  height: 128,
  mask: true,
  url: `${window.location.origin}/assets/carto-icons/v3/map-marker.png`,
}

export const MAP_MARKER_LAYER_ID = 'mapMarkerLayer'

const MarkerLayer = (arg: MarkerLayerArg): Layer | null => {
  const { coordinate } = arg

  if (!coordinate) return null

  return new IconLayer({
    id: MAP_MARKER_LAYER_ID,
    data: [
      {
        coordinates: [coordinate.longitude, coordinate.latitude],
      },
    ],
    pickable: true,
    sizeScale: 15,
    getIcon: () => ICON,
    getPixelOffset: [0, -14],
    getPosition: (data) => data.coordinates,
    getSize: () => 2,
    updateTriggers: { getPosition: coordinate },
  })
}

export default MarkerLayer
