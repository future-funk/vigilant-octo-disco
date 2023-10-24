import { chain } from 'lodash'
import {
  getCartoLayers,
  useCartoSelector,
  LayerLegend,
} from '@bpd/vendors/carto'
import { useAppDispatch } from '@bpd/bpd-web/shared/store'
import { updateLayer } from '@carto/react-redux'
import { useEffect } from 'react'
import { legendUpdateHelper } from '../utils'

const useGetActiveMapLegends = <T>(
  records: T[],
  colorBy: string,
  filters: unknown,
  isMoving?: boolean
) => {
  const dispatch = useAppDispatch()

  const layers = useCartoSelector(getCartoLayers)

  const groupedRecords = chain(records).groupBy(colorBy).keys().value()

  const layerUpdater = (layerId: string, legends: LayerLegend) => {
    dispatch(
      updateLayer({
        id: layerId,
        layerAttributes: { legend: legends },
      })
    )
  }

  useEffect(() => {
    if (!colorBy) return
    legendUpdateHelper(layers, groupedRecords, layerUpdater)
  }, [filters, colorBy, isMoving])

  /**
   * filters: to update legend, when filters change
   * colorBy: to update legend, when colorBy Attribute change
   * isMoving: to update legend, when viewport change
   */
}

export default useGetActiveMapLegends
