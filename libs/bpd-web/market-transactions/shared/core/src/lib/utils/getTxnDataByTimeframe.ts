import { GetTxnByDimensionResult } from '@bpd/market-transactions/shared/data-access'
import dayjs from 'dayjs'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import { filter } from 'lodash'

dayjs.extend(isSameOrAfter)

const getTxnDataByTimeframe = (
  data: GetTxnByDimensionResult,
  timeframeMonths: number
): GetTxnByDimensionResult => {
  const firstDayOfMonth = dayjs().startOf('month')
  const sinceDate = firstDayOfMonth.subtract(timeframeMonths, 'month')
  return filter(data, (d) => dayjs(d.dt).isSameOrAfter(sinceDate))
}

export default getTxnDataByTimeframe
