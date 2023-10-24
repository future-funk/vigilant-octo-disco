import { isNil } from 'lodash'
import { z } from 'zod'
import { requiredStringZschema } from './requiredStringZschema'

export const staffsZschema = z.array(
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
    .refine(
      (value) => {
        if (value.role === 'teamlead' && isNil(value.commitment)) {
          return false
        }
        return true
      },
      { message: '302', path: ['commitment'] }
    )
)
