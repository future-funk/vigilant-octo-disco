import { isNil, trim } from 'lodash'
import { z, ZodType } from 'zod'

export const checklistItemZschema = z
  .object({
    id: z.number().optional(),
    type: z.string().optional(),
    description: z.string().optional(),
    displayIndex: z.number().optional(),
    isEnabled: z.boolean().nullable().optional(),
    value: z.string().optional(),
  })
  .refine(
    (item) => {
      if (item.isEnabled) {
        return !isNil(item.value)
      }
      return true
    },
    { message: '302', path: ['value'] }
  )

export const checklistZschema = z
  .object({
    preDeal: z.array(checklistItemZschema).optional(),
  })
  .optional()
