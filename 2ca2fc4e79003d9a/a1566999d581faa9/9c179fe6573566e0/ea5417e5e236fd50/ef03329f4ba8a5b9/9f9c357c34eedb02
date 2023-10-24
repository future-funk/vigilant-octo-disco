import { isNaN, isNil, toString } from 'lodash'

/**
 * Formats a number as a percentage.
 *
 * @param value The number to format as a percentage.
 * @param decimalPlaces The number of decimal places to display (optional, defaults to 1).
 * @returns The formatted percentage as a string, or an empty string if the value is null or undefined, or the original value if it's not a number.
 */
const formatPercent = (value: number, decimalPlaces = 1): string => {
  if (isNil(value)) {
    return ''
  }

  if (isNaN(Number(value))) {
    return toString(value)
  }

  const formatter = new Intl.NumberFormat('en', {
    style: 'percent',
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  })

  return formatter.format(value)
}

export default formatPercent
