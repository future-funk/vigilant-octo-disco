import { FC, useEffect, useMemo } from 'react'
import {
  createLayers,
  Legend,
  MapToolbar,
  ZoomControl,
  MapActions,
} from '@bpd/vendors/carto'
import { useAppDispatch } from '@bpd/bpd-web/shared/store'
import { MarketsLayer, HoldingLayer, MapMarkerLayer } from '../layers'
import { MapFilter, MapController } from '.'

const Map: FC = () => {
  const dispatch = useAppDispatch()

  const layers = createLayers([
    HoldingLayer(),
    MarketsLayer(),
    MapMarkerLayer(),
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
        <MapController>
          <MapFilter />
        </MapController>
      </MapToolbar>
      <Legend />
    </>
  )
}

export default Map
