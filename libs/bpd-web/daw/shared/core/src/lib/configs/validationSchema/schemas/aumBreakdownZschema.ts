import { z } from 'zod'
import validateBreakdowns from '../utilValidateBreakdowns'
import { breakdownZschema } from './breakdownZschema'

// Define the aumBreakdowns schema
export const aumBreakdownsZschema = z.object({
  sector: z
    .array(breakdownZschema)
    .optional()
    .nullable()
    .refine(validateBreakdowns, 'Sum of weights should be equal to 100.'),

  country: z
    .array(breakdownZschema)
    .optional()
    .nullable()
    .refine(validateBreakdowns, 'Sum of weights should be equal to 100.'),

  assetType: z
    .array(breakdownZschema)
    .optional()
    .nullable()
    .refine(validateBreakdowns, 'Sum of weights should be equal to 100.'),
})
