import { FC } from 'react'
import { DetailStatusBar as UsDetailStatusBar } from '@bpd/bpd-web/investment-process/us/shared/people'
import { DetailStatusBar as EuDetailStatusBar } from '@bpd/bpd-web/investment-process/eu/shared/people'
import { useBPAuthz } from '@bpd/auth-authorization'
import getTeamFromLandingDiv from '../../utils/getTeamFromLandingDiv'
import { useGetDeals } from '@bpd/bpd-web/investment-process/shared/core'
import { useGetGetDealsArgs } from '../../hooks'
import { isEqual, omit } from 'lodash'
import { TEAMS } from '@bpd/bpd-web/shared/config'

export interface DealOverviewStatusBarProps {}

export const DealOverviewStatusBar: FC<DealOverviewStatusBarProps> = (
  props
) => {
  const { landingDiv } = useBPAuthz()
  const team = getTeamFromLandingDiv(landingDiv)
  const { args } = useGetGetDealsArgs()
  const { data } = useGetDeals(omit(args, 'filter.client'))

  return isEqual(team, TEAMS.EU) ? (
    <EuDetailStatusBar data={data} />
  ) : (
    <UsDetailStatusBar data={data} />
  )
}

export default DealOverviewStatusBar
