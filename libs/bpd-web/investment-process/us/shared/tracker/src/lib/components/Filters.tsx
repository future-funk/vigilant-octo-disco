import {
  Filters as CoreFilters,
  TableSearch,
  useGetStaffImsFilter,
} from '@bpd/bpd-web/investment-process/shared/core'
import { TEAMS } from '@bpd/bpd-web/shared/config'
import { STAGES } from '@bpd/bpd-web/shared/core'
import { formatNumber } from '@bpd/utils/formatters'
import { Stack, Typography } from '@gic/battlefield-ui-pack'
import { Fragment } from 'react'

const Filters = () => {
  return (
    <CoreFilters
      search={
        <TableSearch
          label={(context) => (
            <Stack direction="row" spacing={2}>
              <Typography variant="body2">Search</Typography>
              {context?.count ? (
                <>
                  <Typography variant="body2" color="text.result">
                    |
                  </Typography>
                  <Typography variant="body2" color="text.result">
                    Results: {formatNumber(context?.count)} Projects
                  </Typography>
                </>
              ) : (
                <Fragment />
              )}
            </Stack>
          )}
        />
      }
      options={[
        useGetStaffImsFilter({
          key: 'normalizedStaffs',
          label: 'Project Owner',
          team: TEAMS.US,
        }),
        {
          key: 'status',
          label: 'Project Status',
          items: [
            STAGES.ONGOING,
            STAGES.RECURRING,
            STAGES.ON_HOLD,
            STAGES.COMPLETED,
            STAGES.STOPPED,
          ],
        },
      ]}
    />
  )
}

export default Filters
