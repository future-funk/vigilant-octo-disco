import { GetTxnByDimensionResult } from '@bpd/market-transactions/shared/data-access'
import { formatRelativeNumber } from '@bpd/utils/formatters'
import { chain, every, groupBy, map, sumBy } from 'lodash'
import getUniqueLabelsByFrequency from './getUniqueLabelsByFrequency'

const transformTxnChartDataWithLevel = (
  items: GetTxnByDimensionResult,
  frequency: string
) => {
  const uniqDimensions = chain(items)
    .map((item) => item.dimension)
    .uniq()
    .value()

  const groupedItems = Object.values(groupBy(items, 'dt'))
  const rollingTotals = groupedItems.reduce((prevItems, currItems) => {
    const total = every(currItems, (item) => item.rollingUsd !== null)
      ? sumBy(currItems, 'rollingUsd')
      : null
    return [...prevItems, total]
  }, [])

  const uniqLabels = getUniqueLabelsByFrequency(items, frequency)

  return {
    xAxis: [{ categories: map(uniqLabels, (label) => `${label}`) }],
    series: [
      ...map(uniqDimensions, (dimension) => ({
        name: dimension,
        type: 'column',
        yAxis: 0,
        data: chain(items)
          .filter((item) => item.dimension === dimension)
          .map((item) => item.priceUsd || 'NA')
          .value(),
      })),
      {
        name: 'Rolling (12 months)',
        type: 'line',
        color: '#718096',
        data: map(rollingTotals, (value: number) => value || 'NA'),
        dataLabels: {
          enabled: true,
          formatter: function () {
            return formatRelativeNumber(this.y)
          },
        },
      },
    ],
  }
}

export default transformTxnChartDataWithLevel
