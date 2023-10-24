import { isNil } from 'lodash'
import formatNumber from './formatNumber'

const MILLION = 1000000

/**
 * Formats a number in millions and an optional "M" suffix.
 *
 * @param {number} value - The number to format (required).
 * @param {number} decimalPlaces - The number of decimal places to display (optional, defaults to 0).
 * @param {boolean} showM - Whether or not to display the "M" suffix (optional, defaults to true).
 * @returns {string} The formatted number as string and an optional "M" suffix.
 */
const formatNumberInMillions = (
  value: number,
  decimalPlaces = 0,
  showM = true
): string => {
  if (isNil(value)) return value

  const millionNum = value / MILLION
  const formattedNumber = formatNumber(millionNum, decimalPlaces)

  return showM ? `${formattedNumber} M` : formattedNumber
}

export default formatNumberInMillions
