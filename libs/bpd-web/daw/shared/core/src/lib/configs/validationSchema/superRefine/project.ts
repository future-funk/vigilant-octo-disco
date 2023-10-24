import { DEAL_STRATEGY } from '@bpd/ui/constants'
import { chain, includes, isNil, isNumber, some } from 'lodash'
import { z } from 'zod'
import { ERROR_MESSAGES } from '../../../constants'
import { Project } from '../types'

export const superRefineProject = (
  { strategy, dqmDebtType, sectorOthers, uw }: any,
  ctx: z.RefinementCtx
) => {
  if (
    includes(
      [DEAL_STRATEGY.IMC_BRICKS_AND_MORTAR, DEAL_STRATEGY.RE_BRICKS_AND_MORTAR],
      strategy
    ) &&
    isNil(dqmDebtType)
  ) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: '302',
      path: ['dqmDebtType'],
    })
  }
  if (chain(sectorOthers).trim().size().value() >= 128) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: ERROR_MESSAGES.detailsOfOthersLengthExceeded,
      path: ['sectorOthers'],
    })
  }
  if (uw.gicInterest < 0 || uw.gicInterest > 1) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: ERROR_MESSAGES.shareholdingNumberRangeError,
      path: ['uw', 'gicInterest'],
    })
  }
  return true
}

export const superRefineScrTic = (
  { scrValidate, approval }: Project,
  ctx: z.RefinementCtx
) => {
  if (
    some([!scrValidate, scrValidate === 'error']) &&
    isNumber(approval?.tic)
  ) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message:
        scrValidate === 'error'
          ? ERROR_MESSAGES.errorScrValidate
          : ERROR_MESSAGES.failedScrValidate,
      path: ['approval', 'tic'],
    })
  }
}
