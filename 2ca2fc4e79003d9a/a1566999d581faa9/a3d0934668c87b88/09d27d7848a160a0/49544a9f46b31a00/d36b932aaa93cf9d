import dayjs from 'dayjs'
import getFiscalYearStartEndDates from './getFiscalYearStartEndDates'
import { formatDate } from '@bpd/utils/formatters'

const getFiscalYearDates = (
  date: Date | dayjs.Dayjs | string = new Date(),
  dateFormat = 'YYYY'
): { previousFy: string; currentFy: string } => {
  let dateValue: Date

  if (typeof date === 'string') {
    dateValue = new Date(date)
  } else if (dayjs.isDayjs(date)) {
    dateValue = date.toDate()
  } else if (!(date instanceof Date)) {
    throw new Error('Invalid date parameter')
  } else {
    dateValue = date
  }

  const { startDate, endDate } = getFiscalYearStartEndDates(dateValue)

  return {
    previousFy: formatDate(startDate, dateFormat),
    currentFy: formatDate(endDate, dateFormat),
  }
}

export default getFiscalYearDates
