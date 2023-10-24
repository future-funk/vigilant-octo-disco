import { useAppPalette } from '@bpd/bpd-web/shared/theme'
import { GetTxnByDimensionResult } from '@bpd/market-transactions/shared/data-access'
import { useMemo } from 'react'
import { MEASUREMENT_MAP } from '../constants'
import { TxnParams } from '../types'
import { getIsMeasurementLevel } from '../utils'
import useTransformTxnChartData from './useTransformTxnChartData'

interface GetTxnVolChartOptions {
  data: GetTxnByDimensionResult
  txnParams: TxnParams
}

const useGetTxnVolChartOptions = ({
  data,
  txnParams,
}: GetTxnVolChartOptions): Highcharts.Options => {
  const { frequency, timeframe, measurement } = txnParams
  const isMeasurementLevel = getIsMeasurementLevel(measurement)
  const palette = useAppPalette()
  const colors = palette.chart
  const txnChartData = useTransformTxnChartData(data, txnParams)

  const chartOptions = useMemo(() => {
    return {
      chart: {
        zoomType: 'xy',
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
          opposite: true,
          type: 'numeric',
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
        filename:
          `txn-vol-${measurement}-${frequency}-${timeframe}`.toLowerCase(),
      },
      ...txnChartData,
    } as Highcharts.Options
  }, [data, frequency, timeframe, measurement])

  return chartOptions
}

export default useGetTxnVolChartOptions
