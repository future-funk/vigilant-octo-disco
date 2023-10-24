import { STAGES } from '@bpd/bpd-web/shared/core'
import { DEFAULT_SORT } from './SORTING'
import { VINTAGE_OPTIONS } from './VINTAGE_OPTIONS'

export const DEFAULT_STATE = {
  filters: {
    status: [
      STAGES.NEW_DEAL_FOR_DISCUSSION,
      STAGES.UNDER_CONSIDERATION,
      STAGES.UNDER_CONSIDERATION_APPROVED,
    ],
    vintage: VINTAGE_OPTIONS.SINCE_INCEPTION,
  },
  sort: DEFAULT_SORT,
}
