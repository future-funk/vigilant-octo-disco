import { TEAMS } from '@bpd/bpd-web/shared/config'
import { Options } from '@bpd/bpd-web/shared/data-access'

export const TEAM_SELECT_OPTIONS: Options<string> = [
  { label: 'AMERICAS', value: TEAMS.US, key: TEAMS.US },
  { label: 'EUROPE', value: TEAMS.EU, key: TEAMS.EU },
  { label: 'CHINA', value: TEAMS.CN, key: TEAMS.CN },
  { label: 'ASIG', value: TEAMS.ASIG, key: TEAMS.ASIG },
  { label: 'KOREA', value: TEAMS.KR, key: TEAMS.KR },
  { label: 'JAPAN', value: TEAMS.JP, key: TEAMS.JP },
  { label: 'INDIA', value: TEAMS.IN, key: TEAMS.IN },
  { label: 'ANZ', value: TEAMS.ANZ, key: TEAMS.ANZ },
]
