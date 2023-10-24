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
  item?: string
  itemAumPct?: number | null | undefined
  id?: number | null | undefined
  isDeleted?: boolean | null | undefined
}
export interface Project {
  name?: string
  strategy?: string
  dqmDebtType?: string
  isPartialDivestment?: boolean | null
  currency?: string
  sector?: string | null
  country?: string | null
  sectorOthers?: string
  assetType?: string | null
  approval?: {
    exchangeRate?: number
    lcToUsdRate?: string
    nec?: number | null
    tic?: number | null
    isSoftCommitment?: boolean | null
    softNec?: number
    softTic?: number
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
    gicPrice?: number | null
    gicCapRate?: number | null
    gicInterest?: number | null
    netEquityIrr?: number | null
    riskHurdleRate?: number | null
  }
  scrValidate?: boolean | string | null
}

export interface Staff {
  role?: string
  ntid?: string | null
  commitment?: number | null
}
export interface DealFormData {
  name?: string
  category?: string
  requestType?: string
  status?: string
  approvalStatus?: string
  commitmentUnit?: string
  investmentType?: string
  vintageDt?: string
  isMnpi?: boolean | null
  projects: Project[]
  staffs: Staff[]
  participants: Participants
  edmsFolder?: string
  comment?: string
  checkList?: {
    preDeal?: ChecklistItem[] | undefined
  }
}
