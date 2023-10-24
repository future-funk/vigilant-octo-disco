import { BpdSelectProps } from '@bpd/bpd-web/shared/ui'
import { DealReqType, DEAL_REQ_TYPE } from '@bpd/ui/constants'
import { map } from 'lodash'

export const DEFAULT_PROJECT_REQ_TYPE_TITLE_MAP = map(
  [DEAL_REQ_TYPE.GIPS, DEAL_REQ_TYPE.OTHERS],
  (type: DealReqType) => ({ label: type, key: type, value: type })
) as unknown as BpdSelectProps['items']
