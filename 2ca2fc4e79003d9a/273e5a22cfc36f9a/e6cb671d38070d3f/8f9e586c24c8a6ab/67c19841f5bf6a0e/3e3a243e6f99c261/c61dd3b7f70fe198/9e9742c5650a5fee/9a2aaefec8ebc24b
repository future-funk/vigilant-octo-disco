import { chain } from 'lodash'

const AMERICAS = { key: 'us', label: 'Americas' }
const EUROPE = { key: 'eu', label: 'Europe' }
const CHINA = { key: 'cn', label: 'China' }
const ASIG = { key: 'asig', label: 'ASIG' }
const KOREA = { key: 'kr', label: 'Korea' }
const JAPAN = { key: 'jp', label: 'Japan' }
const INDIA = { key: 'in', label: 'India' }
const ANZ = { key: 'anz', label: 'ANZ' }

export const MGMT_TEAM = {
  AMERICAS,
  EUROPE,
  CHINA,
  ASIG,
  KOREA,
  JAPAN,
  INDIA,
  ANZ,
}

export const MGMT_TEAM_OPTIONS = chain(MGMT_TEAM)
  .values()
  .map((team) => ({ ...team, value: team.key }))
  .value()
