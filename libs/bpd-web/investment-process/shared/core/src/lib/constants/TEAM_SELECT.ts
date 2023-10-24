import { TEAMS } from '@bpd/bpd-web/shared/config'
import { Options } from '@bpd/bpd-web/shared/data-access'

const GLOBAL = [
  TEAMS.US,
  TEAMS.EU,
  TEAMS.CN,
  TEAMS.KR,
  TEAMS.JP,
  TEAMS.IN,
  TEAMS.ANZ,
].join(',')

const CMT = 'cmt'
const RESEARCH = 'RESEARCH'
const STRATS = 'strats'

export const TEAM_SELECT_OPTIONS: Options<string> = [
  {
    label: 'GLOBAL',
    value: GLOBAL,
    key: GLOBAL,
  },
  { label: 'AMERICAS', value: TEAMS.US, key: TEAMS.US },
  { label: 'EUROPE', value: TEAMS.EU, key: TEAMS.EU },
  { label: 'CHINA', value: TEAMS.CN, key: TEAMS.CN },
  { label: 'KOREA', value: TEAMS.KR, key: TEAMS.KR },
  { label: 'JAPAN', value: TEAMS.JP, key: TEAMS.JP },
  { label: 'INDIA', value: TEAMS.IN, key: TEAMS.IN },
  { label: 'ANZ', value: TEAMS.ANZ, key: TEAMS.ANZ },
  { label: 'CMT', value: CMT, key: CMT },
  { label: 'RESEARCH', value: RESEARCH, key: RESEARCH },
  { label: 'STRATS', value: STRATS, key: STRATS },
]
