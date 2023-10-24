import { FC, useEffect } from 'react'
import { useAppDispatch } from '@bpd/bpd-web/shared/store'
import {
  createLayers,
  MapToolbar,
  ZoomControl,
  MapActions,
} from '@bpd/vendors/carto'
import { AssetsLayer, SelectedAssetsLayer } from '../layers'
import MapController from './MapController'
import { MapMarkerLayer } from '@bpd/bpd-web/directory/feature-shell/shared/directory'
import Legend from './MapLegend'

const Map: FC = () => {
  const dispatch = useAppDispatch()
  const layers = createLayers([
    AssetsLayer(),
    MapMarkerLayer(),
    SelectedAssetsLayer(),
  ])

  useEffect(() => {
    if (!layers.length) return
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
