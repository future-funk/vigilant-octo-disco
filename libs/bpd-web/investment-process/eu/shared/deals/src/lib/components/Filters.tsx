import { SUB_TEAMS } from '@bpd/bpd-web/investment-process/eu/shared/core'
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
                    Results: {formatNumber(context?.count)} Deals
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
          label: 'Deal Owner',
          team: TEAMS.EU,
        }),
        {
          key: 'subTeam',
          label: 'Teams',
          items: [
            SUB_TEAMS.UK,
            SUB_TEAMS.FRAGR,
            SUB_TEAMS.TACTICAL,
            SUB_TEAMS.DEBT,
            SUB_TEAMS.OTHER,
          ],
        },
        {
          key: 'status',
          label: 'Deal Status',
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
      ]}
    />
  )
}

export default Filters
