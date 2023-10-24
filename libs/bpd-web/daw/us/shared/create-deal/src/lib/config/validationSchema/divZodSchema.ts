import { z, ZodType } from 'zod'
import {
  requiredNumberZschema,
  projectZschema as baseProjectZschema,
  requiredStringZschema,
  approvalNonInvZschema,
  aumBreakdownsZschemaOptional,
  masterProjZschema,
  masterProjApprovalZschema,
  masterProjUwZschema,
  superRefineProject,
  superRefineDeal,
} from '@bpd/daw/shared/core'
import { dalFormZschema } from './createDealZodSchema'

import { DealFormDataDiv } from '../../types'

const modifiedProjSchema = baseProjectZschema
  .extend({
    country: z.string().optional().nullable(),
    sector: z.string().optional().nullable(),
    assetType: z.string().optional().nullable(),
    approval: approvalNonInvZschema.extend({
      ...masterProjApprovalZschema,
    }),
    aumBreakdowns: aumBreakdownsZschemaOptional,
    uw: z.object({
      ...masterProjUwZschema,
      gicPrice: z.number().optional(),
      gicCapRate: z.number().optional(),
      netEquityIrr: requiredNumberZschema,
      riskHurdleRate: requiredNumberZschema,
    }),
    counterParty: z.object({
      buyer: requiredStringZschema,
      broker: requiredStringZschema,
      generalPartner: requiredStringZschema,
    }),
    ...masterProjZschema,
  })
  .superRefine(superRefineProject)

// Define the form schema
const formZschema: ZodType<DealFormDataDiv> = dalFormZschema
  .extend({
    projects: z.array(modifiedProjSchema),
  })
  .superRefine(superRefineDeal)

export type CreateDealFormValues = z.infer<typeof formZschema>

export default formZschema
