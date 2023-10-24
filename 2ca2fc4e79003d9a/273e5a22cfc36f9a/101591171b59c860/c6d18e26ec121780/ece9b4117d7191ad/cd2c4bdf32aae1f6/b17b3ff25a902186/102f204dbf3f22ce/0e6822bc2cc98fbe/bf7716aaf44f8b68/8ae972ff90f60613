import { trim } from 'lodash'
import { z, ZodType } from 'zod'

export const requiredStringZschema = z
  .string()
  .optional()
  .refine((value) => trim(value ?? ''), '302')

export const requiredNullableStringZschema = z
  .string()
  .optional()
  .nullable()
  .refine((value) => trim(value ?? ''), '302')
