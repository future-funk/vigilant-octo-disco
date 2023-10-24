import { DealPreliminaryForm } from '@bpd/daw/shared/core'
import { softCommitDealPreliminarySchema } from '@bpd/daw/eu/shared/core'
import { BpdStepsProps } from '@bpd/bpd-web/shared/ui'

import { EU_ADD_COMMIT_CREATE_DEAL_STEPS } from './addCommitSteps'

const [DEAL_DETAILS, AUM_ALLOCATION, PRELIMINARY, STAFFING, OTHERS] =
  EU_ADD_COMMIT_CREATE_DEAL_STEPS

export const EU_SOFT_COMMIT_CREATE_DEAL_STEPS: BpdStepsProps['steps'] = [
  DEAL_DETAILS,
  AUM_ALLOCATION,
  {
    ...PRELIMINARY,
    title: 'Soft Commitment Release',
    content: <DealPreliminaryForm uiSchema={softCommitDealPreliminarySchema} />,
  },
  STAFFING,
  OTHERS,
]
