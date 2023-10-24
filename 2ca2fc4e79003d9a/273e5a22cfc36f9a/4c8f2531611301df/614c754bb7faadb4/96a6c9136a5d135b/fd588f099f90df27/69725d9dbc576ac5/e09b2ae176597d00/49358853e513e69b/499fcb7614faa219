import {
  Filters as CoreFilters,
  InvestmentProcessActions,
} from '@bpd/bpd-web/investment-process/shared/core'
import { STAGES } from '@bpd/bpd-web/shared/core'
import { useAppDispatch } from '@bpd/bpd-web/shared/store'
import { BpdSearchBar } from '@bpd/bpd-web/shared/ui'
import { VINTAGE_OPTIONS } from '../constants'
import { withTheme } from '@bpd/bpd-web/shared/theme'

const StyledBpdSearchBar = withTheme(BpdSearchBar)(({ theme }) => {
  return {
    width: '400px',
  }
})

const Filters = () => {
  const dispatch = useAppDispatch()

  const handleChangeSearch = (search: string) => {
    dispatch(InvestmentProcessActions.addFilter({ search }))
  }

  return (
    <CoreFilters
      search={
        <StyledBpdSearchBar
          placeholder="Enter name"
          label="Search"
          onChange={handleChangeSearch}
        />
      }
      options={[
        {
          key: 'status',
          label: 'Deal Stage',
          items: [
            STAGES.NEW_DEAL_FOR_DISCUSSION,
            STAGES.UNDER_CONSIDERATION,
            STAGES.DEALS_WITH_DQM_APPROVAL,
            STAGES.DEALS_SIGNED,
            STAGES.NO_LONGER_PROCEEDING_STAND_BY,
            STAGES.CLOSED,
            STAGES.DEAD,
          ],
        },
        {
          key: 'vintage',
          label: 'Vintage',
          type: 'SINGLE',
          items: [
            VINTAGE_OPTIONS.SINCE_INCEPTION,
            VINTAGE_OPTIONS.FTYD,
            VINTAGE_OPTIONS.LAST_6_MONTHS,
            VINTAGE_OPTIONS.LAST_1_YEAR,
            VINTAGE_OPTIONS.LAST_2_YEARS,
          ],
        },
      ]}
    />
  )
}

export default Filters
