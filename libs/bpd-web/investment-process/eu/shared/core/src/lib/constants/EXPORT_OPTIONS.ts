import { ENDPOINTS } from '@bpd/bpd-web/investment-process/shared/data-access'
import { TEAMS } from '@bpd/bpd-web/shared/config'
import { BASE_URL } from '@bpd/bpd-web/shared/store'
import SUB_TEAMS from './SUB_TEAMS'

const EXPORT_OPTIONS = [
  {
    label: 'Deal Flow Minutes',
    key: `${BASE_URL}${ENDPOINTS.REPORTS.DEAL_FLOW_SIMPLIFIED}?team=${TEAMS.EU}`,
    value: `${BASE_URL}${ENDPOINTS.REPORTS.DEAL_FLOW_SIMPLIFIED}?team=${TEAMS.EU}`,
  },
  { label: 'divider-1', key: 'divider-1', value: 'divider-1', type: 'divider' },
  {
    label: 'Flow Report',
    key: `${BASE_URL}${ENDPOINTS.REPORTS.DEAL_FLOW}?team=${TEAMS.EU}&sub_team=${SUB_TEAMS.UK}`,
    value: `${BASE_URL}${ENDPOINTS.REPORTS.DEAL_FLOW}?team=${TEAMS.EU}&sub_team=${SUB_TEAMS.UK}`,
  },
  {
    label: 'Flow (UK)',
    key: `${BASE_URL}${ENDPOINTS.REPORTS.DEAL_FLOW}?team=${TEAMS.EU}`,
    value: `${BASE_URL}${ENDPOINTS.REPORTS.DEAL_FLOW}?team=${TEAMS.EU}`,
  },
  {
    label: 'Flow (FRAGR)',
    key: `${BASE_URL}${ENDPOINTS.REPORTS.DEAL_FLOW}?team=${TEAMS.EU}&sub_team=${SUB_TEAMS.FRAGR}`,
    value: `${BASE_URL}${ENDPOINTS.REPORTS.DEAL_FLOW}?team=${TEAMS.EU}&sub_team=${SUB_TEAMS.FRAGR}`,
  },
  {
    label: 'Flow (Tactical)',
    key: `${BASE_URL}${ENDPOINTS.REPORTS.DEAL_FLOW}?team=${TEAMS.EU}&sub_team=${SUB_TEAMS.TACTICAL}`,
    value: `${BASE_URL}${ENDPOINTS.REPORTS.DEAL_FLOW}?team=${TEAMS.EU}&sub_team=${SUB_TEAMS.TACTICAL}`,
  },
  {
    label: 'Flow (Debt)',
    key: `${BASE_URL}${ENDPOINTS.REPORTS.DEAL_FLOW}?team=${TEAMS.EU}&sub_team=${SUB_TEAMS.DEBT}`,
    value: `${BASE_URL}${ENDPOINTS.REPORTS.DEAL_FLOW}?team=${TEAMS.EU}&sub_team=${SUB_TEAMS.DEBT}`,
  },
  { label: 'divider-2', key: 'divider-2', value: 'divider-2', type: 'divider' },
]

export default EXPORT_OPTIONS
