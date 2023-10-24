import { FC, useEffect } from 'react'
import { Box } from '@gic/battlefield-ui-pack'
import { useDispatch } from 'react-redux'
import maplibregl from 'maplibre-gl'
import { BASEMAPS, GoogleMap } from '@carto/react-basemaps'
import type { CartoBasemaps } from '@carto/react-basemaps'
import type { LayersList } from '@deck.gl/core/typed'
import { useCartoSelector } from '../hooks'
import useMapHooks from '../hooks/useMapHooks'
import { MapActions } from '../stores/mapSlice'
import { setViewState } from '@carto/react-redux'
import Map from 'react-map-gl'
import Popup from './Popup'

declare const window: Window &
  typeof globalThis & { cartoGmap: any; google: any }

export interface DeckGLComponentProps {
  layers: LayersList
}

const DeckGLGoogleMapOverlay: FC<DeckGLComponentProps> = ({ layers }) => {
  const dispatch = useDispatch<any>()

  const basemap = useCartoSelector(
    (state) => BASEMAPS[state.carto.basemap as keyof CartoBasemaps]
  )

  const googleApiKey = useCartoSelector((state) => state.carto.googleApiKey)
  const viewState = useCartoSelector((state) => state.carto.viewState)

  const { handleGetCursor, handleViewStateChange } = useMapHooks()

  useEffect(() => {
    if (!window?.cartoGmap) return

    window.google.maps.event.addListener(
      window?.cartoGmap,
      'contextmenu',
      function (event) {
        const { latLng } = event

        dispatch(
          MapActions.setMarkerCoordinates({
            longitude: latLng.lng(),
            latitude: latLng.lat(),
          })
        )
      }
    )
  }, [window?.cartoGmap])

  const getCursor = (event: any) => {
    const { picked } = event

    window.cartoGmap?.setOptions({
      draggableCursor: handleGetCursor({ isHovering: picked }),
    })
  }

  const handleResize = ({
    width,
    height,
  }: {
    width: number
    height: number
  }) => {
    dispatch(
      setViewState({
        height: height,
        width: width,
      })
    )
  }

  return (
    <Box height="inherit" width="inherit">
      <Map attributionControl={false} mapLib={maplibregl} {...viewState}>
        <GoogleMap
          apiKey={googleApiKey}
          viewState={viewState}
          basemap={basemap}
          layers={layers}
          onResize={handleResize}
          getTooltip={getCursor}
          onViewStateChange={handleViewStateChange}
        />
        <Popup />
      </Map>
    </Box>
  )
}

export default DeckGLGoogleMapOverlay
