export interface DealProjectDto {
  dealId: string
  discretionAbilityScale?: string
  id: number
  investmentVehicle: string
  mgmtTeam: string
  projectCode?: string
  // TODO: Type this properly
  uw?: Record<string, number>
  masterProjectCode?: string
  masterProjectName?: string
  calendarBkdns?: any[]
  projectType?: string
}

export type DealProjectsDto = DealProjectDto[]

export interface DealStaffDto {
  commitment?: number
  commitmentHours: number
  dealId: string
  emailAddress: string
  id: number
  initials: string
  isLeft: boolean
  label: string
  name: string
  ntid: string
  role: string
  sequence: number
}

export type DealStaffsDto = DealStaffDto[]

export interface DealExAugStaffDto {
  id: number
  dealId: string
  ntid: string
  initials: string
  emailAddress: string
  name: string
}

export type DealExAugStaffsDto = DealExAugStaffDto[]

export interface DealDto {
  approvalStatus: string
  brokers?: string
  category: string
  comment: string
  country: string
  createdDt: string
  createdUser: string
  createdUserName: string
  currency: string
  dealCode: string
  description: string
  dqmDebtType?: string
  dealClosingDate?: string
  extAugStaffs: DealExAugStaffsDto
  gicPrice: number
  gicPriceUsd: number
  gicCapRate?: number
  id: string
  intensity?: string
  investmentType: string
  investmentVehicle: string
  investmentTheme?: string
  isWrite: number
  workspace?: any[]
  lastUpdateDt: string
  lastUpdateUserName: string
  name: string
  nec: number
  necUsd: number
  gicInterest?: number
  netEquityIrr: number
  projects: DealProjectsDto
  projectCodes?: string
  region: string
  requestType: string
  riskHurdleRate: number
  sector: string
  sharedTeams: string
  staffs: DealStaffsDto
  status: string
  strategy: string
  team: string
  subTeam?: string
  tic: number
  ticUsd: number
  totalCommitment: number
  totalCommitmentHours: number
  vintageDt: string
  successProbability?: string
  discretionAbilityScale?: string
  sellers?: string
  generalPartners?: string
  stratsTargetCompletionDt?: string
  normalizedStaffs?: string
}

export type DealsDto = DealDto[]

export interface CommentDto {
  comment: string
  createdDt: string
  createdUser: string
  createdUserName: string
  dealId: string
  id: string
  lastUpdateDt: string
  lastUpdateUser: string
  lastUpdateUserName: string
}

export type CommentsDto = CommentDto[]

export type DealHistoryIndDto = 'INSERT' | 'DELETE' | 'UPDATE'

export interface DealHistoryDto {
  dealId: string
  field: string
  id: number
  lastUpdateDt: string
  lastUpdateInd: DealHistoryIndDto
  lastUpdateUser: string
  lastUpdateUserName?: string
  oldVal: string
  newVal?: string
  sysDt: string
}

export type DealHistoriesDto = DealHistoryDto[]
