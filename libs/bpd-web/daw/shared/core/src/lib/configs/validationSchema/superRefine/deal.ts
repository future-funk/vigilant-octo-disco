import { DEAL_STATUS } from '@bpd/ui/constants'
import { size } from 'lodash'
import { z } from 'zod'
import { DealFormData } from '../types'

export const superRefineDeal = (
  { checkList, approvalStatus, status }: DealFormData,
  ctx: z.RefinementCtx
) => {
  if (
    approvalStatus === DEAL_STATUS.NEW_DEAL_FOR_DISCUSSION &&
    status === DEAL_STATUS.UNDER_CONSIDERATION &&
    size(checkList?.preDeal) <= 0
  ) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: '302',
      path: ['checkList', 'preDeal', '0', 'value'],
    })
  }

  return true
}
