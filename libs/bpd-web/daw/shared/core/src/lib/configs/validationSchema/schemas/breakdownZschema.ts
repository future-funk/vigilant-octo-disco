import { isNil, trim } from 'lodash'
import { z, ZodType } from 'zod'
import { requiredNumberZschema } from './requiredNumberZschema'

export const breakdownZschema = z
  .object({
    id: z.number().optional().nullable(),
    item: z.string(),
    itemAumPct: requiredNumberZschema,
    isDeleted: z.boolean().optional().nullable(),
  })
  .refine(
    ({ itemAumPct }) => {
      if (isNil(itemAumPct)) {
        return false
      }
      return true
    },
    { message: '302', path: ['itemAumPct'] }
  )
