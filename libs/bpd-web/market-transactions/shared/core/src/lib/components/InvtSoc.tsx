import { Card, Stack } from '@gic/battlefield-ui-pack'
import { FC, useRef, useState } from 'react'
import HighchartsReact from 'highcharts-react-official'
import { BpdSuspense } from '@bpd/bpd-web/shared/ui'
import InvtSocActionBar from './InvtSocActionBar'
import InvtSocChart from './InvtSocChart'
import TxnMetrics from './TxnMetrics'
import TxnGrid from './TxnGrid'
import { DEFAULT_TXN, TXN_VOL_DIMENSION_TYPE } from '../constants'
import { useGetTxnDataByDimension } from '../hooks'
import { TxnParams } from '../types'

export interface InvtSocProps {}

const InvtSoc: FC<InvtSocProps> = () => {
  const chartRef = useRef() as React.MutableRefObject<HighchartsReact.RefObject>

  const dimension = TXN_VOL_DIMENSION_TYPE.CAPITAL_FLOW_TYPE
  const [txnParams, setTxnParams] =
    useState<TxnParams>(DEFAULT_TXN)

  const { frequency, timeframe } = txnParams
  const { txnData, ytdData, isFetching, isError } = useGetTxnDataByDimension({
    dimension,
    frequency,
  })

  const handleClickExport = () => {
    if (chartRef) {
      const chart = chartRef.current.chart as Highcharts.Chart
      chart.downloadCSV()
    }
  }

  return (
    <Card
      title="Investment By Source of Capital"
      stretch
      divider
      size="small"
      disableBorder
      leftActions={<InvtSocActionBar {...{ handleClickExport }} />}
    >
      <TxnMetrics {...{ setTxnParams }} />
      <BpdSuspense error={isError} loading={isFetching}>
        <Stack spacing={1} alignItems="center">
          <InvtSocChart {...{ chartRef, data: txnData, txnParams }} />
          <TxnGrid {...{ txnData, ytdData, frequency, timeframe }} />
        </Stack>
      </BpdSuspense>
    </Card>
  )
}

export default InvtSoc
