import {
  addLayer,
  addSource,
  Layer,
  removeLayer,
  removeSource,
  Source,
  updateLayer,
} from '@carto/react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { LegendData } from '../types'

export interface UseRegisterSourceConfig {
  source: Source
  layer: Layer
  layerAttributes?: Record<string, unknown>
  legend?: Record<string, LegendData>
}

export interface UseRegisterSourceOptions {
  skip?: boolean
  update?: unknown[]
  onUpdate?: VoidFunction
}

const useRegisterSource = (
  config: UseRegisterSourceConfig,
  options?: UseRegisterSourceOptions
) => {
  const { source, layer, layerAttributes, legend } = config
  const { update = [], onUpdate, skip } = options || {}
  const dispatch = useDispatch()

  // initialization
  useEffect(() => {
    if (skip) return
    dispatch(addSource(source))
    dispatch(addLayer({ id: layer.id, source: source.id }))
    dispatch(
      updateLayer({
        id: layer.id,
        source,
        layerAttributes: {
          layerAttributes,
          legend,
        },
      })
    )
    onUpdate?.()

    return () => {
      dispatch(removeLayer(layer.id))
      dispatch(removeSource(source.id))
    }
  }, [skip, ...update])
}

export default useRegisterSource
