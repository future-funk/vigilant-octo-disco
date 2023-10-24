import { TxnByDimension } from '@bpd/market-transactions/shared/data-access'
import { formatDate } from '@bpd/utils/formatters'
import dayjs from 'dayjs'
import { chain, head } from 'lodash'
import { FREQUENCY_TYPE } from '../constants'

const getLastPeriodHeader = (
  data: TxnByDimension[],
  frequency: string
): string => {
  const uniqueDates = chain(data).map('dt').uniq().value()
  if (uniqueDates.length > 0) {
    const uniqueDate = head(uniqueDates)
    switch (frequency) {
      case FREQUENCY_TYPE.MONTHLY:
        return formatDate(uniqueDate, 'MMM YYYY')
      case FREQUENCY_TYPE.QUARTERLY:
        return `Q${dayjs(uniqueDate).quarter()} ${dayjs(uniqueDate).year()}`
      case FREQUENCY_TYPE.ANNUALLY:
      default:
        return formatDate(uniqueDate, 'YYYY')
    }
  }
  return ''
}

export default getLastPeriodHeader
