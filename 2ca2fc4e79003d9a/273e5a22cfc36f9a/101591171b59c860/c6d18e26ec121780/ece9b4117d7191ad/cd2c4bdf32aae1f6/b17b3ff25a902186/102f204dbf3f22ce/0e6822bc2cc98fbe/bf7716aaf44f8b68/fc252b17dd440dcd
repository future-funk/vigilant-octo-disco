import { z } from 'zod'

export const extAugStaffsZschema = z
  .array(
    z
      .object({
        name: z.string().optional(),
        ntid: z.string().optional(),
      })
      .optional()
  )
  .optional()
