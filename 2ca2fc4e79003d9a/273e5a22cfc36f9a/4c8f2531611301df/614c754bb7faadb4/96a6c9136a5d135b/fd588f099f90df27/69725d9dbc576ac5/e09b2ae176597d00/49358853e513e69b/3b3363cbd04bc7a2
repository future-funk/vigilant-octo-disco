import {
  CATEGORIES,
  InvestmentProcessActions,
  InvestmentProcessSelectors,
  useGetDeals,
} from '@bpd/bpd-web/investment-process/shared/core'
import { DealsDto } from '@bpd/bpd-web/investment-process/shared/data-access'
import { TEAMS } from '@bpd/bpd-web/shared/config'
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

const STATUSES = {
  [DEAL_STATUS.NEW_DEAL_FOR_DISCUSSION]: [STAGES.NEW_DEAL_FOR_DISCUSSION],
  [DEAL_STATUS.IN_PROGRESS]: [
    STAGES.UNDER_CONSIDERATION,
    STAGES.DEALS_SIGNED,
    STAGES.ONGOING,
    STAGES.NO_LONGER_PROCEEDING_STAND_BY,
    STAGES.ON_HOLD,
  ],
  [DEAL_STATUS.APPROVED]: [STAGES.DEALS_WITH_DQM_APPROVAL],
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
          { field: 'team', value: TEAMS.EU },
          {
            field: 'status',
            get: 'status',
          },
        ],
      },
    },
    { skip: !ntid || !isNil(injectedData) }
  )

  const dealsByStatus = mapValues(STATUSES, (statuses) =>
    filter(injectedData ?? data, ({ status }) => statuses.includes(status))
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
    // If reset filter
    if (isEqual(size(statusBarItems), size(items))) {
      dispatch(InvestmentProcessActions.setFilters(omit(filters, 'dealStatus')))
    } else {
      const dealStatus = flatMap(statusBarItems, ({ key }) =>
        get(STATUSES, key)
      )
      dispatch(InvestmentProcessActions.addFilter({ dealStatus }))
    }
  }

  return <BpdPeopleDetailCardStatusBar items={items} onChange={handleChange} />
}

export default DetailStatusBar
