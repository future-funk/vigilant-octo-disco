import dayjs from 'dayjs'
import getFiscalYearStartEndDates from './getFiscalYearStartEndDates'

/**
 * Returns the current fiscal year.
 * @param {Date|dayjs.Dayjs} [date=new Date()] - Optional date object to use instead of the current date.
 * @returns {number} - The current fiscal year.
 */
const getCurrentFiscalYear = (
  date: Date | dayjs.Dayjs = new Date()
): number => {
  const { endDate } = getFiscalYearStartEndDates(date)
  return endDate.year()
}

export default getCurrentFiscalYear
