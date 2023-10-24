import {
  CATEGORIES,
  InvestmentProcessActions,
  InvestmentProcessSelectors,
  useGetDeals,
} from '@bpd/bpd-web/investment-process/shared/core'
import { DealsDto } from '@bpd/bpd-web/investment-process/shared/data-access'
import { DEAL_STATUS, STAGES } from '@bpd/bpd-web/shared/core'
import { useAppDispatch, useAppSelector } from '@bpd/bpd-web/shared/store'
import {
  BpdPeopleDetailCardStatusBar,
  BpdPeopleDetailCardStatusBarItem,
} from '@bpd/bpd-web/shared/ui'
import { formatRelativeNumber } from '@bpd/utils/formatters'
import {
  filter,
  flatMap,
  get,
  isEqual,
  isNil,
  mapValues,
  omit,
  size,
  sumBy,
  toPairs,
} from 'lodash'
import { FC } from 'react'

const DEAL_STATUS_GROUPING: Record<string, string[]> = {
  [DEAL_STATUS.NEW_DEAL_FOR_DISCUSSION]: [STAGES.NEW_DEAL_FOR_DISCUSSION],
  [DEAL_STATUS.IN_PROGRESS]: [
    STAGES.UNDER_CONSIDERATION,
    STAGES.ONGOING,
    STAGES.ON_HOLD,
  ],
  [DEAL_STATUS.APPROVED]: [STAGES.UNDER_CONSIDERATION_APPROVED],
  [DEAL_STATUS.CLOSED_FYTD]: [STAGES.CLOSED, STAGES.COMPLETED],
}

export interface DetailStatusBarProps {
  data?: DealsDto
}

const DetailStatusBar: FC<DetailStatusBarProps> = (props) => {
  const { data: injectedData } = props
  const dispatch = useAppDispatch()

  const ntid = useAppSelector(InvestmentProcessSelectors.getStaff)
  const filters = useAppSelector(InvestmentProcessSelectors.getFilters)

  const { data } = useGetDeals(
    {
      filter: {
        server: [
          {
            field: 'category',
            value: [
              CATEGORIES.DEAL,
              CATEGORIES.PROJECT,
              CATEGORIES.RESEARCH,
              CATEGORIES.STRATS,
            ],
          },
          { field: 'ntid', value: ntid },
          { field: 'status', get: 'status' },
        ],
      },
    },
    { skip: !ntid || !isNil(injectedData) }
  )

  const dealsByStatus = mapValues(DEAL_STATUS_GROUPING, (statuses) =>
    filter(injectedData ?? data, ({ status }) => {
      return statuses.includes(status)
    })
  )

  const items = toPairs(dealsByStatus).reduce(
    (items, [title, deals]) => [
      ...items,
      {
        title,
        key: title,
        value: deals.length,
        extra: formatRelativeNumber(sumBy(deals, 'necUsd')),
      },
    ],
    [] as BpdPeopleDetailCardStatusBarItem[]
  )

  const handleChange = (statusBarItems: BpdPeopleDetailCardStatusBarItem[]) => {
    // Handle reset
    if (isEqual(size(statusBarItems), size(items))) {
      dispatch(InvestmentProcessActions.setFilters(omit(filters, 'dealStatus')))
    } else {
      const dealStatus = flatMap(statusBarItems, ({ key }) =>
        get(DEAL_STATUS_GROUPING, key)
      )
      dispatch(InvestmentProcessActions.addFilter({ dealStatus }))
    }
  }

  return <BpdPeopleDetailCardStatusBar items={items} onChange={handleChange} />
}

export default DetailStatusBar
