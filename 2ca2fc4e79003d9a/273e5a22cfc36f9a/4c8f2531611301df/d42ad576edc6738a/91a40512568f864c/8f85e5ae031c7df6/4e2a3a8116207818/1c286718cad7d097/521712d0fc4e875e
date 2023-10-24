import {
  DealDto,
  GetDealsPayload,
  api,
  queries,
} from '@bpd/bpd-web/investment-process/shared/data-access'
import {
  updateBlueprintApiQueryData,
  useAppDispatch,
  useAppSelector,
} from '@bpd/bpd-web/shared/store'
import { find, includes, isEqual, map, merge } from 'lodash'
import { InvestmentProcessSelectors } from '../data'

const useUpdateDeals = () => {
  const getDealsEndpointName = api.endpoints.getDeals.name

  const dispatch = useAppDispatch()

  const originalDealsArgs = useAppSelector(
    InvestmentProcessSelectors.getGetDealsArgs
  )

  const [trigger, { isLoading }] = queries.useLazyGetDeals()

  const updatedArgs: GetDealsPayload = merge({}, originalDealsArgs, {
    url: {
      lastUpdatedIn: 180,
    },
  })

  const updateDeals = async () => {
    const { data: updatedDeals } = await trigger(updatedArgs)
    const updatedDealsIds = map(updatedDeals, 'id')

    // Update deals
    dispatch(
      updateBlueprintApiQueryData(
        getDealsEndpointName as never,
        originalDealsArgs as never,
        (deals?: DealDto[]) => {
          return map(deals, (deal) => {
            return includes(updatedDealsIds, deal.id)
              ? find(updatedDeals, (updatedDeal) =>
                  isEqual(updatedDeal.id, deal.id)
                )
              : deal
          })
        }
      )
    )
  }

  return { updateDeals, isLoading }
}

export default useUpdateDeals
