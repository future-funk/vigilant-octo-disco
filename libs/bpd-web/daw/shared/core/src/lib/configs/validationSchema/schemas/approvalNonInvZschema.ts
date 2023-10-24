import { z, ZodType } from 'zod'

//this is applicable only to ADD/PJV, DIV and SOFT
export const approvalNonInvZschema = z
  .object({
    divAum: z.number().nullable(),
    divGaum: z.number().nullable(),
    exchangeRate: z.number(),
    lcToUsdRate: z.string(),
    nec: z.number().nullable(),
    tic: z.number().nullable(),
    originalNec: z.number().nullable(),
    originalTic: z.number().nullable(),
    originalNecUsd: z.number().nullable(),
    originalTicUsd: z.number().nullable(),
  })
  .partial()
