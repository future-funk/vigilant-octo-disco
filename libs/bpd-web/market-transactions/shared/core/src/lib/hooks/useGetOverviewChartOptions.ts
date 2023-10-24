import { GetOverviewByDimensionResult } from '@bpd/market-transactions/shared/data-access'
import { useWindowSize } from '@bpd/ui/hooks'
import { formatPercent, formatRelativeNumber } from '@bpd/utils/formatters'
import { useMemo } from 'react'
import { getTreemapColor } from '../utils'

const transformTreemap = (items: GetOverviewByDimensionResult) => {
  return items.map((item) => {
    const { dimension, priceUsd, priceYoyUsd, priceYoyPercent } = item
    return {
      name: dimension,
      value: priceUsd,
      priceYoyUsd: priceYoyUsd,
      priceYoyPercent: priceYoyPercent,
      color: getTreemapColor(priceYoyPercent),
    }
  })
}

const renderTemplate = (data) => {
  if (!data) return null
  const { name, priceYoyPercent } = data.options

  return `
  <div style="text-align:center">
    <span>${name}</span><br/>
    <span>${priceYoyPercent > 0 ? '+' : ''}
    ${formatPercent(priceYoyPercent)}</span>
  </div>
`
}

const renderTooltip = (data) => {
  if (!data) return null
  const { name, value, priceYoyUsd, priceYoyPercent } = data.options

  return `
  <span style="font-size:14px">
    <b>${name}</b><br/>
    Txn Volumn (USD): <b>${formatRelativeNumber(value)}</b><br/>
    YoY,∆ (USD): <b>${formatRelativeNumber(priceYoyUsd)}</b><br/>
    YoY,%: <b>${formatPercent(priceYoyPercent)}</b><br/>
  </span>
  `
}

const useGetOverviewChartOptions = (
  chartData: GetOverviewByDimensionResult
) => {
  const { windowWidth, windowHeight } = useWindowSize()

  const chartOptions = useMemo(() => {
    if (!chartData) return

    const data = transformTreemap(chartData)
    return {
      chart: {
        height: windowWidth <= 1720 ? windowHeight - 330 : windowHeight - 310,
      },
      tooltip: {
        useHTML: true,
        pointFormatter: function () {
          return renderTooltip(this)
        },
      },
      title: false,
      credits: false,
      exporting: { enabled: false },
      accessibility: {
        description: 'Overview treemap chart',
        enabled: false,
      },

      series: [
        {
          type: 'treemap',
          layoutAlgorithm: 'squarified',
          clip: false,
          dataLabels: { enabled: true, overflow: 'crop' },
          levelIsConstant: false,
          allowDrillToNode: false,
          data,
          point: {
            events: {
              mouseOver: function () {
                this.update({ borderColor: '#F2CB13', borderWidth: 5 })
              },
              mouseOut: function () {
                this.update({ borderColor: '#ffffff', borderWidth: 3 })
              },
            },
          },
          levels: [
            {
              level: 1,
              dataLabels: {
                formatter: function () {
                  return renderTemplate(this.point)
                },
                style: {
                  textOutline: false,
                  fontSize: 15,
                },
              },
              borderWidth: 3,
              borderColor: '#ffffff',
            },
          ],
        },
      ],
    }
  }, [chartData, windowWidth, windowHeight])

  return chartOptions
}

export default useGetOverviewChartOptions
