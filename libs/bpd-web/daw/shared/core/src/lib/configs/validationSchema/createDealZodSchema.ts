import { z, ZodType } from 'zod'
import {
  checklistZschema,
  extAugStaffsZschema,
  participantZschema,
  projectZschema,
  requiredStringZschema,
  staffsZschema,
} from './schemas'
import { superRefineProject } from './superRefine'
import { DealFormData } from './types'

// Define the form schema.
export const dealFormZschema = z.object({
  category: requiredStringZschema,
  name: requiredStringZschema,
  requestType: requiredStringZschema,
  investmentType: requiredStringZschema,
  status: requiredStringZschema,
  approvalStatus: requiredStringZschema,
  vintageDt: requiredStringZschema,
  edmsFolder: z.string().optional(),
  comment: requiredStringZschema,
  isMnpi: z
    .boolean()
    .nullable()
    .refine((val) => val !== null, {
      message: '302',
    }),
  participants: participantZschema,
  extAugStaffs: extAugStaffsZschema,

  projects: z.array(projectZschema.superRefine(superRefineProject)),
  staffs: staffsZschema,
  checkList: checklistZschema,
})

const formZschema: ZodType<DealFormData> = dealFormZschema

export type CreateDealFormValues = z.infer<typeof formZschema>

export default formZschema
