import {
  masterProjApprovalZschema,
  masterProjUwZschema,
  requiredNumberZschema,
  superRefineDeal,
  superRefineProject,
} from '@bpd/daw/shared/core'
import { z, ZodType } from 'zod'
import { DealFormDataPjv } from '../../types'
import { dalFormZschema, projectSchema } from './createDealZodSchema'
import { approvalNonInvZschema, masterProjZschema } from '@bpd/daw/shared/core'

const modifiedProjSchema = projectSchema
  .extend({
    uw: z.object({
      ...masterProjUwZschema,
      gicPrice: z.number().optional().nullable(),
      gicCapRate: z.number().optional().nullable(),
      netEquityIrr: z.number().optional().nullable(),
      riskHurdleRate: z.number().optional().nullable(),
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
