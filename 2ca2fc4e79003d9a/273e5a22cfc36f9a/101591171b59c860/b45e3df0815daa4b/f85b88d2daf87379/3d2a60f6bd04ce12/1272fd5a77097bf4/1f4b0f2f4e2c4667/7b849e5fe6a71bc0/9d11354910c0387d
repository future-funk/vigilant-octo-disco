import { Project as BaseProject } from '@bpd/daw/shared/core'
import { DealFormData as BaseDealFormData } from './DealFormData'

export interface ProjectPjv extends BaseProject {
  divAum?: number
  divGaum?: number
  originalNec?: number
  originalTic?: number
  originalNecUsd?: number
  originalTicUsd?: number
  embeddedOpco?: boolean | null
  discretionAbilityScale?: string | null
  developmentAum?: number | null
  parentGroupId?: string | null
  programmaticJv?: boolean | null
  promoteStructure?: boolean | null
  promoteCurrency?: string | null
  mgmtTeam?: string | null
}

export interface DealFormDataPjv extends BaseDealFormData {
  projects: ProjectPjv[]
}
