import { isNil } from 'lodash'
import { z } from 'zod'
import { requiredNumberZschema } from './requiredNumberZschema'
import { ERROR_MESSAGES } from '../../../constants'
import { Project } from '../types'
import { superRefineSoftCommitment } from '../superRefine'

export const superRefineApproval = (
  approvalObj: Project['approval'],
  ctx: z.RefinementCtx
) => {
  if (
    !isNil(approvalObj?.nec) &&
    !isNil(approvalObj?.tic) &&
    approvalObj!.nec > approvalObj!.tic!
  ) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: ERROR_MESSAGES.lessThanTIC,
      path: ['nec'],
    })
  }
  return true
}

export const approvalZschema = z
  .object({
    exchangeRate: z
      .number()
      .optional()
      .refine((value) => !isNil(value), {
        message: '302',
      }),
    lcToUsdRate: z.string().optional(),
    nec: requiredNumberZschema,
    tic: requiredNumberZschema,
    isSoftCommitment: z.boolean().nullable().optional(),
    softNec: z.number().optional(),
    softTic: z.number().optional(),
  })
  .superRefine(superRefineApproval)
  .superRefine(superRefineSoftCommitment)
  .optional()
