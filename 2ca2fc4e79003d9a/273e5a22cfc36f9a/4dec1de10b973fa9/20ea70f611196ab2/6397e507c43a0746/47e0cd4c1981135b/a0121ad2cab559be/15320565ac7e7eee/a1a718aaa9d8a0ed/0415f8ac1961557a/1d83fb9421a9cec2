import { includes } from 'lodash'
import { TEAMS } from '@bpd/bpd-web/shared/config'

const eligibleTeams = [
  TEAMS.US,
  TEAMS.EU,
  TEAMS.CN,
  TEAMS.KR,
  TEAMS.JP,
  TEAMS.IN,
  TEAMS.ANZ,
]

const getTeamEligibility = (team: string) => {
  if (includes(eligibleTeams, team)) return team
  return null
}

export default getTeamEligibility
