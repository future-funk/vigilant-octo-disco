import { DealFormData as BaseDealFormData } from '@bpd/daw/shared/core'

export interface DealFormData extends BaseDealFormData {
  isIcmReportDeal?: boolean | null
}
