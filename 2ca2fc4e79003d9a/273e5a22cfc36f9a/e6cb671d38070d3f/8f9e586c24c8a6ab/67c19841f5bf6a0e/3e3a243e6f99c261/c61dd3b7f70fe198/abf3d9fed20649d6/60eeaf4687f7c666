import { GLOBAL_TEAM, TEAMS } from '@bpd/bpd-web/shared/config'
import { entries, find, isEqual, lowerCase, toLower } from 'lodash'

const getTeamFromLandingDiv = (landingDiv: string) => {
  if (isEqual(lowerCase(landingDiv), TEAMS.GLOBAL)) {
    return GLOBAL_TEAM
  }
  const team = find(entries(TEAMS), ([key, value]) => {
    return isEqual(value, toLower(landingDiv))
  })?.[1]
  return team ?? null
}

export default getTeamFromLandingDiv
