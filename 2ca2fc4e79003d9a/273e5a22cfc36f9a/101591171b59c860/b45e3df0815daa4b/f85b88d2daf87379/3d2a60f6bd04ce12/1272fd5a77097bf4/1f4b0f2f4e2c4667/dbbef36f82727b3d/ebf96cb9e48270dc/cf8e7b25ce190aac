import {
  dealFormZschema as baseDealFormZschema,
  projectZschema as baseProjectZschema,
  requiredStringZschema,
  superRefineDeal,
  superRefineProject,
} from '@bpd/daw/shared/core'
import { z, ZodType } from 'zod'
import { DealFormData } from '../../types'

export const projectSchema = baseProjectZschema.extend({
  counterParty: z.object({
    seller: z.string().optional(),
    broker: requiredStringZschema,
    generalPartner: requiredStringZschema,
  }),
})

export const dalFormZschema = baseDealFormZschema.extend({
  isIcmReportDeal: z.boolean().optional().nullable(),
  projects: z.array(projectSchema.superRefine(superRefineProject)),
})

// Define the form schema
const formZschema: ZodType<DealFormData> =
  dalFormZschema.superRefine(superRefineDeal)

export type CreateDealFormValues = z.infer<typeof formZschema>

export default formZschema
