import { chain } from 'lodash'

const AMERICAS = 'Americas'
const EUROPE = 'Europe'
const CHINA = 'China'
const ASIG = 'ASIG'
const KOREA = 'Korea'
const JAPAN = 'Japan'
const INDIA = 'India'
const ANZ = 'ANZ'

export const PORTFOLIO_MGMT_TEAM = {
  AMERICAS,
  EUROPE,
  CHINA,
  ASIG,
  KOREA,
  JAPAN,
  INDIA,
  ANZ,
}

export const PORTFOLIO_MGMT_TEAM_OPTIONS = chain(PORTFOLIO_MGMT_TEAM)
  .values()
  .map((team) => ({ key: team, value: team, label: team }))
  .value()
