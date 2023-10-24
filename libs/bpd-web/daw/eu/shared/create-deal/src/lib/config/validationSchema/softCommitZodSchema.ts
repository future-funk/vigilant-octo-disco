import { z, ZodType } from 'zod'
import { dalFormZschema } from './createDealZodSchema'

import {
  masterProjApprovalZschema,
  masterProjUwZschema,
  projectZschema as baseProjectZschema,
  approvalNonInvZschema,
  aumBreakdownsZschemaOptional,
  masterProjZschema,
  superRefineProject,
  superRefineDeal,
  Project,
  ERROR_MESSAGES,
  requiredNumberZschema,
  superRefineScrTic,
} from '@bpd/daw/shared/core'
import { DealFormDataPjv } from '../../types'
import { isNil, isNumber } from 'lodash'

const modifiedProjSchema = baseProjectZschema
  .extend({
    country: z.string().optional().nullable(),
    sector: z.string().optional().nullable(),
    assetType: z.string().optional().nullable(),
    approval: approvalNonInvZschema.extend({
      ...masterProjApprovalZschema,
      nec: requiredNumberZschema,
      tic: requiredNumberZschema,
    }),
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
  .superRefine(superRefineScrTic)

// Define the form schema
const formZschema: ZodType<DealFormDataPjv> = dalFormZschema
  .extend({
    projects: z.array(modifiedProjSchema),
  })
  .superRefine(superRefineDeal)

export type CreateDealFormValues = z.infer<typeof formZschema>

export default formZschema
