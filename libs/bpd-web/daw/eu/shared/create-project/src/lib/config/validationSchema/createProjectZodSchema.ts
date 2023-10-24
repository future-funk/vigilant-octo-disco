import { staffsSchema } from '@bpd/daw/eu/shared/core'
import { requiredStringZschema } from '@bpd/daw/shared/core'
import { z, ZodType } from 'zod'
import { ProjectFormData } from '../../types'

const projectZschema = z.object({
  name: requiredStringZschema,
  strategy: z.string().optional(),
  dqmDebtType: requiredStringZschema,
  mgmtTeam: z.string().optional(),
  sector: z.string().optional(),
  country: z.string().optional(),
  counterParty: z
    .object({
      seller: z.string().optional(),
      broker: z.string().optional(),
      generalPartner: z.string().optional(),
      legalRep: z.string().optional(),
    })
    .optional()
    .nullable(),
})

export const formZObject = z.object({
  category: requiredStringZschema,
  requestType: requiredStringZschema,
  status: requiredStringZschema,
  name: requiredStringZschema,
  description: requiredStringZschema,
  subTeam: z.string().optional(),
  commitmentUnit: requiredStringZschema,
  vintageDt: requiredStringZschema,
  edmsFolder: z.string().optional(),
  dealSharedFolder: z.string().optional(),
  staffs: staffsSchema,
  comment: requiredStringZschema,
  projects: z.array(projectZschema),
})

// Define the form schema
const formSchema: ZodType<ProjectFormData> = formZObject

export type CreateDealFormValues = z.infer<typeof formSchema>

export default formSchema
