import dayjs from 'dayjs'
import getFiscalYearStartEndDates from './getFiscalYearStartEndDates'

/**
 * Returns the previous fiscal year.
 * @param {Date|dayjs.Dayjs} [date=new Date()] - Optional date object to use instead of the current date.
 * @returns {dayjs.Dayjs} - The previous fiscal year.
 */
const getPreviousFiscalYear = (
  date: Date | dayjs.Dayjs = new Date()
): number => {
  const { startDate } = getFiscalYearStartEndDates(date)
  return startDate.year()
}

export default getPreviousFiscalYear
