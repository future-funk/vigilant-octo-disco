import { z, ZodType } from 'zod'
import { breakdownZschema } from './breakdownZschema'

export const aumBreakdownsZschemaOptional = z.object({
  sector: z.array(breakdownZschema).optional().nullable(),
  country: z.array(breakdownZschema).optional().nullable(),

  assetType: z.array(breakdownZschema).optional().nullable(),
})
