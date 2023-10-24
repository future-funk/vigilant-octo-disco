import React, { useMemo, FC } from 'react'
import { omit } from 'lodash'
import Highcharts from 'highcharts'
import { ThemeOptions, useAppTheme } from '@bpd/bpd-web/shared/theme'
import { Chart } from '@bpd/vendors/highcharts'
import { BpdSuspense } from '@bpd/bpd-web/shared/ui'
import { MsaExposureCartoQueries } from '@bpd/msa-exposure/shared/data-access'
import { extractChartDataFromMsaExposure } from '../../utils'
import { useGetMsaAssetsArgs } from '../../hooks'

interface PortfolioCardSectorExposureChartProps {}

const CHART_HEIGHT = 400

const PortfolioCardSectorExposureChart: FC<
  PortfolioCardSectorExposureChartProps
> = (props) => {
  const { palette }: ThemeOptions = useAppTheme()

  const params = useGetMsaAssetsArgs()

  const { data, isError, isFetching } = MsaExposureCartoQueries.useGetMsaAssets(
    {
      ...omit(params, 'top'),
    },
    { skip: !params?.years || !params?.sectors }
  )

  const chartOptions = useMemo(() => {
    if (!data) return
    const { sectors, msaData } = extractChartDataFromMsaExposure(data)
    const axisLabelStyle = {
      color: palette['text'].secondary,
      fontSize: '10px',
      lineHeight: '14px',
    }

    return {
      chart: {
        type: 'column',
        height: CHART_HEIGHT,
        spacingTop: 10,
        zoomType: 'x',
        style: { fontFamily: 'inherit' },
      },
      series: [
        {
          name: 'Primary Market',
          data: msaData['Primary Market'].perc,
          color: palette.chart.deepBlue,
        },
        {
          name: 'Top 25 MSA',
          data: msaData['Top 25 MSA'].perc,
          color: palette.chart.bronze,
        },
      ],
      xAxis: [
        {
          categories: sectors,
          labels: {
            enabled: true,
            rotation: 90,
            formatter(this: Highcharts.AxisLabelsFormatterContextObject) {
              return this.value
            },
          },
          //lineColor: 'transparent',
          tickWidth: 1,
          startOnTick: true,
          endOnTick: false,
          style: axisLabelStyle,
          tickColor: palette.primary.dark,
        },
      ],
      yAxis: {
        title: {
          text: 'Percentage',
        },
        type: 'percent',
      },
      legend: {
        symbolRadius: 0,
        labelFormatter: function (
          this: Highcharts.Point | Highcharts.Series
        ): string {
          return this.name
        },
      },
      plotOptions: {
        column: {
          marker: {
            symbol: 'square',
          },
        },
        series: {
          groupPadding: 0,
          dataLabels: {
            overflow: 'allow',
            crop: false,
            color: '#000',
          },
        },
      },
    }
  }, [data, palette])

  return (
    <BpdSuspense error={isError} loading={isFetching}>
      {!!chartOptions && <Chart key="msaChart" options={chartOptions} />}
    </BpdSuspense>
  )
}

export default PortfolioCardSectorExposureChart
