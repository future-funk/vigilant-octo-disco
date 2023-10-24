import { EXPERT_DEAL_STATUS as STATUS } from '@bpd/bpd-web/shared/core'
import { getFiscalYearStartEndDates } from '@bpd/utils/fiscal-year'
import { getMonthDifferent } from '../utils'

export const VIEW_TYPE = {
  TEAM: 'Team',
  COUNTRY: 'Country',
}

export const PERIOD_TYPE = {
  SINCE_INCEPTION: 'Since Inception',
  FYTD: 'FYTD',
  LAST_6_MTH: 'Last 6 months',
  LAST_12_MTH: 'Last 1 year',
  LAST_24_MTH: 'Last 2 years',
}

export const DEAL_TYPE = {
  LIVE: 'Live',
  ON_HOLD: 'On Hold',
  CLOSED: 'Closed',
  DEAD: 'Dead',
}

export const TOP_N_TYPE = {
  TOP_1: '1',
  TOP_3: '3',
  TOP_5: '5',
  ALL: 'ALL',
}

export const PERIODS = {
  [PERIOD_TYPE.SINCE_INCEPTION]: getMonthDifferent(
    new Date('1800-01-01'),
    new Date()
  ),
  [PERIOD_TYPE.FYTD]: getMonthDifferent(
    getFiscalYearStartEndDates().startDate.toDate(),
    new Date()
  ),
  [PERIOD_TYPE.LAST_6_MTH]: 6,
  [PERIOD_TYPE.LAST_12_MTH]: 12,
  [PERIOD_TYPE.LAST_24_MTH]: 24,
}

export const DEAL_STATUS = {
  [DEAL_TYPE.LIVE]: [
    STATUS.NEW_DEAL_FOR_DISCUSSION,
    STATUS.UNDER_CONSIDERATION,
    STATUS.PDB_SKIPPED,
    STATUS.PDB_CIRCULATED,
    STATUS.DQM_CIRCULATED,
    STATUS.DQM_APPROVED,
    STATUS.DQM_REJECTED,
    STATUS.PENDING_APPROVAL,
    STATUS.DEAL_APPROVED,
  ],
  [DEAL_TYPE.ON_HOLD]: [STATUS.KIV],
  [DEAL_TYPE.CLOSED]: [STATUS.DEAL_CLOSED],
  [DEAL_TYPE.DEAD]: [STATUS.DEAL_REJECTED, STATUS.DEAD],
}

export const TOP_N = {
  [TOP_N_TYPE.TOP_1]: 1,
  [TOP_N_TYPE.TOP_3]: 3,
  [TOP_N_TYPE.TOP_5]: 5,
  [TOP_N_TYPE.ALL]: 99,
}
