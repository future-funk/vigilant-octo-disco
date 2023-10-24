import { FC, useEffect } from 'react'
import { useAppDispatch } from '@bpd/bpd-web/shared/store'
import {
  createLayers,
  MapToolbar,
  ZoomControl,
  MapActions,
  LayersControl,
} from '@bpd/vendors/carto'
import { MapMarkerLayer } from '@bpd/bpd-web/directory/feature-shell/shared/directory'
import { AssetsLayer, PoiLayer, HighwayLayer } from '../layers'
import { MapFilter, Legend } from '.'
import ResetButton from './ResetButton'

const Map: FC = () => {
  const dispatch = useAppDispatch()

  const layers = createLayers([
    HighwayLayer({}),
    AssetsLayer(),
    PoiLayer({}),
    MapMarkerLayer(),
  ])

  useEffect(() => {
    dispatch(MapActions.setLayers(layers))
    return () => {
      dispatch(MapActions.setLayers([]))
    }
  }, [layers])

  return (
    <>
      <ResetButton />
      <MapToolbar>
        <ZoomControl />
        <LayersControl>
          <MapFilter />
        </LayersControl>
      </MapToolbar>
      <Legend />
    </>
  )
}

export default Map
