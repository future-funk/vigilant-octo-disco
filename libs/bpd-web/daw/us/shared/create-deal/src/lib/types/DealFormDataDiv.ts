import { DealFormDataPjv, ProjectPjv } from './DealFormDataPjv'

interface Project extends ProjectPjv {
  counterParty: {
    buyer?: string
    broker?: string
    generalPartner?: string
  }
}
export interface DealFormDataDiv extends DealFormDataPjv {
  projects: Project[]
}
