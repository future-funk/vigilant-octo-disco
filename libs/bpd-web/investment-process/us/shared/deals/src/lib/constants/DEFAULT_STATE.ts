import { STAGES } from '@bpd/bpd-web/shared/core'

const DEFAULT_STATE = {
  filters: {
    status: [
      STAGES.NEW_DEAL_FOR_DISCUSSION,
      STAGES.UNDER_CONSIDERATION,
      STAGES.UNDER_CONSIDERATION_APPROVED,
    ],
  },
}

export default DEFAULT_STATE
