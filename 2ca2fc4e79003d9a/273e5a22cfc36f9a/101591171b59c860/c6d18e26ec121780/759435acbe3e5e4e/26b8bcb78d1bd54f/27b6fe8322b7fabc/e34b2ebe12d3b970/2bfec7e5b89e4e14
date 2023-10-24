import {
  DealOthersForm,
  DealStaffingForm,
  DealStaffingHeader,
} from '@bpd/daw/shared/core'
import ResearchAttributeForm from '../component/ResearchAttributeForm'
import { researchStaffingSchema, researchOthersSchema } from './uiForm'

export const CREATE_RESEARCH_STEPS = [
  {
    key: 'attributes',
    title: 'Attributes',
    content: <ResearchAttributeForm />,
  },
  {
    key: 'staffing',
    title: <DealStaffingHeader />,
    content: <DealStaffingForm uiSchema={researchStaffingSchema} />,
  },
  {
    key: 'others',
    title: 'Others',
    content: <DealOthersForm uiSchema={researchOthersSchema} />,
  },
]
