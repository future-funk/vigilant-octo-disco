import { BpdStepsProps } from '@bpd/bpd-web/shared/ui'
import {
  dealStaffingSchema,
  projectCounterPartiesSchema,
} from '@bpd/daw/eu/shared/core'
import { DealCounterPartiesForm, DealStaffingForm } from '@bpd/daw/shared/core'
import { CREATE_PROJECT_STEPS } from '@bpd/daw/shared/project'

const [STAFFING, OTHERS] = CREATE_PROJECT_STEPS

export const EU_PROJECT_FORM_STEP: BpdStepsProps['steps'] = [
  {
    key: 'counterParty',
    title: 'Counterparties',
    content: <DealCounterPartiesForm uiSchema={projectCounterPartiesSchema} />,
  },
  {
    ...STAFFING,
    content: <DealStaffingForm uiSchema={dealStaffingSchema} />,
  },
  OTHERS,
]
