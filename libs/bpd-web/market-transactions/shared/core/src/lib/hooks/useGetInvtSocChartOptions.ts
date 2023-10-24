import { useAppPalette } from '@bpd/bpd-web/shared/theme'
import { GetTxnByDimensionResult } from '@bpd/market-transactions/shared/data-access'
import { useMemo } from 'react'
import { MEASUREMENT_MAP } from '../constants'
import { TxnParams } from '../types'
import { getIsMeasurementLevel } from '../utils'
import useTransformTxnSocChartData from './useTransformTxnSocChartData'

interface GetInvtSocChartOptions {
  data: GetTxnByDimensionResult
  txnParams: TxnParams
}

const useGetInvtSocChartOptions = ({
  data,
  txnParams,
}: GetInvtSocChartOptions): Highcharts.Options => {
  const { frequency, timeframe, measurement } = txnParams
  const isMeasurementLevel = getIsMeasurementLevel(measurement)
  const palette = useAppPalette()
  const colors = palette.chart
  const txnChartData = useTransformTxnSocChartData(data, txnParams)

  const chartOptions = useMemo(() => {
    return {
      chart: {
        type: 'column',
        height: 300,
      },
      yAxis: [
        {
          type: isMeasurementLevel ? 'numeric' : 'percent',
          title: {
            text: isMeasurementLevel
              ? 'Txn Volume ($USD)'
              : MEASUREMENT_MAP[measurement],
          },
        },
        {
          title: {
            text: isMeasurementLevel ? '% Cross Border' : '',
          },
          softMin: 0,
          softMax: 1,
          opposite: true,
          type: 'percent',
        },
      ],
      colors: [
        colors.blueAlt,
        colors.orange,
        colors.purple,
        colors.pink,
        colors.green,
      ],
      plotOptions: {
        column: {
          stacking: 'normal',
          maxPointWidth: 50,
        },
      },
      exporting: {
        filename: `invt-soc-${measurement}-${frequency}-${timeframe}`,
      },
      ...txnChartData,
    } as Highcharts.Options
  }, [txnChartData, frequency, timeframe, measurement, isMeasurementLevel])

  return chartOptions
}

export default useGetInvtSocChartOptions
