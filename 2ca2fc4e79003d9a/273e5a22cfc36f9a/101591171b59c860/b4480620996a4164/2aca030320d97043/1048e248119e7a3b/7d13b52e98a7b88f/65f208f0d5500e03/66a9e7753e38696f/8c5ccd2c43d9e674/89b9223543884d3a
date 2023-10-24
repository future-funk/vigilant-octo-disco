import {
  DealDetailsForm,
  DealPreliminaryForm,
  pjvDealDetailsSchema,
  pjvDealPreliminarySchema,
} from '@bpd/daw/shared/core'

import { BpdStepsProps } from '@bpd/bpd-web/shared/ui'

import { EU_CREATE_DEAL_STEPS } from './steps'

const [
  DEAL_DETAILS,
  AUM_ALLOCATION,
  COUNTER_PARTIES,
  PRELIMINARY,
  STAFFING,
  OTHERS,
] = EU_CREATE_DEAL_STEPS

export const EU_PJV_CREATE_DEAL_STEPS: BpdStepsProps['steps'] = [
  {
    ...DEAL_DETAILS,
    key: 'pjvDealDetails',
    content: <DealDetailsForm uiSchema={pjvDealDetailsSchema} />,
  },
  AUM_ALLOCATION,
  COUNTER_PARTIES,
  {
    ...PRELIMINARY,
    content: <DealPreliminaryForm uiSchema={pjvDealPreliminarySchema} />,
  },
  STAFFING,
  OTHERS,
]
