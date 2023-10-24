import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@bpd/bpd-web/shared/store'
import {
  MapToolbar,
  ZoomControl,
  createLayers,
  MapActions,
  MarkerLayer,
} from '@bpd/vendors/carto'
import { setViewState } from '@carto/react-redux'
import { LandscapeLayer, MapBoundary } from '../layers'
import Legend from './MapLegend'
import MapController from './MapController'
import { EsgPortalSelectors } from '../data'

const Map: FC = () => {
  const dispatch = useAppDispatch()

  const selectedRecord = useAppSelector(EsgPortalSelectors.getSelectedRecord)

  const layers = createLayers([
    MapBoundary(),
    LandscapeLayer(),
    MarkerLayer({
      coordinate: selectedRecord
        ? { latitude: selectedRecord?.lat, longitude: selectedRecord?.lng }
        : null,
    }),
  ])

  useEffect(() => {
    if (!selectedRecord) return
    dispatch(
      setViewState({
        latitude: selectedRecord?.lat,
        longitude: selectedRecord?.lng,
      })
    )
  }, [selectedRecord])

  useEffect(() => {
    dispatch(MapActions.setLayers(layers))
    return () => {
      dispatch(MapActions.setLayers([]))
    }
  }, [layers])

  return (
    <>
      <MapToolbar>
        <ZoomControl />
        <MapController />
      </MapToolbar>
      <Legend />
    </>
  )
}

export default Map
