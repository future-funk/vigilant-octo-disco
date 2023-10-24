import { z } from 'zod'
import { requiredStringZschema } from './requiredStringZschema'

export const counterpartyZschema = z.object({
  seller: z.string().optional(),
  broker: requiredStringZschema,
  generalPartner: requiredStringZschema,
})
