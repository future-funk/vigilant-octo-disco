import {
  DealCounterPartiesForm,
  DealDetailsForm,
  DealPreliminaryForm,
  divDealDetailsSchema,
  divDealPreliminarySchema,
} from '@bpd/daw/shared/core'
import { BpdStepsProps } from '@bpd/bpd-web/shared/ui'

import { US_PJV_CREATE_DEAL_STEPS } from './pjvSteps'
import { divDealCounterPartiesSchema } from '@bpd/daw/us/shared/core'

const [
  DEAL_DETAILS,
  AUM_ALLOCATION,
  COUNTER_PARTIES,
  PRELIMINARY,
  STAFFING,
  OTHERS,
] = US_PJV_CREATE_DEAL_STEPS

export const US_DIV_CREATE_DEAL_STEPS: BpdStepsProps['steps'] = [
  {
    ...DEAL_DETAILS,
    content: <DealDetailsForm uiSchema={divDealDetailsSchema} />,
  },
  AUM_ALLOCATION,
  {
    ...COUNTER_PARTIES,
    content: <DealCounterPartiesForm uiSchema={divDealCounterPartiesSchema} />,
  },
  {
    ...PRELIMINARY,
    content: <DealPreliminaryForm uiSchema={divDealPreliminarySchema} />,
  },
  STAFFING,
  OTHERS,
]
