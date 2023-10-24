import {
  dealFormZschema as baseDealFormZschema,
  projectZschema as baseProjectZschema,
  requiredStringZschema,
  superRefineDeal,
  superRefineProject,
} from '@bpd/daw/shared/core'
import { z, ZodType } from 'zod'
import { staffsSchema, uwZschema } from '@bpd/daw/eu/shared/core'
import { DealFormData } from '../../types'

export const projectSchema = baseProjectZschema.extend({
  counterParty: z.object({
    seller: requiredStringZschema,
    broker: z.string().optional(),
    generalPartner: requiredStringZschema,
  }),
  uw: uwZschema,
})

export const dalFormZschema = baseDealFormZschema.extend({
  commitmentUnit: z.string().optional(),
  successProbability: requiredStringZschema,
  investmentTheme: requiredStringZschema,
  projects: z.array(projectSchema.superRefine(superRefineProject)),
  staffs: staffsSchema,

  subTeam: requiredStringZschema,
  intensity: z.string().optional(),
})

// Define the form schema
const formZschema: ZodType<DealFormData> =
  dalFormZschema.superRefine(superRefineDeal)

export type CreateDealFormValues = z.infer<typeof formZschema>

export default formZschema
