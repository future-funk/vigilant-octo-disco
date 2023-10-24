import { ProjectFormData as BaseProjectFormData } from '@bpd/daw/shared/project'

interface Projects {
  name?: string
  strategy?: string
  dqmDebtType?: string
  mgmtTeam?: string
  sector?: string
  country?: string
  counterParty?: {
    seller?: string
    broker?: string
    generalPartner?: string
    legalRep?: string
  } | null
}
export interface ProjectFormData extends BaseProjectFormData {
  description?: string
  projects: Projects[]
  subTeam?: string
  commitmentUnit?: string
}
