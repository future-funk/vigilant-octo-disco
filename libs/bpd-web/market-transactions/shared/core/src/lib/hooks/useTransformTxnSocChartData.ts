import { GetTxnByDimensionResult } from '@bpd/market-transactions/shared/data-access'
import { TxnParams } from '../types'
import {
  getIsMeasurementLevel,
  getTxnDataByTimeframe,
  transformTxnChartDataWithFrequency,
  transformTxnSocChartDataWithLevel,
} from '../utils'

const useTransformTxnSocChartData = (
  data: GetTxnByDimensionResult,
  txnParams: TxnParams
) => {
  const { frequency, measurement, timeframe } = txnParams
  const txnData = getTxnDataByTimeframe(data, timeframe)

  return getIsMeasurementLevel(measurement)
    ? transformTxnSocChartDataWithLevel(txnData, frequency)
    : transformTxnChartDataWithFrequency(txnData, frequency, measurement)
}

export default useTransformTxnSocChartData
