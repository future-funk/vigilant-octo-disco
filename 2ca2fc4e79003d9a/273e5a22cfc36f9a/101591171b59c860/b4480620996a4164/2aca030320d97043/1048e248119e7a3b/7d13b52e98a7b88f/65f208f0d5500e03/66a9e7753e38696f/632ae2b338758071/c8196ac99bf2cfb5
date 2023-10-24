import { z, ZodType } from 'zod'
import {
  requiredNumberZschema,
  projectZschema as baseProjectZschema,
  requiredStringZschema,
  masterProjApprovalZschema,
  masterProjUwZschema,
  masterProjZschema,
  approvalNonInvZschema,
  aumBreakdownsZschemaOptional,
  superRefineProject,
  superRefineDeal,
} from '@bpd/daw/shared/core'
import { dalFormZschema } from './createDealZodSchema'
import { DealFormDataDiv } from '../../types'

const modifiedProjSchema = baseProjectZschema
  .extend({
    country: z.string().optional(),
    sector: z.string().optional(),
    assetType: z.string().optional(),
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
      projectIrrBmk: z.number().optional(),
      netEquityIrrBmk: z.number().optional(),
      hurdleRateBmk: z.number().optional(),
    }),
    counterParty: z.object({
      seller: requiredStringZschema,
      broker: z.string().optional(),
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
