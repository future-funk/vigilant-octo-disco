import { chain } from 'lodash'
import { useMemo } from 'react'
import { MvIrrQueries } from '@bpd/mv-irr/shared/data-access'
import {
  getCurrentFiscalYear,
  getFiscalYearDateIntervals,
} from '@bpd/utils/fiscal-year'

const FROM_FY_YEAR = 2021

const getBaseFyItems = (endFy: number) => {
  const dates = getFiscalYearDateIntervals(FROM_FY_YEAR, endFy).reverse()
  return chain(dates)
    .map((date) => ({
      label: `FY${getCurrentFiscalYear(new Date(date))}`,
      value: date,
    }))
    .value()
}

const useGetBaseFilterItems = () => {
  const { data: fyResponsePayload } = MvIrrQueries.useGetEndFy(null)

  const fiscalYearItems = useMemo(() => {
    const { fy: endFy } = fyResponsePayload || {}
    if (!endFy) {
      return null
    }

    return getBaseFyItems(endFy)
  }, [fyResponsePayload])

  return { fiscalYearItems }
}

export default useGetBaseFilterItems
