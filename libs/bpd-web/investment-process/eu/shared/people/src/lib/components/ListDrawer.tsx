import { useBPAuthz } from '@bpd/auth-authorization'
import {
  InvestmentProcessActions,
  InvestmentProcessSelectors,
} from '@bpd/bpd-web/investment-process/shared/core'
import { useAppDispatch, useAppSelector } from '@bpd/bpd-web/shared/store'
import {
  BpdPeopleListCard,
  BpdSortSelect,
  SortConfig,
} from '@bpd/bpd-web/shared/ui'
import { useOnTruthy } from '@bpd/ui/hooks'
import { Stack, Typography } from '@gic/battlefield-ui-pack'
import { chain, first, get, omit } from 'lodash'
import { STAFF_SORTING } from '../constants'
import { useGetStaffReports } from '../hooks'
import DataList from './DataList'
import { getAvatarUrl } from '@bpd/bpd-web/shared/core'

const ListDrawer = () => {
  const dispatch = useAppDispatch()

  const staff = useAppSelector(InvestmentProcessSelectors.getStaff)

  const sort = useAppSelector(InvestmentProcessSelectors.getSort)

  const filters = useAppSelector(InvestmentProcessSelectors.getFilters)

  const user = useBPAuthz()

  const { data, isSuccess } = useGetStaffReports()

  const handleClickStaff = (id: string) => {
    dispatch(InvestmentProcessActions.setStaff(id))

    // Reset filter
    dispatch(InvestmentProcessActions.setFilters(omit(filters, 'dealStatus')))
  }

  const handleSelectSort = (config: SortConfig) =>
    dispatch(InvestmentProcessActions.setSort(config))

  useOnTruthy(() => {
    const nextId = chain(data)
      .find({ ntid: user?.ntid })
      .get('ntid')
      .defaultTo(get(first(data), 'ntid'))
      .value()

    dispatch(InvestmentProcessActions.setStaff(nextId))
  }, [isSuccess])

  return (
    <Stack
      bgcolor="common.white"
      borderRight={1}
      borderColor={'null.border'}
      flexBasis={300}
    >
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        bgcolor="common.white"
        borderBottom="3px solid"
        borderColor="null.border"
        px={2}
        py={2.5}
      >
        <Typography variant="subtitle2">People</Typography>
        <BpdSortSelect
          value={sort}
          options={STAFF_SORTING}
          onSelect={handleSelectSort}
        />
      </Stack>
      <DataList
        active={(item) => staff === item.ntid}
        key="ntid"
        onClick={(item) => handleClickStaff(item.ntid)}
        renderItem={(item) => (
          <BpdPeopleListCard
            key={item.ntid}
            deals={item.totalCount}
            name={item.name}
            utilPercentage={item.commitmentHoursPercentage * 100}
            src={getAvatarUrl(item.ntid)}
            sx={{ p: 2 }}
          />
        )}
        useQuery={useGetStaffReports}
      />
    </Stack>
  )
}

export default ListDrawer
