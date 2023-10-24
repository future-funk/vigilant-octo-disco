import { TEAMS } from '@bpd/bpd-web/shared/config'
import { Team } from '@bpd/bpd-web/shared/data-access'
import { EU_STATUSES, US_STATUSES } from '../constants'
import { isNil } from 'lodash'

const getStatusFromTeam = (team: Team) => {
  if (isNil(team)) return []
  switch (team) {
    case TEAMS.US:
      return US_STATUSES
    case TEAMS.EU:
    default:
      return EU_STATUSES
  }
}

export default getStatusFromTeam
