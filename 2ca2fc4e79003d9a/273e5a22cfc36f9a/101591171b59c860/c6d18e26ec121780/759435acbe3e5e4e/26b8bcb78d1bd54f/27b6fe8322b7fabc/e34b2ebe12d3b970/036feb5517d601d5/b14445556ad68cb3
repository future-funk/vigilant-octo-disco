import {
  requiredStringZschema,
  requiredNullableStringZschema,
} from '@bpd/daw/shared/core'
import { z, ZodType } from 'zod'
import { ResearchFormData } from './types'

export const calendarBreakdownsZschema = z
  .object({
    calendar: z
      .array(
        z.object({
          item: z.string().optional(),
          itemDatetimeValue: z.string().optional(),
        })
      )
      .optional()
      .nullable(),
  })
  .optional()
  .nullable()

export const projectSchema = z.object({
  name: requiredStringZschema,
  category: requiredStringZschema,
  calendar: z.string().optional(),
  projectRegion: requiredStringZschema,
  calendarBreakdowns: calendarBreakdownsZschema,
  country: z.string().optional(),
  sector: z.string().optional(),
})

const staffSchema = z.array(
  z.object({
    role: z.string().optional(),
    ntid: z.string().optional(),
  })
)

// Define the form schema
const formSchema: ZodType<ResearchFormData> = z.object({
  category: requiredStringZschema,
  requestType: requiredStringZschema,
  status: requiredStringZschema,
  description: requiredStringZschema,
  name: requiredStringZschema,
  edmsFolder: z.string().optional(),
  vintageDt: requiredStringZschema,
  rschTargetCompletionDt: requiredNullableStringZschema,
  comment: requiredStringZschema,
  projects: z.array(projectSchema),
  staffs: staffSchema,
  workspace: z.string().optional().nullable(),
})

export type CreateDealFormValues = z.infer<typeof formSchema>

export default formSchema
