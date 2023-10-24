import {
  GetDealsPayload,
  GetDealsResult,
  queries,
} from '@bpd/bpd-web/investment-process/shared/data-access'
import { QueryOptions } from '@bpd/bpd-web/shared/data-access'
import { isNil, merge } from 'lodash'
import { InvestmentProcessActions, InvestmentProcessSelectors } from '../data'
import {
  UseConnectedQueryArgs,
  useConnectedQuery,
  useTransformArgs,
} from '@bpd/bpd-web/shared/core'
import { useAppDispatch } from '@bpd/bpd-web/shared/store'
import { useEffect } from 'react'

export type UseGetDealsProps = UseConnectedQueryArgs<
  GetDealsResult,
  GetDealsPayload
>

const useGetDeals = (props: UseGetDealsProps, options?: QueryOptions) => {
  const dispatch = useAppDispatch()

  const args = merge(
    {},
    { filter: { selector: InvestmentProcessSelectors.getFilters } },
    props
  )

  const { transformedArgs } = useTransformArgs({ filter: args?.filter })

  useEffect(() => {
    if (!isNil(transformedArgs)) {
      dispatch(InvestmentProcessActions.setGetDealsArgs(transformedArgs))
    }
  }, [transformedArgs])

  return useConnectedQuery<GetDealsResult, GetDealsPayload>({
    useQuery: queries.useGetDeals,
    args,
    options,
  })
}

export default useGetDeals
