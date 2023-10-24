import { DEAL_STATUS } from '@bpd/bpd-web/shared/core'
import { DEAL_REQ_TYPE } from '@bpd/ui/constants'
import moment from 'moment'

export const DEFAULT_FORM_VALUES = {
  name: '',
  requestType: DEAL_REQ_TYPE.DIRECT_INVESTMENT,
  status: DEAL_STATUS.NEW_DEAL_FOR_DISCUSSION,
  approvalStatus: DEAL_STATUS.NEW_DEAL_FOR_DISCUSSION, //bdp-240
  investmentType: 'Equity',
  vintageDt: moment().format('YYYY-MM-DD'), // backend is in utc format.
  category: 'deal',
  isMnpi: null,
  projects: [
    {
      strategy: 'RE Bricks & Mortar',
      currency: 'USD',
      sector: null,
      country: null,
      isPartialDivestment: false,
      approval: {
        exchangeRate: 1,
        lcToUsdRate: 1,
      },
      properties: [],
    },
  ],
  staffs: [
    { role: 'teamlead', commitment: null },
    { role: 'teamlead2', commitment: null },
    { role: 'staff1', commitment: null },
    { role: 'staff2', commitment: null },
    { role: 'staff3', commitment: null },
    { role: 'staff4', commitment: null },
    { role: 'staff5', commitment: null },
  ],
  extAugStaffs: [],
}
