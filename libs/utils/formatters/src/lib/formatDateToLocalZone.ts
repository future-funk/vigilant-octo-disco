import * as dayjs from 'dayjs'
import * as utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

/**
 * Formats the date to the local time zone
 *
 * @param {string | Date} value - The date string or Date object to format
 * @param {string} [dateFormat='DD MMM YYYY'] - The format of the date string
 * @returns {string} - The formatted date string or empty string if value is null or undefined
 */
const formatDateToLocalZone = (
  value: string | Date,
  dateFormat = 'DD MMM YYYY'
): string => {
  if (!value) {
    return ''
  }

  try {
    const date = dayjs.utc(value).local()
    if (!date.isValid()) {
      throw new Error('Invalid date')
    }
    return date.format(dateFormat)
  } catch (error) {
    console.error(error)
    return ''
  }
}

export default formatDateToLocalZone
