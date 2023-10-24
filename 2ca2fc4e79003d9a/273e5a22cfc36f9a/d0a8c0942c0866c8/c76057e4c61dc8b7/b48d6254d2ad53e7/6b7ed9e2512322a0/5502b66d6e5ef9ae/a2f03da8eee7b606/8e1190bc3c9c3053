import { GetTxnByDimensionResult } from '@bpd/market-transactions/shared/data-access'
import { Chart } from '@bpd/vendors/highcharts'
import { Box } from '@gic/battlefield-ui-pack'
import HighchartsReact from 'highcharts-react-official'
import { FC, Ref } from 'react'
import { useGetTxnVolChartOptions } from '../hooks'
import { TxnParams } from '../types'

export interface TxnVolumeChartProps {
  chartRef: Ref<HighchartsReact.RefObject>
  data: GetTxnByDimensionResult
  txnParams: TxnParams
}

const TxnVolChart: FC<TxnVolumeChartProps> = (props) => {
  const { chartRef, data, txnParams } = props

  const chartOptions = useGetTxnVolChartOptions({ data, txnParams })

  return (
    <Box py={1} bgcolor="common.white" width="100%">
      <Chart ref={chartRef} options={chartOptions} />
    </Box>
  )
}

export default TxnVolChart
