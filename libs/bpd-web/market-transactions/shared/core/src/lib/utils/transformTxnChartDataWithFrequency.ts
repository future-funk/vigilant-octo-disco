import { GetTxnByDimensionResult } from '@bpd/market-transactions/shared/data-access'
import { formatPercent } from '@bpd/utils/formatters'
import { chain, filter, groupBy, isNil, map, sumBy } from 'lodash'
import getIsMeasurementLevel from './getIsMeasurementLevel'
import getUniqueLabelsByFrequency from './getUniqueLabelsByFrequency'

const getTxnFieldMapping = (measurement: string): Record<string, string> => {
  if (getIsMeasurementLevel(measurement)) {
    return {
      active_field: 'priceUsd',
      total_field: 'rollingUsd',
    }
  }
  return {
    active_field: `price${measurement}Percent`,
    total_field: `price${measurement}Percent`,
  }
}

export function transformTxnChartDataWithFrequency(
  data: GetTxnByDimensionResult,
  frequency: string,
  measurement: string
) {
  const { active_field, total_field } = getTxnFieldMapping(measurement)

  const items = filter(data, (d) => !isNil(d[total_field]))

  const uniqDimensions = chain(items)
    .map((item) => item.dimension)
    .uniq()
    .value()

  const groupedItems = Object.values(groupBy(items, 'dt'))
  const freqChangeTotals = groupedItems.reduce((prevItems, currItems) => {
    const total = currItems.every((i) => i[total_field] !== null)
      ? sumBy(currItems, total_field)
      : null
    return [...prevItems, total]
  }, [])

  const uniqLabels = getUniqueLabelsByFrequency(items, frequency)

  return {
    xAxis: [{ categories: uniqLabels.map((label) => `${label}`) }],
    series: [
      ...map(uniqDimensions, (dimension) => ({
        name: dimension,
        type: 'column',
        yAxis: 0,
        data: items
          .filter((i) => i.dimension === dimension)
          .map((d) => d[active_field] || 'NA'),
      })),
      {
        name: 'Total',
        type: 'line',
        color: '#718096',
        data: freqChangeTotals.map((value: number) => value || 'NA'),
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

export default transformTxnChartDataWithFrequency
