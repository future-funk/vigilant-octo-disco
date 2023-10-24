import { useAppSelector } from '@bpd/bpd-web/shared/store'
import { MarketTransactionsCartoQueries } from '@bpd/market-transactions/shared/data-access'
import { every, isEmpty } from 'lodash'
import { MarketTransactionsSelectors } from '../data'

const useGetOverviewByDimension = (dimension: string) => {
  const filters = useAppSelector(MarketTransactionsSelectors.getFilters)
  const { countries, sectors } = filters || {}

  return MarketTransactionsCartoQueries.useGetOverviewByDimension(
    { countries, sectors, dimension },
    {
      skip: !every([dimension, !isEmpty(sectors), !isEmpty(countries)]),
    }
  )
}

export default useGetOverviewByDimension
