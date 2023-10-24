import { chain, range } from 'lodash'
import dayjs from 'dayjs'
import getCurrentFiscalYear from './getCurrentFiscalYear'

/**
 * Returns an array of fiscal year date intervals between startFiscalYear and endFiscalYear
 * @param startFiscalYear - The start fiscal year
 * @param endFiscalYear - Optional ending fiscal year.
 * @returns An array of fiscal year date intervals
 */
const getFiscalYearDateIntervals = (
  startFiscalYear: number,
  endFiscalYear?: number
): string[] => {
  const currentFiscalYear = endFiscalYear ?? getCurrentFiscalYear()

  if (startFiscalYear > currentFiscalYear) {
    throw new Error(
      'Starting fiscal year cannot be greater than ending fiscal year.'
    )
  }

  // Loop through the fiscal years and add the April 1st date to the array
  return chain(range(startFiscalYear, currentFiscalYear))
    .map((year) => dayjs(`${year}-04-01`).format('YYYY-MM-DD'))
    .value()
}

export default getFiscalYearDateIntervals
