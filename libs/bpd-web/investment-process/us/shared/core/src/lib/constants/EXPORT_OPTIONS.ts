import { ENDPOINTS } from '@bpd/bpd-web/investment-process/shared/data-access'
import { TEAMS } from '@bpd/bpd-web/shared/config'
import { BASE_URL } from '@bpd/bpd-web/shared/store'

const EXPORT_OPTIONS = [
  {
    label: 'Staffing',
    key: `${BASE_URL}${ENDPOINTS.REPORTS.WEEKLY}?team=${TEAMS.US}`,
    value: `${BASE_URL}${ENDPOINTS.REPORTS.WEEKLY}?team=${TEAMS.US}`,
  },
  {
    label: 'ICM Report',
    key: `${BASE_URL}${ENDPOINTS.REPORTS.ICM}?team=${TEAMS.US}`,
    value: `${BASE_URL}${ENDPOINTS.REPORTS.ICM}?team=${TEAMS.US}`,
  },
  { label: 'divider-1', key: 'divider-1', value: 'divider-1', type: 'divider' },
]

export default EXPORT_OPTIONS
