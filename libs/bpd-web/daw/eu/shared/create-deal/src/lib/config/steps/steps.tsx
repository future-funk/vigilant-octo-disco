import {
  CREATE_DEAL_STEPS,
  DealAllocationForm,
  DealCounterPartiesForm,
  DealPreliminaryForm,
  DealStaffingForm,
} from '@bpd/daw/shared/core'
import {
  dealStaffingSchema,
  dealPreliminarySchema,
  dealAllocationSchema,
  dealCounterPartiesSchema,
} from '@bpd/daw/eu/shared/core'
import { BpdStepsProps } from '@bpd/bpd-web/shared/ui'
const [
  DEAL_DETAILS,
  AUM_ALLOCATION,
  COUNTER_PARTIES,
  PRELIMINARY,
  STAFFING,
  OTHERS,
] = CREATE_DEAL_STEPS

export const EU_CREATE_DEAL_STEPS: BpdStepsProps['steps'] = [
  DEAL_DETAILS,
  {
    ...AUM_ALLOCATION,
    content: <DealAllocationForm uiSchema={dealAllocationSchema} />,
  },
  {
    ...COUNTER_PARTIES,
    content: <DealCounterPartiesForm uiSchema={dealCounterPartiesSchema} />,
  },
  {
    ...PRELIMINARY,
    content: <DealPreliminaryForm uiSchema={dealPreliminarySchema} />,
  },
  { ...STAFFING, content: <DealStaffingForm uiSchema={dealStaffingSchema} /> },
  OTHERS,
]
