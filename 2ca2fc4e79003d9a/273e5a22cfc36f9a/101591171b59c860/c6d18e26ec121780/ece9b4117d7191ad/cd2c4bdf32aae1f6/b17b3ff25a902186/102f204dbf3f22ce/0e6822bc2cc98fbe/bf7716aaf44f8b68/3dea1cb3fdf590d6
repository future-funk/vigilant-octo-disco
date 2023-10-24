import { reject, size } from 'lodash'
import { z } from 'zod'

export const rpoZschema = z
  .array(
    z.object({
      roleType: z.string().optional(),
      roleOption: z.string().optional(),
      displayName: z.string().optional(),
      isDeleted: z.boolean().optional(),
    })
  )
  .refine(
    (rpoList) => {
      const filtered = reject(rpoList, { isDeleted: true })
      return size(filtered) > 0
    },
    { message: '302', path: ['rpo'] }
  )
