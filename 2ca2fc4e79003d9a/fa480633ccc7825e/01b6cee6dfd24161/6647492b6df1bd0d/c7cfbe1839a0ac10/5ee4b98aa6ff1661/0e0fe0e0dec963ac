import { BASEMAPS } from '@carto/react-basemaps'
import { MapboxOverlayProps } from '@deck.gl/mapbox/typed'
import maplibregl from 'maplibre-gl'
import React, { CSSProperties, FC, useRef, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import Map, {
  MapLayerMouseEvent,
  NavigationControl,
  ViewState,
  ViewStateChangeEvent,
  MapRef,
} from 'react-map-gl'
import { DEFAULT_BASEMAP, DEFAULT_VIEW_STATE } from '../constants'
import type { MapProps, MapViewState } from '../types'
import DeckGLOverlay from './DeckGLOverlay'
import { MapActions } from '../stores/mapSlice'

export type BaseMapProps = Omit<MapProps, 'viewState'> & {
  viewState: Partial<MapViewState>
  layers?: MapboxOverlayProps['layers']
  mapStyle?: string
  sx?: CSSProperties
  hideZoomControl?: boolean
  onContextMenu?: (event: MapLayerMouseEvent) => void
}

const BaseMap: FC<BaseMapProps> = (props) => {
  const {
    layers,
    sx,
    viewState: injectedViewState,
    hideZoomControl,
    ...rest
  } = props
  const mapStyle = BASEMAPS[DEFAULT_BASEMAP].options?.mapStyle
  const { latitude, longitude } = injectedViewState

  const mapRef = useRef<MapRef>(null)

  const dispatch = useDispatch()

  const [viewState, setViewState] = React.useState<Partial<ViewState>>({
    ...DEFAULT_VIEW_STATE,
    ...injectedViewState,
  })

  // Update viewPort to set center on onLatLng change
  React.useEffect(() => {
    setViewState({
      ...viewState,
      latitude,
      longitude,
    })
  }, [latitude, longitude])

  const onLoad = useCallback(() => {
    if (!mapRef.current) return
    mapRef?.current?.resize()

    const bounds = mapRef.current.getBounds()
    const [sw, ne] = [bounds.getSouthWest(), bounds.getNorthEast()]

    dispatch(MapActions.setBaseMapBoundary([sw.lng, sw.lat, ne.lng, ne.lat]))
  }, [])

  const handleOnRemove = () => dispatch(MapActions.setBaseMapBoundary(null))

  return (
    <Map
      {...viewState}
      ref={mapRef}
      styleDiffing={false}
      onMove={(event: ViewStateChangeEvent) => setViewState(event.viewState)}
      mapLib={maplibregl}
      mapStyle={mapStyle}
      attributionControl={false}
      style={sx}
      onLoad={onLoad}
      onRemove={handleOnRemove}
      {...rest}
    >
      <NavigationControl
        showCompass={false}
        position="top-left"
        showZoom={hideZoomControl ? false : true}
      />
      <DeckGLOverlay layers={layers} interleaved />
    </Map>
  )
}

export default BaseMap
