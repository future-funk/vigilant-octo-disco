import { z } from 'zod'
import { approvalZschema } from './approvalZschema'
import { aumBreakdownsZschema } from './aumBreakdownZschema'
import { counterpartyZschema } from './counterpartyZschema'
import {
  requiredNullableStringZschema,
  requiredStringZschema,
} from './requiredStringZschema'
import { uwZschema } from './uwZschema'

// Define the project schema
export const projectZschema = z.object({
  name: requiredStringZschema,
  strategy: requiredStringZschema,
  dqmDebtType: z.string().optional(),
  currency: requiredStringZschema,
  country: requiredNullableStringZschema,
  sector: requiredNullableStringZschema,
  sectorOthers: z.string().optional(),
  assetType: z.string().optional(),
  approval: approvalZschema,
  aumBreakdowns: aumBreakdownsZschema,
  counterParty: counterpartyZschema,
  uw: uwZschema,
  isPartialDivestment: z.boolean().nullable().optional(),
  scrValidate: z
    .union([
      z.boolean(),
      z.literal('error'),
      z.literal('validating'),
      z.literal('none'),
    ])
    .nullable()
    .optional(),
})
