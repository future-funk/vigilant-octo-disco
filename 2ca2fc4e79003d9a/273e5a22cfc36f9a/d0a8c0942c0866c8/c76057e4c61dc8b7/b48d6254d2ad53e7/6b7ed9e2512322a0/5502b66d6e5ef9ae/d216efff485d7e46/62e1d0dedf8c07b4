import { GetTxnByDimensionResult } from '@bpd/market-transactions/shared/data-access'
import { TxnParams } from '../types'
import {
  getIsMeasurementLevel,
  getTxnDataByTimeframe,
  transformTxnChartDataWithFrequency,
  transformTxnChartDataWithLevel,
} from '../utils'

const useTransformTxnChartData = (
  data: GetTxnByDimensionResult,
  txnParams: TxnParams
) => {
  const { frequency, measurement, timeframe } = txnParams
  const txnData = getTxnDataByTimeframe(data, timeframe)

  return getIsMeasurementLevel(measurement)
    ? transformTxnChartDataWithLevel(txnData, frequency)
    : transformTxnChartDataWithFrequency(txnData, frequency, measurement)
}

export default useTransformTxnChartData
