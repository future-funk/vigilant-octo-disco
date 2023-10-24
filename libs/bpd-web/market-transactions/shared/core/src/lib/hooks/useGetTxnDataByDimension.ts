import { useAppSelector } from '@bpd/bpd-web/shared/store'
import {
  GetTxnByDimensionResult,
  GetYtdTxnByDimensionResult,
  MarketTransactionsCartoQueries,
} from '@bpd/market-transactions/shared/data-access'
import { every, isEmpty } from 'lodash'
import { MarketTransactionsSelectors } from '../data'

interface GetTxnByDimensionParams {
  dimension: string
  frequency: string
}

interface GetTxnByDimension {
  txnData: GetTxnByDimensionResult
  ytdData: GetYtdTxnByDimensionResult
  isFetching: boolean
  isError: boolean
}

const useGetTxnDataByDimension = ({
  dimension,
  frequency,
}: GetTxnByDimensionParams): GetTxnByDimension => {
  const filters = useAppSelector(MarketTransactionsSelectors.getFilters)
  const { countries, sectors } = filters || {}

  const {
    data: txnData,
    isFetching: isTxnFetching,
    isError: isTxnError,
  } = MarketTransactionsCartoQueries.useGetTxnByDimension(
    { countries, sectors, dimension, frequency },
    {
      skip: !every([
        dimension,
        frequency,
        !isEmpty(sectors),
        !isEmpty(countries),
      ]),
    }
  )

  const {
    data: ytdData,
    isFetching: isYtdFetching,
    isError: isYtdError,
  } = MarketTransactionsCartoQueries.useGetYtdTxnByDimension(
    { countries, sectors, dimension },
    {
      skip: !every([dimension, !isEmpty(sectors), !isEmpty(countries)]),
    }
  )

  return {
    txnData,
    ytdData,
    isFetching: isYtdFetching || isTxnFetching,
    isError: isTxnError || isYtdError,
  }
}

export default useGetTxnDataByDimension
