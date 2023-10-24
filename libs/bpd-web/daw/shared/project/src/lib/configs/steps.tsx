import {
  DealOthersForm,
  DealStaffingForm,
  DealStaffingHeader,
} from '@bpd/daw/shared/core'
import { projectStaffingSchema } from './uiForm'

export const CREATE_PROJECT_STEPS = [
  {
    key: 'staffing',
    title: <DealStaffingHeader />,
    content: <DealStaffingForm uiSchema={projectStaffingSchema} />,
  },
  { key: 'others', title: 'Others', content: <DealOthersForm /> },
]
