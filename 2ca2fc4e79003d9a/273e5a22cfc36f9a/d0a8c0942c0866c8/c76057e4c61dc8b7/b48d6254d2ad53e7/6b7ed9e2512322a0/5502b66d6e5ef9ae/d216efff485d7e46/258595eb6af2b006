import { useAppSelector } from '@bpd/bpd-web/shared/store'
import { MarketTransactionsCartoQueries } from '@bpd/market-transactions/shared/data-access'
import { every, isEmpty } from 'lodash'
import { MarketTransactionsSelectors } from '../data'

interface GetBuyersSellers {
  timeframe: number
  search: string | null
}

const useGetTopCompanies = ({ timeframe, search }: GetBuyersSellers) => {
  const filters = useAppSelector(MarketTransactionsSelectors.getFilters)
  const { countries, sectors } = filters || {}

  return MarketTransactionsCartoQueries.useGetCompanies(
    {
      countries,
      sectors,
      txn_type: null,
      is_gross: null,
      n_mths: timeframe,
      n_top: 1000000,
      search: search || null,
    },
    {
      skip: !every([!isEmpty(sectors), !isEmpty(countries)]),
    }
  )
}

export default useGetTopCompanies
