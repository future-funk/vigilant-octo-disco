import { ShareAltOutlined } from '@ant-design/icons'
import { useBPAuthz } from '@bpd/auth-authorization'
import { useGetDeals } from '@bpd/bpd-web/investment-process/shared/core'
import { ROUTES } from '@bpd/bpd-web/shared/config'
import { Table as CoreTable } from '@bpd/bpd-web/shared/core'
import { Team } from '@bpd/bpd-web/shared/data-access'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { BpdLink, BpdSpinner } from '@bpd/bpd-web/shared/ui'
import { Stack } from '@gic/battlefield-ui-pack'
import { FC, Fragment, useState } from 'react'
import { generatePath, useNavigate } from 'react-router-dom'
import { DEFAULT_COLUMN_DEFS } from '../../constants'
import { getColumnDefs } from '../../utils'
import getTeamFromLandingDiv from '../../utils/getTeamFromLandingDiv'
import WorkspaceTitle from '../WorkspaceTitle'
import DealOverviewSelect from './DealOverviewSelect'
import { useGetGetDealsArgs } from '../../hooks'
import DealOverviewStatusBar from './DealOverviewStatusBar'

const StyledStack = withTheme(Stack)(({ theme }) => {
  return {
    borderRadius: 4,
    background: theme.palette.common.white,
    padding: theme.spacing(3),
    gap: theme.spacing(2),
    // TODO: Remove once other modules are added
    height: '83.5vh',
  }
})

export const DealOverview: FC = () => {
  const user = useBPAuthz()
  const { landingDiv } = user
  const team = getTeamFromLandingDiv(landingDiv)

  const [isFetching, setIsFetching] = useState<boolean>(false)

  const navigate = useNavigate()

  const { args } = useGetGetDealsArgs()

  const handleFetching = (isFetching: boolean) => {
    setIsFetching(isFetching)
  }

  return (
    <Stack spacing={2}>
      {/* Title */}
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" spacing={2} alignItems="center">
          <WorkspaceTitle title="Deal Overview" icon={<ShareAltOutlined />} />
          <DealOverviewSelect />
          {isFetching ? <BpdSpinner /> : <Fragment />}
        </Stack>
        <BpdLink
          title="View More"
          onClick={() =>
            navigate(
              generatePath(`${ROUTES.INVESTMENT_PROCESS.BASE}/${team}/deals`)
            )
          }
        />
      </Stack>
      {/* Table */}
      <StyledStack>
        <DealOverviewStatusBar />
        <CoreTable
          columnDefs={getColumnDefs(team as Team)}
          defaultColDef={DEFAULT_COLUMN_DEFS}
          dataSource={{
            useQuery: useGetDeals,
            args,
          }}
          onFetch={handleFetching}
        />
      </StyledStack>
    </Stack>
  )
}

export default DealOverview
