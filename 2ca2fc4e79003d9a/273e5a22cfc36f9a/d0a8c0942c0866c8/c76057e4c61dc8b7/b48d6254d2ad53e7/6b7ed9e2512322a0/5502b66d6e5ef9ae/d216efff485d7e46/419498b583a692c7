import {
  GetTxnByDimensionResult,
  GetYtdTxnByDimensionResult,
} from '@bpd/market-transactions/shared/data-access'
import { chain, find, groupBy, last, sumBy } from 'lodash'
import { getLastPeriodHeader, getTxnDataByTimeframe } from '../utils'
import getYtdHeader from '../utils/getYtdHeader'

const useTransformTxnGridData = (
  data: GetTxnByDimensionResult,
  ytdData: GetYtdTxnByDimensionResult,
  frequency: string,
  timeframe: number
) => {
  const txnData = getTxnDataByTimeframe(data, timeframe)

  const grpItems = Object.values(groupBy(txnData, 'dt'))
  const lastItems = last(grpItems)

  const uniqDimensions = chain(lastItems).map('dimension').uniq().value()

  const rows = uniqDimensions.map((dimension) => {
    const lastItem = find(lastItems, (i) => i.dimension === dimension)
    const ytdItem = find(ytdData, (i) => i.dimension === dimension) || {
      priceUsd: null,
      weightPercent: null,
      priceYoyPercent: null,
    }
    return {
      dimension,
      lastPriceUsd: lastItem.priceUsd,
      lastPriceYoyPercent: lastItem.priceYoyPercent,
      lastWeightPercent: lastItem.weightPercent,
      ytdPriceUsd: ytdItem.priceUsd,
      ytdWeightPercent: ytdItem.weightPercent,
      ytdPriceYoyPercent: ytdItem.priceYoyPercent,
    }
  })

  const totalRow = {
    dimension: 'Total',
    lastPriceUsd: sumBy(rows, 'lastPriceUsd'),
    lastWeightPercent: sumBy(rows, 'lastWeightPercent'),
    lastPriceYoyPercent: sumBy(rows, 'lastPriceYoyPercent'),
    ytdPriceUsd: sumBy(rows, 'ytdPriceUsd'),
    ytdPriceYoyPercent: sumBy(rows, 'ytdPriceYoyPercent'),
  }

  return {
    rows: [...rows, totalRow],
    lastHeader: getLastPeriodHeader(lastItems, frequency),
    ytdHeader: getYtdHeader(ytdData),
  }
}

export default useTransformTxnGridData
