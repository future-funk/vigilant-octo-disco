import { DEAL_REQ_TYPE } from '@bpd/ui/constants'
import moment from 'moment'

export const PROJECT_DEFAULT_FORM_VALUES = {
  category: 'project',
  requestType: DEAL_REQ_TYPE.OTHERS,
  status: 'Ongoing',
  vintageDt: moment().format('YYYY-MM-DD'), // backend is in utc format.
  projects: [
    {
      name: '',
    },
  ],
  staffs: [
    { role: 'teamlead', commitment: null },
    { role: 'teamlead2', commitment: null },
    { role: 'staff1', commitment: null },
    { role: 'staff2', commitment: null },
    { role: 'staff3', commitment: null },
    { role: 'staff4', commitment: null },
  ],
}
