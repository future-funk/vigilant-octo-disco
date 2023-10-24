import { GetCompanyDecompByNetFlowResult } from '@bpd/market-transactions/shared/data-access'
import { formatNumber, formatNumberInMillions } from '@bpd/utils/formatters'
import { Chart } from '@bpd/vendors/highcharts'
import { useMemo } from 'react'

interface NetFlowWaterfallProps {
  items: GetCompanyDecompByNetFlowResult
}

const Waterfall = (props: NetFlowWaterfallProps) => {
  const { items } = props

  const chartOptions = useMemo(() => {
    if (!items) return

    return {
      chart: {
        type: 'waterfall',
        width: 510,
        height: 275,
      },
      title: false,
      credits: false,
      exporting: { enabled: false },
      xAxis: {
        type: 'category',
      },
      yAxis: {
        title: {
          text: 'USD',
        },
        type: 'numeric',
      },
      legend: {
        enabled: false,
      },
      tooltip: {
        formatter: function () {
          return (
            this.point.name +
            '<br/><b>$' +
            formatNumber(this.point.y) +
            '</b> USD'
          )
        },
      },

      series: [
        {
          data: [
            ...items.map((item) => ({
              name: item.dimension,
              y: item.netPriceUsd,
              color: item.netPriceUsd > 0 ? '#48BB78' : '#E53E3E',
            })),
            { name: 'Total', isSum: true, color: '#2c5282' },
          ],
          dataLabels: {
            enabled: true,
            formatter: function () {
              return formatNumberInMillions(this.y)
            },
          },
          pointPadding: 0,
        },
      ],
    }
  }, [items])

  return <Chart key="decomp-waterfall-chart" options={chartOptions} />
}

export default Waterfall
