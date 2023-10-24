import { isNaN, isNil, toString } from 'lodash'

const RELATIVE_SUFFIXES = ['', 'K', 'M', 'B', 'T', 'P', 'E']

/**
 * Formats a number in a relative format.
 *
 * @param {number} value - The number to format.
 * @param {number} decimalPlaces - The number of decimal places to display (optional, defaults to 0).
 * @returns {string} The formatted number as a string, or an empty string if the value is null or undefined, or the original value if it's not a number.
 */
const formatRelativeNumber = (value: number, decimalPlaces = 0): string => {
  if (isNil(value)) {
    return ''
  }

  if (isNaN(Number(value))) {
    return toString(value)
  }

  const sign = Math.sign(value)
  const absValue = Math.abs(value)

  if (absValue < 1000) {
    return (sign * value).toFixed(decimalPlaces)
  }

  const suffixIndex = Math.floor(Math.log10(absValue) / 3)
  const scaledValue = absValue / Math.pow(10, suffixIndex * 3)

  const formattedValue = (sign * scaledValue).toFixed(decimalPlaces)

  return `${formattedValue}${RELATIVE_SUFFIXES[suffixIndex]}`
}

export default formatRelativeNumber
