import {
  DealDetailsForm,
  DealPreliminaryForm,
  divDealDetailsSchema,
} from '@bpd/daw/shared/core'
import { divDealPreliminarySchema } from '@bpd/daw/eu/shared/core'
import { BpdStepsProps } from '@bpd/bpd-web/shared/ui'

import { EU_ADD_COMMIT_CREATE_DEAL_STEPS } from './addCommitSteps'
import { EU_CREATE_DEAL_STEPS } from './steps'

const [, , COUNTER_PARTIES] = EU_CREATE_DEAL_STEPS

const [DEAL_DETAILS, AUM_ALLOCATION, PRELIMINARY, STAFFING, OTHERS] =
  EU_ADD_COMMIT_CREATE_DEAL_STEPS

export const EU_DIV_CREATE_DEAL_STEPS: BpdStepsProps['steps'] = [
  {
    ...DEAL_DETAILS,
    content: <DealDetailsForm uiSchema={divDealDetailsSchema} />,
  },
  AUM_ALLOCATION,
  COUNTER_PARTIES,
  {
    ...PRELIMINARY,
    content: <DealPreliminaryForm uiSchema={divDealPreliminarySchema} />,
  },
  STAFFING,
  OTHERS,
]
