import { range } from 'lodash'
import getCurrentFiscalYear from './getCurrentFiscalYear'

/**
 * Returns an array of fiscal years from a given starting fiscal year until a given end fiscal year or the current fiscal year.
 *
 * @param startFiscalYear - The starting fiscal year.
 * @param endFiscalYear - Optional ending fiscal year.
 * @returns An array of fiscal years from startFiscalYear until endFiscalYear or current fiscal year.
 * @throws An error if the starting fiscal year is greater than the current fiscal year.
 */
function getFiscalYearIntervals(
  startFiscalYear: number,
  endFiscalYear?: number
): number[] {
  const currentFiscalYear = endFiscalYear ?? getCurrentFiscalYear()

  if (startFiscalYear > currentFiscalYear) {
    throw new Error(
      'Starting fiscal year cannot be greater than current fiscal year.'
    )
  }

  return range(startFiscalYear, currentFiscalYear + 1)
}

export default getFiscalYearIntervals
