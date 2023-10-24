import { useAppSelector } from '@bpd/bpd-web/shared/store'
import { MarketTransactionsCartoQueries } from '@bpd/market-transactions/shared/data-access'
import { every, isEmpty } from 'lodash'
import { MarketTransactionsSelectors } from '../data'

interface GetCompanyTxns {
  companyName: string
  companyCountry: string
  timeframe: number
}

const useGetCompanyTxns = ({
  companyName,
  companyCountry,
  timeframe,
}: GetCompanyTxns) => {
  const filters = useAppSelector(MarketTransactionsSelectors.getFilters)
  const { countries, sectors } = filters || {}

  return MarketTransactionsCartoQueries.useGetCompanyTxns(
    {
      countries,
      sectors,
      months: timeframe,
      companyName,
      companyCountry,
    },
    { skip: !every([!isEmpty(countries), !isEmpty(sectors)]) }
  )
}

export default useGetCompanyTxns
