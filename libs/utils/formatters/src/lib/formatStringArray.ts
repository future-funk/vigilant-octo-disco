import { escapeSingleQuoteForSql } from '@bpd/utils/utils'
import { map } from 'lodash'

/**
 * Converts an array of strings to a formatted string array.
 * @param {string[]} stringArray - The array of strings to convert.
 * @returns {string} The formatted string array.
 */
const formatStringArray = (stringArray: string[]): string => {
  if (!stringArray || stringArray.length === 0) {
    return ''
  }

  const formattedArray = map(
    stringArray,
    (str) => `'${escapeSingleQuoteForSql(str)}'`
  )

  return `ARRAY[${formattedArray.join(',')}]`
}

export default formatStringArray
