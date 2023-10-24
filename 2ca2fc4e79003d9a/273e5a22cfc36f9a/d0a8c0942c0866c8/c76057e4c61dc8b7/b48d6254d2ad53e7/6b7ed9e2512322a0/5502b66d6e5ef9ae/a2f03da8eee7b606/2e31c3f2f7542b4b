import { FC, Ref } from 'react'
import { Chart } from '@bpd/vendors/highcharts'
import { Box } from '@gic/battlefield-ui-pack'
import HighchartsReact from 'highcharts-react-official'
import { GetTxnByDimensionResult } from '@bpd/market-transactions/shared/data-access'
import { useGetInvtSocChartOptions } from '../hooks'
import { TxnParams } from '../types'

export interface InvtSocChartProps {
  chartRef: Ref<HighchartsReact.RefObject>
  data: GetTxnByDimensionResult
  txnParams: TxnParams
}

const InvtSocChart: FC<InvtSocChartProps> = (props) => {
  const { chartRef, data, txnParams } = props

  const chartOptions = useGetInvtSocChartOptions({ data, txnParams })

  return (
    <Box py={1} bgcolor="common.white" width="100%">
      <Chart ref={chartRef} options={chartOptions} />
    </Box>
  )
}

export default InvtSocChart
