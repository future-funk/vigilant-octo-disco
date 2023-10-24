import { GetTxnByDimensionResult } from '@bpd/market-transactions/shared/data-access'
import { formatPercent } from '@bpd/utils/formatters'
import { chain, filter, map } from 'lodash'
import getUniqueLabelsByFrequency from './getUniqueLabelsByFrequency'

function transformTxnSocChartDataWithLevel(
  items: GetTxnByDimensionResult,
  frequency: string
) {
  const crossBorderItems = filter(items, (i) => i.dimension === 'Cross Border')

  const uniqDimensions = chain(items).map('dimension').uniq().value()
  const uniqLabels = getUniqueLabelsByFrequency(items, frequency)

  return {
    xAxis: [{ categories: map(uniqLabels, (label) => `${label}`) }],
    series: [
      ...map(uniqDimensions, (dimension) => ({
        name: dimension,
        type: 'column',
        yAxis: 0,
        data: chain(items)
          .filter((i) => i.dimension === dimension)
          .map((d) => d.priceUsd || 'NA')
          .value(),
      })),
      {
        name: '% Cross Border',
        type: 'line',
        yAxis: 1,
        color: '#718096',
        data: map(crossBorderItems, (item) => item.weightPercent || 'NA'),
        dataLabels: {
          enabled: true,
          formatter: function () {
            return formatPercent(this.y)
          },
        },
      },
    ],
  }
}

export default transformTxnSocChartDataWithLevel
