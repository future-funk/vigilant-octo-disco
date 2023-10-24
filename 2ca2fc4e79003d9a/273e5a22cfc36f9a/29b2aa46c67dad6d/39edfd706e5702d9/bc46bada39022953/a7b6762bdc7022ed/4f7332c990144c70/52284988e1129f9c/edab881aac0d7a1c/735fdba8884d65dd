import React, { useMemo, FC, ReactNode } from 'react'
import Highcharts from 'highcharts'
import { ThemeOptions, useAppTheme } from '@bpd/bpd-web/shared/theme'
import { Chart } from '@bpd/vendors/highcharts'
import { BpdSuspense } from '@bpd/bpd-web/shared/ui'
import { MsaExposureCartoQueries } from '@bpd/msa-exposure/shared/data-access'
import { useGetMsaAssetsArgs } from '../../hooks'
import { some } from 'lodash'

interface PortfolioCardMsaExposureChartProps {
  children?: ReactNode
}

const PortfolioCardMsaExposureChart: FC<PortfolioCardMsaExposureChartProps> = (
  props
) => {
  const { palette, typography, spacing }: ThemeOptions = useAppTheme()

  const params = useGetMsaAssetsArgs()

  const { data, isError, isFetching } =
    MsaExposureCartoQueries.useGetTopMsaAssets(
      {
        ...params,
      },
      { skip: some([!params?.years, !params?.sectors, !params.top]) }
    )

  const chartOptions = useMemo(() => {
    if (!data) return
    return {
      chart: {
        type: 'pie',
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
      },
      plotOptions: {
        pie: {
          size: '75%',
          colors: [
            '#2D4E89',
            '#2E508D',
            '#305392',
            '#325797',
            '#34599C',
            '#365CA0',
            '#385FA5',
            '#3A62A9',
            '#3B64AD',
            '#3D67B1',
            '#3E69B5',
            '#406BB9',
            '#416EBD',
            '#4370C0',
            '#4472C4',
            '#577CC7',
            '#6685CA',
            '#738DCC',
            '#7E95CF',
            '#889CD2',
            '#91A3D4',
            '#9AAAD7',
            '#A2B0D9',
            '#A9B6DC',
            '#B0BCDE',
            '#B7C1E0',
            '#BDC6E3',
            '#C3CCE5',
            '#C8CFE7',
          ],
          dataLabels: {
            enabled: true,
            allowOverlap: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          },
        },
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      series: [
        {
          name: 'NMV',
          data: [
            ...data.map((topMsaAsset) => [
              topMsaAsset.msaShortName,
              topMsaAsset.percent,
            ]),
          ],
        },
      ],
    }
  }, [data, palette])

  return (
    <BpdSuspense error={isError} loading={isFetching}>
      {!!chartOptions && (
        <Chart key="msaOverviewChart" options={chartOptions} />
      )}
    </BpdSuspense>
  )
}

export default PortfolioCardMsaExposureChart
