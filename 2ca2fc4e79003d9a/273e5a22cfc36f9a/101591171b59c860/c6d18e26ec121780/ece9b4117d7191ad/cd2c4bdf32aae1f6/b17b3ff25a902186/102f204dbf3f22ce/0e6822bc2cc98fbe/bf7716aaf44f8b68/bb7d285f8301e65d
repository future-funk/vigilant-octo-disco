import { isNil } from 'lodash'
import { z, ZodType } from 'zod'

export const requiredNumberZschema = z
  .number()
  .optional()
  .nullable()
  .refine((val) => !isNil(val), {
    message: '302',
  })
