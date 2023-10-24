import { GetYtdTxnByDimensionResult } from '@bpd/market-transactions/shared/data-access'
import { formatDate } from '@bpd/utils/formatters'
import { chain, head } from 'lodash'

const getYtdHeader = (ytdItems: GetYtdTxnByDimensionResult): string => {
  const uniqDates = chain(ytdItems).map('dt').uniq().value()
  if (uniqDates.length > 0) {
    const uniqDate = head(uniqDates)
    return `YTD '${formatDate(uniqDate, 'YY')}`
  }
  return 'YTD'
}

export default getYtdHeader
