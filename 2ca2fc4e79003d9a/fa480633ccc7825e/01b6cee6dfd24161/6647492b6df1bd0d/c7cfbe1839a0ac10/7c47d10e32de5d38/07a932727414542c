import { useDispatch } from 'react-redux'
import type { Point } from '../types'
import { setViewState } from '@carto/react-redux'
import { WebMercatorViewport } from '@deck.gl/core/typed'
import { chain } from 'lodash'
import { useEffect } from 'react'
import { MapBounds } from '../types'
import { useCartoSelector } from '../hooks'

export interface MapBoundaryLayerOptions {
  update: unknown[]
}

const parseMapBounds = (bounds: string): [Point, Point] | null => {
  const FLOAT_REGEX = /-?[0-9]\d*(\.\d+)?/g
  const matches = bounds.match(FLOAT_REGEX)
  return matches?.length
    ? [
        [parseFloat(matches[0]), parseFloat(matches[1])],
        [parseFloat(matches[2]), parseFloat(matches[3])],
      ]
    : null
}

const getBounds = (data?: MapBounds) => {
  const bounds = chain(data).first().get('bounds').defaultTo('').value()
  return parseMapBounds(bounds)
}

export const MAP_BOUNDARY_LAYER_ID = 'mapBoundaryLayer'

const MapBoundaryLayer = (
  data?: MapBounds,
  options?: MapBoundaryLayerOptions
) => {
  const { update = [] } = options || {}

  const dispatch = useDispatch<any>()

  const height = useCartoSelector((state) => state.carto.viewState.height)
  const width = useCartoSelector((state) => state.carto.viewState.width)

  const isMapLoaded = !!width

  useEffect(() => {
    const bounds = getBounds(data)

    if (bounds && isMapLoaded) {
      try {
        const { latitude, longitude, zoom } = new WebMercatorViewport({
          height,
          width,
        }).fitBounds(bounds, { padding: 25 })
        // the setTimeout is required since another setViewState action with the old state is dispatched
        setTimeout(() => dispatch(setViewState({ latitude, longitude, zoom })))
      } catch (error) {
        console.error(error)
      }
    }
  }, [data, isMapLoaded, ...update])
}

export default MapBoundaryLayer
