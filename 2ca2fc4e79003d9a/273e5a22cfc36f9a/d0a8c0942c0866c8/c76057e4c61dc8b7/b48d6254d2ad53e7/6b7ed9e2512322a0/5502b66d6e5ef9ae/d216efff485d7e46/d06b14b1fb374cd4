import { useAppSelector } from '@bpd/bpd-web/shared/store'
import { MarketTransactionsCartoQueries } from '@bpd/market-transactions/shared/data-access'
import { every, isEmpty } from 'lodash'
import { BUYERS_SELLERS } from '../constants'
import { MarketTransactionsSelectors } from '../data'

const { TOP_NET_BUYERS, TOP_BUYERS, TOP_SELLERS } = BUYERS_SELLERS

interface GetBuyersSellers {
  buyersSellersType: string
  timeframe: number
}

const useGetBuyersSellers = ({
  buyersSellersType,
  timeframe,
}: GetBuyersSellers) => {
  const filters = useAppSelector(MarketTransactionsSelectors.getFilters)
  const { countries, sectors } = filters || {}

  return MarketTransactionsCartoQueries.useGetCompanies(
    {
      countries,
      sectors,
      txn_type: [TOP_NET_BUYERS, TOP_BUYERS].includes(buyersSellersType)
        ? 'BUY'
        : 'SELL',
      is_gross: [TOP_BUYERS, TOP_SELLERS].includes(buyersSellersType),
      n_mths: timeframe,
      n_top: 20,
    },
    {
      skip: !every([!isEmpty(sectors), !isEmpty(countries)]),
    }
  )
}

export default useGetBuyersSellers
