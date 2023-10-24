export interface LogisticsResponseDto {
  address: string
  assetType: string
  cartodbId: number
  country: string
  currency: string
  lat: number
  lng: number
  name: string
  occupancy: number
  popCoverage: number
  projectId: string
  projectName: string
  propId: string
  purchasePriceLcy: number
  reversionPotential: number
  status: string
  totalErvPsmPaLcy: number
  totalGlaSqm: number
  totalRentPsmPaLcy: number
  walb: number
  wale: number
  distance: number
  leasesCount: number
}

export interface AnalyticsResponseDto {
  country: string
  totalGlaSqm?: number
  totalRentPaEur?: number
  totalAssets?: number
  reversionPotential?: number
  occupancy?: number
  walb?: number
  wale?: number
  type: string
  year: number
  keyTenantIndustry: string
}

export interface LogisticsFilterDto
  extends Pick<
    LogisticsResponseDto,
    'projectName' | 'assetType' | 'country' | 'status'
  > {}
