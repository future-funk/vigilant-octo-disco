import { DealReqType } from '@bpd/ui/constants'

export interface ChecklistItem {
  id?: number
  type?: string
  description?: string
  displayIndex?: number
  isEnabled?: boolean | null
  value?: string
}

interface Participants {
  rpo?: {
    roleType?: string
    roleOption?: string
    displayName?: string
    isDeleted?: boolean | undefined
  }[]
}
export interface BreakDown {
  item: string
  itemAumPct?: number | null | undefined
  id?: number | null | undefined
  isDeleted?: boolean | null | undefined
}
export interface Project {
  id: number
  dealId: string
  masterProjectCode: string
  name: string
  strategy: string
  dqmDebtType: string
  currency: string
  mgmtTeam: string
  sector: string
  country: string
  region: string
  isPartialDivestment: boolean
  createdDt: string
  createdUser: string
  createdUserName: string
  lastUpdateDt: string
  lastUpdateUser: string
  lastUpdateUserName: string
  approval?: {
    id: number
    projectId: number
    exchangeRate: number
    lcToUsdRate: number
    nec: number
    necUsd: number
    tic: number
    ticUsd: number
  }
  aumBreakdowns?: {
    sector?: BreakDown[] | null | undefined
    country?: BreakDown[] | null | undefined
    assetType?: BreakDown[] | null | undefined
  }
  counterParty?: {
    seller?: string
    broker?: string
    generalPartner?: string
  } | null
  uw: {
    id: number
    projectId: number
    netEquityIrr: number
    riskHurdleRate: number
    gicPrice?: number
    gicCapRate?: number
    gicInterest?: number | null
  }
  properties: { id: number; name: 'string' }[]
  tickers: string[]
  metrics: string[]
  calendarBreakdowns: {
    calendar: { id: string; item: string; itemDate: string }[]
  }
}

export interface Staff {
  id: number
  dealId: string
  ntid: string
  role: string
  label: string
  commitment: number
  commitmentHours: number
  initials: string
  name: string
  emailAddress: string
  sequence: number
  isLeft: boolean
}
export interface Deal {
  id: string
  name: string
  status: string
  approvalStatus: string
  requestType: DealReqType
  investmentType: string
  investmentTheme: string
  description: string
  team: string
  subTeam: string
  category: string
  source: string
  vintageDt: string
  intensity: string
  successProbability: string
  isMnpi: boolean
  dqmDebtType: string
  teamBluePrintUrl: string
  projectIrr: number
  comment: string
  commentCount: number
  commentLastUpdateUser: string
  commentLastUpdateUserName: string
  commentLastUpdateDt: string
  comments: string[]
  commitmentUnit: string
  totalCommitment: number
  totalCommitmentHours: number
  staffs: Staff[]
  extAugStaffs: [
    {
      id: number
      dealId: string
      ntid: string
      initials: string
      emailAddress: string
      name: string
    }
  ]
  projects: Project[]
  statuses: string[]
  createdDt: string
  createdUser: string
  createdUserName: string
  lastUpdateDt: string
  lastUpdateUser: string
  lastUpdateUserName: string
  sellers: string
  generalPartners: string
  sector: string
  country: string
  region: string
  currency: string
  strategy: string
  tic: number
  ticUsd: number
  nec: number
  necUsd: number
  gicPrice: number
  gicPriceUsd: number
  netEquityIrr: number
  riskHurdleRate: number
  masterProjects: string
  vaProxy: number
  dvapaProxy: number
  lcdLink: string[]
  path: string[]
  remainLimit: number
  currentApprovalLimit: number
  isWrite: number
  approvalConditions: { id: number }[]
  participants: Participants
}
