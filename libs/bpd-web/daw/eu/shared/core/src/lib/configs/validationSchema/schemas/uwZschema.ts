import { z } from 'zod'
import { uwZschema as baseUwZschema } from '@bpd/daw/shared/core'

export const uwZschema = baseUwZschema.extend({
  projectIrrBmk: z.number().optional().nullable(),
  netEquityIrrBmk: z.number().optional().nullable(),
  hurdleRateBmk: z.number().optional().nullable(),
})
