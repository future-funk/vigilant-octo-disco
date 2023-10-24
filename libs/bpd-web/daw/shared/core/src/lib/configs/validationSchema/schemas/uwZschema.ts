import { z } from 'zod'
import { requiredNumberZschema } from './requiredNumberZschema'

export const uwZschema = z.object({
  gicPrice: z.number().optional().nullable(),
  gicCapRate: z.number().optional().nullable(),
  gicInterest: requiredNumberZschema,
  netEquityIrr: z.number().optional().nullable(),
  riskHurdleRate: z.number().optional().nullable(),
})
