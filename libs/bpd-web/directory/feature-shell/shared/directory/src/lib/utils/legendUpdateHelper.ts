import { LegendData, LayerLegend, Layer } from '@bpd/vendors/carto'
import { values, forEach, filter, chain, includes } from 'lodash'

const legendUpdateHelper = (
  layers: Record<string, Layer>,
  groupedRecords: string[],
  layerUpdater: (layerId: string, updatedLegends: LayerLegend) => void
) => {
  chain(layers)
    .keys()
    .value()
    .forEach((layerId: string) => {
      const updatedLegends: LayerLegend = {}

      //get legendValue belongs to layerId
      const layerLegends: Record<string, LegendData> = filter(layers, {
        id: layerId,
      }).reduce((result, layer) => ({ ...result, ...layer?.legend }), {})

      //set all layer legend visible to false
      const visibleFalseLayerLegends = values(layerLegends).map(
        (legend: LegendData) => ({
          ...legend,
          visible: false,
        })
      )

      forEach(visibleFalseLayerLegends, (legend: LegendData) => {
        updatedLegends[legend.value as keyof typeof legend] = includes(
          groupedRecords,
          legend.value as string
        )
          ? { ...legend, visible: true }
          : legend
      })

      layerUpdater(layerId, updatedLegends)
    })
}

export default legendUpdateHelper
