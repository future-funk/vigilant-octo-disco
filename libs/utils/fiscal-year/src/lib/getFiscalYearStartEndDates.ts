import dayjs from "dayjs"
import objectSupport from 'dayjs/plugin/objectSupport'

dayjs.extend(objectSupport)

/**
 * Returns the start and end dates of the current fiscal year.
 * @param {Date|dayjs.Dayjs} [date=new Date()] - Optional date object to use instead of the current date.
 * @returns {{startDate: dayjs.Dayjs, endDate: dayjs.Dayjs}} - Object containing the start and end dates of the fiscal year.
 * @throws {Error} - Throws an error if the input date is invalid.
 */
const getFiscalYearStartEndDates = (
  date: Date | dayjs.Dayjs = new Date()
): { startDate: dayjs.Dayjs; endDate: dayjs.Dayjs } => {
  if (!(date instanceof Date) && !dayjs.isDayjs(date)) {
    throw new Error('Invalid date input')
  }

  const currentDate = dayjs(date)
  const fiscalYearStartMonth = 3
  const fiscalYearStartDate = dayjs({
    year: currentDate.year(),
    month: fiscalYearStartMonth,
    day: 1,
  })

  if (currentDate.isBefore(fiscalYearStartDate)) {
    fiscalYearStartDate.subtract(1, 'year')
  }

  const fiscalYearEndDate = fiscalYearStartDate
    .add(1, 'year')
    .subtract(1, 'day')

  return { startDate: fiscalYearStartDate, endDate: fiscalYearEndDate }
}

export default getFiscalYearStartEndDates
