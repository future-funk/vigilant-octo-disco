import { useBPAuthz } from '@bpd/auth-authorization'
import getTeamFromLandingDiv from '../utils/getTeamFromLandingDiv'
import dayjs from 'dayjs'
import getStatusFromTeam from '../utils/getStatusFromTeam'
import { Team } from '@bpd/bpd-web/shared/data-access'

const useGetInvestmentProcessDefaultState = () => {
  const user = useBPAuthz()
  const { ntid, landingDiv } = user
  const team = getTeamFromLandingDiv(landingDiv)

  // Vintage
  const today = dayjs().format('YYYY-MM-DD')
  const oneYearFromToday = dayjs().subtract(365, 'day').format('YYYY-MM-DD')

  const defaultState = {
    filters: {
      status: getStatusFromTeam(team as Team),
      ntid,
      team,
      vintageDtFrom: oneYearFromToday,
      vintageDtTo: today,
      category: 'deal',
    },
    staff: ntid,
  }

  return { defaultState }
}

export default useGetInvestmentProcessDefaultState
