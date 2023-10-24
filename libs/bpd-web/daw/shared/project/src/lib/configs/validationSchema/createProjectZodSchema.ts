import { requiredStringZschema } from '@bpd/daw/shared/core'
import { z, ZodType } from 'zod'
import { ProjectFormData } from './types'

const projectsZSchema = z.array(
  z.object({
    name: requiredStringZschema,
  })
)

const staffSchema = z.array(
  z.object({
    role: z.string().optional(),
    ntid: z.string().optional(),
  })
)

export const formZObject = z.object({
  category: requiredStringZschema,
  requestType: requiredStringZschema,
  status: requiredStringZschema,
  name: requiredStringZschema,
  vintageDt: requiredStringZschema,
  edmsFolder: z.string().optional(),
  dealSharedFolder: z.string().optional(),
  staffs: staffSchema,
  comment: requiredStringZschema,
  projects: projectsZSchema,
})

// Define the form schema
const formSchema: ZodType<ProjectFormData> = formZObject

export type CreateDealFormValues = z.infer<typeof formSchema>

export default formSchema
