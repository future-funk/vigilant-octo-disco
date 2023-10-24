import { requiredStringZschema } from '@bpd/daw/shared/core'
import { z, ZodType } from 'zod'

export const staffsSchema = z.array(
  z
    .object({
      role: requiredStringZschema,
      ntid: z.string().optional(),
      commitment: z.number().nullable().optional(),
    })
    .refine(
      (value) => {
        if (value.role === 'teamlead' && !value.ntid) {
          return false
        }
        return true
      },
      { message: '302', path: ['ntid'] }
    )
)
