import { DEAL_REQ_TYPE } from '@bpd/ui/constants'
import moment from 'moment'

export const RESEARCH_DEFAULT_FORM_VALUES = {
  category: 'research',
  requestType: DEAL_REQ_TYPE.GIPS,
  status: 'Ongoing',
  vintageDt: moment().format('YYYY-MM-DD'), // backend is in utc format.
  rschTargetCompletionDt: null,
  projects: [
    {
      name: '',
    },
  ],
  staffs: [
    { role: 'teamlead', commitment: null },
    { role: 'staff1', commitment: null },
    { role: 'staff2', commitment: null },
    { role: 'staff3', commitment: null },
    { role: 'staff4', commitment: null },
    { role: 'staff5', commitment: null },
  ],
  calendarBreakdowns: null,
}
