import { DealFormData as BaseDealFormData } from '@bpd/daw/shared/core'

export interface DealFormData extends BaseDealFormData {
  successProbability?: string
  investmentTheme?: string
  subTeam?: string
}
