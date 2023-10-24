import {
  DealPreliminaryForm,
  addCommitDealPreliminarySchema,
} from '@bpd/daw/shared/core'
import { BpdStepsProps } from '@bpd/bpd-web/shared/ui'

import { US_PJV_CREATE_DEAL_STEPS } from './pjvSteps'

const [
  DEAL_DETAILS,
  AUM_ALLOCATION,
  COUNTER_PARTIES,
  PRELIMINARY,
  STAFFING,
  OTHERS,
] = US_PJV_CREATE_DEAL_STEPS

export const US_ADD_COMMIT_CREATE_DEAL_STEPS: BpdStepsProps['steps'] = [
  DEAL_DETAILS,
  AUM_ALLOCATION,
  {
    ...PRELIMINARY,
    content: <DealPreliminaryForm uiSchema={addCommitDealPreliminarySchema} />,
  },
  STAFFING,
  OTHERS,
]
