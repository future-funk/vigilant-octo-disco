import type { NumberFormatOptions } from './formatCurrency'
import { isNaN, isNil, toString } from 'lodash'

/**
 * Formats a number with decimal places.
 *
 * @param value - The number to format (required).
 * @param decimalPlaces - The number of decimal places to display (optional, defaults to 0).
 * @returns The formatted number as a string, or an empty string if the value is null or undefined, or the original value if it's not a number.
 */
const formatNumber = (
  value: number,
  decimalPlaces = 0,
  otherOptions?: NumberFormatOptions
): string => {
  if (isNil(value)) {
    return ''
  }

  if (isNaN(Number(value))) {
    return toString(value)
  }

  const formatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: decimalPlaces,
    ...otherOptions,
  })

  return formatter.format(value)
}

export default formatNumber
