import { DealsDto } from '@bpd/bpd-web/investment-process/shared/data-access'
import { UseConnectedQueryArgs } from '@bpd/bpd-web/shared/core'
import { useAppSelector } from '@bpd/bpd-web/shared/store'
import { MyWorkspaceSelectors } from '../data'
import { isEqual } from 'lodash'
import { MY_DEALS_ITEM_KEY } from '../constants'

const useGetGetDealsArgs = () => {
  const dealOverviewSelectValue = useAppSelector(
    MyWorkspaceSelectors.getDealOverviewSelectValue
  )

  const args: UseConnectedQueryArgs<DealsDto, any> = {
    filter: {
      server: [
        ...(isEqual(dealOverviewSelectValue, MY_DEALS_ITEM_KEY)
          ? [{ field: 'ntid', get: 'ntid' }]
          : []),
        {
          field: 'status',
          get: 'status',
        },
        {
          field: 'team',
          get: 'team',
        },
        {
          field: 'vintageDtFrom',
          get: 'vintageDtFrom',
        },
        {
          field: 'vintageDtTo',
          get: 'vintageDtTo',
        },
        {
          field: 'category',
          get: 'category',
        },
      ],
      client: [
        {
          field: 'status',
          get: 'dealStatus',
        },
      ],
    },
  }

  return { args }
}

export default useGetGetDealsArgs
