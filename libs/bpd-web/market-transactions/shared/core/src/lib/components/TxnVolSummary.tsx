import { BpdSuspense } from '@bpd/bpd-web/shared/ui'
import { Card, Stack } from '@gic/battlefield-ui-pack'
import { RadioChangeEvent } from 'antd'
import HighchartsReact from 'highcharts-react-official'
import { FC, useRef, useState } from 'react'
import { DEFAULT_TXN, TXN_VOL_DIMENSION_TYPE } from '../constants'
import { useGetTxnDataByDimension } from '../hooks'
import { TxnParams } from '../types'
import TxnGrid from './TxnGrid'
import TxnMetrics from './TxnMetrics'
import TxnVolActionBar from './TxnVolActionBar'
import TxnVolChart from './TxnVolChart'

export interface TxnVolSummaryProps {}

const TxnVolSummary: FC<TxnVolSummaryProps> = () => {
  const [dimension, setDimension] = useState<string>(
    TXN_VOL_DIMENSION_TYPE.SINGLE_ASSET_PORTFOLIO
  )
  const [txnParams, setTxnParams] = useState<TxnParams>(
    DEFAULT_TXN
  )
  const chartRef = useRef() as React.MutableRefObject<HighchartsReact.RefObject>

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

  const handleChangeDimension = (e: RadioChangeEvent) => {
    setDimension(e.target.value)
  }

  return (
    <Card
      title="Transaction Volume Summary"
      stretch
      divider
      size="small"
      disableBorder
      leftActions={
        <TxnVolActionBar
          {...{ dimension, handleChangeDimension, handleClickExport }}
        />
      }
    >
      <TxnMetrics {...{ setTxnParams }} />
      <BpdSuspense error={isError} loading={isFetching}>
        <Stack spacing={1} alignItems="center">
          <TxnVolChart {...{ chartRef, data: txnData, txnParams }} />
          <TxnGrid {...{ txnData, ytdData, frequency, timeframe }} />
        </Stack>
      </BpdSuspense>
    </Card>
  )
}

export default TxnVolSummary
