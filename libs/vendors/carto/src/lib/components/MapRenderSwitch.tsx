import type { LayersList } from '@deck.gl/core/typed'
import 'maplibre-gl/dist/maplibre-gl.css'
import { FC } from 'react'
import { MapType } from '../types'
import DeckGLComponent from './DeckGL'
import DeckGLGoogleMapOverlay from './DeckGLGoogleMapOverlay'

export interface MapRenderSwitchProps {
  type: MapType
  layers: LayersList
}

export const BASEMAP_TYPES = {
  mapbox: 'mapbox',
  gmaps: 'gmaps',
}

const MapRenderSwitch: FC<MapRenderSwitchProps> = (props) => {
  const { type, layers } = props

  const renderMap = {
    [BASEMAP_TYPES.mapbox]: () => <DeckGLComponent layers={layers} />,
    [BASEMAP_TYPES.gmaps]: () => <DeckGLGoogleMapOverlay layers={layers} />,
  }

  return renderMap[type] ? (
    renderMap[type]()
  ) : (
    <div>Not a valid map provider</div>
  )
}

export default MapRenderSwitch
