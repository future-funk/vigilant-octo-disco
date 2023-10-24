import { useAppSelector } from '@bpd/bpd-web/shared/store'
import { MarketTransactionsCartoQueries } from '@bpd/market-transactions/shared/data-access'
import { every, isEmpty } from 'lodash'
import { MarketTransactionsSelectors } from '../data'
import { TopSalesParams } from '../types'
import { getIsPortfolioSales } from '../utils'

const useGetTopSales = (topSalesParams: TopSalesParams) => {
  const { topN, salesType, timeframe: n_mths } = topSalesParams

  const filters = useAppSelector(MarketTransactionsSelectors.getFilters)
  const { countries, sectors } = filters || {}

  return MarketTransactionsCartoQueries.useGetTopSales(
    {
      countries,
      sectors,
      is_portfolio: getIsPortfolioSales(salesType),
      n_mths,
      n_top: topN,
    },
    {
      skip: !every([n_mths, !isEmpty(sectors), !isEmpty(countries)]),
    }
  )
}

export default useGetTopSales
