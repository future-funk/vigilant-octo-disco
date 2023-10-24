import { COLUMN_DEFS as EU_COLUMN_DEFS } from '@bpd/bpd-web/investment-process/eu/shared/people'
import { COLUMN_DEFS as US_COLUMN_DEFS } from '@bpd/bpd-web/investment-process/us/shared/people'
import { TEAMS } from '@bpd/bpd-web/shared/config'
import { Team } from '@bpd/bpd-web/shared/data-access'
import { isEqual } from 'lodash'

const getColumnDefs = (team: Team) => {
  return isEqual(team, TEAMS.EU) ? EU_COLUMN_DEFS : US_COLUMN_DEFS
}

export default getColumnDefs
