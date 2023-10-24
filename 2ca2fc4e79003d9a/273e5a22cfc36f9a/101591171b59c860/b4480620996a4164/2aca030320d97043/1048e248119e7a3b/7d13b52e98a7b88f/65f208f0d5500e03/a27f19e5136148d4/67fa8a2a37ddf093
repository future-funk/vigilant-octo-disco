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
      isPartialDivestment: false,
      approval: {
        exchangeRate: 1,
        lcToUsdRate: 1,
      },
      properties: [],
    },
  ],
  commitmentUnit: '%',
  staffs: [
    { role: 'teamlead' },
    { role: 'staff1' },
    { role: 'staff2' },
    { role: 'staff3' },
    { role: 'staff4' },
    { role: 'staff5' },
    { role: 'staff6' },
    { role: 'staff7' },
    { role: 'staff8' },
  ],
  extAugStaffs: [],
}
