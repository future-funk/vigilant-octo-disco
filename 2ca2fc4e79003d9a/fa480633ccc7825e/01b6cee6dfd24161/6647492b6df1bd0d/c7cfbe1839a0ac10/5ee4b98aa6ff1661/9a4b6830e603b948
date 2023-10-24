import type { CartoBasemaps } from '@carto/react-basemaps'
import { setViewState } from '@carto/react-redux'
import { BASEMAPS } from '@carto/react-basemaps'
import type { LayersList } from '@deck.gl/core/typed'
import { Box } from '@gic/battlefield-ui-pack'
import { debounce, isNil, pick } from 'lodash'
import maplibregl from 'maplibre-gl'
import { useResizeDetector } from 'react-resize-detector'
import { FC, useCallback, useRef, useState, useEffect } from 'react'
import Map, {
  MapRef,
  ViewStateChangeEvent,
  MapLayerMouseEvent,
} from 'react-map-gl'
import { useDispatch } from 'react-redux'
import { useCartoSelector } from '../hooks'
import useMapHooks from '../hooks/useMapHooks'
import { MapActions, MapSelectors } from '../stores/mapSlice'
import DeckGLOverlay from './DeckGLOverlay'
import Popup from './Popup'
import { getViewportOffset } from '../utils'

export interface DeckGLComponentProps {
  layers: LayersList
}

const DeckGLComponent: FC<DeckGLComponentProps> = ({ layers }) => {
  const dispatch = useDispatch<any>()

  const mapRef = useRef<MapRef>(null)

  const tooltip = useCartoSelector(MapSelectors.getTooltip)

  const [initialized, setInitialized] = useState(false)

  const viewState = useCartoSelector((state) => state.carto.viewState)

  const basemap = useCartoSelector(
    (state) => BASEMAPS[state.carto.basemap as keyof CartoBasemaps]
  )

  const { handleGetCursor, handleViewStateChange } = useMapHooks()

  const handleMoveEnd = useCallback(
    debounce(() => {
      if (!mapRef.current) return
      const bounds = mapRef.current.getBounds()
      const [sw, ne] = [bounds.getSouthWest(), bounds.getNorthEast()]
      dispatch(
        MapActions.setBounds(`BOX(${sw.lng} ${sw.lat},${ne.lng} ${ne.lat})`)
      )
    }, 500),
    []
  )

  const handleMove = (event: ViewStateChangeEvent) => {
    handleViewStateChange(event)
    handleMoveEnd()
  }

  const handleContextMenu = (event: MapLayerMouseEvent) => {
    const { lng, lat } = event.lngLat
    dispatch(
      MapActions.setMarkerCoordinates({
        longitude: lng,
        latitude: lat,
      })
    )
  }

  useEffect(() => {
    if (!isNil(tooltip)) {
      if (!mapRef.current) return
      const { latitude, longitude } = tooltip
      const project = mapRef.current.project([longitude, latitude])

      const canvas = mapRef?.current?.getCanvas()
      const defaultWidth = canvas?.clientWidth || canvas?.width || 1
      const defaultHeight = canvas?.clientHeight || canvas?.height || 1

      if (project && defaultWidth && defaultHeight) {
        const offset = getViewportOffset(defaultWidth, defaultHeight, project)

        if ((offset ?? []).length > 0)
          //@ts-ignore
          mapRef.current.panBy(offset, { duration: 1000 })
      }
    }
  }, [tooltip])

  const handleLoad = () => {
    mapRef?.current?.resize()
    setInitialized(true)

    const centerPoint = mapRef?.current?.getCenter()
    dispatch(
      MapActions.setCenterPoint({
        longitude: centerPoint?.lng || 0,
        latitude: centerPoint?.lat || 0,
      })
    )
  }

  const handleResize = ({
    width,
    height,
  }: {
    width: number
    height: number
  }) => {
    const canvas = mapRef?.current?.getCanvas()
    const defaultWidth = canvas?.clientWidth || canvas?.width || 1
    const defaultHeight = canvas?.clientHeight || canvas?.height || 1
    dispatch(
      setViewState({
        height: !isNaN(height) ? height : defaultHeight,
        width: !isNaN(width) ? width : defaultWidth,
      })
    )
  }

  const onResize = useCallback(() => {
    if (!mapRef.current) return
    mapRef?.current?.resize()
  }, [])

  const { ref: containerRef } = useResizeDetector({
    skipOnMount: true,
    handleHeight: false,
    onResize,
  })

  return (
    <Box height="inherit" width="inherit" ref={containerRef}>
      <Map
        ref={mapRef}
        attributionControl={false}
        mapLib={maplibregl}
        onContextMenu={handleContextMenu}
        mapStyle={basemap.options.mapStyle}
        onMove={handleMove}
        onLoad={handleLoad}
        style={
          initialized ? { visibility: 'inherit' } : { visibility: 'hidden' }
        }
        {...viewState}
      >
        <DeckGLOverlay
          interleaved
          getCursor={handleGetCursor}
          layers={layers}
          onResize={handleResize}
        />
        <Popup />
      </Map>
    </Box>
  )
}

export default DeckGLComponent
