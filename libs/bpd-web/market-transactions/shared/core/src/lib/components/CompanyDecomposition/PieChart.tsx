import { useAppPalette } from '@bpd/bpd-web/shared/theme'
import { GetCompanyDecompByDimensionResult } from '@bpd/market-transactions/shared/data-access'
import { formatRelativeNumber } from '@bpd/utils/formatters'
import { Chart } from '@bpd/vendors/highcharts'
import { map } from 'lodash'
import { useMemo } from 'react'
import { VIEW_TYPE_MAP } from '../../constants'

const getChartData = (
  items: GetCompanyDecompByDimensionResult,
  viewType: string
) => {
  const { priceField, percentField } = VIEW_TYPE_MAP[viewType]
  return map(items, (item) => ({
    name: item.dimension,
    y: item[percentField],
    displayValue: formatRelativeNumber(item[priceField]),
  }))
}

interface PieChartProps {
  items: GetCompanyDecompByDimensionResult
  viewType: string
}

const PieChart = (props: PieChartProps) => {
  const { items, viewType } = props
  const palette = useAppPalette()
  const colors = palette.chart

  const data = getChartData(items, viewType)

  const chartOptions = useMemo(() => {
    if (!items) return

    return {
      chart: {
        type: 'pie',
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        width: 510,
        height: 275,
      },
      plotOptions: {
        pie: {
          size: '75%',
          colors: [
            colors.blue,
            colors.blueAlt,
            colors.purple,
            colors.yellow,
            colors.orange,
            colors.bronze,
            colors.bronzeAlt,
            colors.pink,
            colors.deepBlue,
            colors.cyan,
            colors.cyanAlt,
            colors.green,
            colors.azureBlue,
          ],
          dataLabels: {
            enabled: true,
            allowOverlap: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          },
        },
      },
      tooltip: {
        pointFormat:
          '{series.name}: <b>{point.displayValue}</b> [<b>{point.percentage:.1f}%</b>]',
      },
      series: [
        {
          name: 'Company',
          data: data,
        },
      ],
    }
  }, [items])

  return <Chart key="decomp-pie-chart" options={chartOptions} />
}

export default PieChart
