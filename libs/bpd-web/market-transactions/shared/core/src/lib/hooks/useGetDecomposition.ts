import { useAppSelector } from '@bpd/bpd-web/shared/store'
import { MarketTransactionsCartoQueries } from '@bpd/market-transactions/shared/data-access'
import { every, isEmpty } from 'lodash'
import { MarketTransactionsSelectors } from '../data'

interface GetDecomposition {
  companyName: string
  companyCountry: string
  timeframe: number
  dimension: string // 'COUNTRY' | 'SECTOR'
  isNetFlowView: boolean
}

const useGetDecomposition = ({
  isNetFlowView,
  companyName,
  companyCountry,
  dimension,
  timeframe,
}: GetDecomposition) => {
  const useQuery = isNetFlowView
    ? MarketTransactionsCartoQueries.useGetCompanyDecompByNetFlow
    : MarketTransactionsCartoQueries.useGetCompanyDecompByDimension

  const filters = useAppSelector(MarketTransactionsSelectors.getFilters)
  const { countries, sectors } = filters || {}

  return useQuery(
    {
      countries,
      sectors,
      months: timeframe,
      companyName,
      companyCountry,
      dimension,
    },
    { skip: !every([!isEmpty(countries), !isEmpty(sectors)]) }
  )
}

export default useGetDecomposition
