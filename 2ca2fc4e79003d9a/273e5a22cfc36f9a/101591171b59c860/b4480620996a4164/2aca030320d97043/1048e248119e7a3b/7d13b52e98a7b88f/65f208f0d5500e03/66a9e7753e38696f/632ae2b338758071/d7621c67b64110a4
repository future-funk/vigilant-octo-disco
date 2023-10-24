import {
  masterProjApprovalZschema,
  masterProjUwZschema,
  requiredNumberZschema,
  approvalNonInvZschema,
  masterProjZschema,
  superRefineProject,
  superRefineDeal,
} from '@bpd/daw/shared/core'
import { z, ZodType } from 'zod'
import { DealFormDataPjv } from '../../types'
import { dalFormZschema, projectSchema } from './createDealZodSchema'

const modifiedProjSchema = projectSchema
  .extend({
    uw: z.object({
      ...masterProjUwZschema,
      gicPrice: z.number().optional(),
      gicCapRate: z.number().optional(),
      netEquityIrr: z.number().optional(),
      riskHurdleRate: z.number().optional(),
    }),
    approval: approvalNonInvZschema.extend({
      ...masterProjApprovalZschema,
      nec: requiredNumberZschema,
      tic: requiredNumberZschema,
    }),
    ...masterProjZschema,
  })
  .superRefine(superRefineProject)

// Define the form schema
const formZschema: ZodType<DealFormDataPjv> = dalFormZschema
  .extend({
    projects: z.array(modifiedProjSchema),
  })
  .superRefine(superRefineDeal)

export type CreateDealFormValues = z.infer<typeof formZschema>

export default formZschema
