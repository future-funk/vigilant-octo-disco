import { forEach, get, isNil, trim } from 'lodash'
import { z } from 'zod'
import { ERROR_MESSAGES } from '../../../constants'
import { Project } from '../types'

export const superRefineSoftCommitment = (
  approvalObj: Project['approval'],
  ctx: z.RefinementCtx
) => {
  if (approvalObj?.isSoftCommitment) {
    let hasError = false
    forEach(['softNec', 'softTic'], (property: string) => {
      if (isNil(get(approvalObj, property))) {
        hasError = true
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: '302',
          path: [property],
        })
      }
    })
    if (hasError) return z.NEVER
    if (approvalObj.softNec! > approvalObj.softTic!) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: ERROR_MESSAGES.lessThanEqSoftTIC,
        path: ['softNec'],
      })
    }
    if (hasError) return z.NEVER
    if (approvalObj.softNec! > approvalObj.nec!) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: ERROR_MESSAGES.lessSoftThanNec,
        path: ['softNec'],
      })
    }
  }

  return true
}
