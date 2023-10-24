import { z, ZodType } from 'zod'
import { dalFormZschema } from './createDealZodSchema'

import {
  masterProjApprovalZschema,
  masterProjUwZschema,
  projectZschema as baseProjectZschema,
  requiredNumberZschema,
  approvalNonInvZschema,
  aumBreakdownsZschemaOptional,
  masterProjZschema,
  superRefineProject,
  superRefineApproval,
  superRefineDeal,
  superRefineSoftCommitment,
} from '@bpd/daw/shared/core'
import { DealFormDataPjv } from '../../types'

const modifiedProjSchema = baseProjectZschema
  .extend({
    country: z.string().optional(),
    sector: z.string().optional(),
    assetType: z.string().optional(),
    approval: approvalNonInvZschema
      .extend({
        ...masterProjApprovalZschema,
        nec: requiredNumberZschema,
        tic: requiredNumberZschema,
        isSoftCommitment: z.boolean().nullable().optional(),
        softNec: z.number().optional(),
        softTic: z.number().optional(),
      })
      .superRefine(superRefineApproval)
      .superRefine(superRefineSoftCommitment),
    aumBreakdowns: aumBreakdownsZschemaOptional,
    counterParty: z.object({}).optional().nullable(),
    uw: z.object({
      ...masterProjUwZschema,
      netEquityIrr: z.number().optional().nullable(),
      riskHurdleRate: z.number().optional().nullable(),
      projectIrrBmk: z.number().optional().nullable(),
      netEquityIrrBmk: z.number().optional().nullable(),
      hurdleRateBmk: z.number().optional().nullable(),
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
