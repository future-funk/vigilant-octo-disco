export type DirectoryMapColorGroup = string
export type DirectoryTabs = 'overview' | 'insight'
export type DirectoryOverviewTabs = 'card' | 'table'

export interface DirectoryKeys {
  [key: string]: string | number | null
}

export interface Directory extends DirectoryKeys {
  bpInvStatus: string
  bpName: string
  bpPriceType: string
  bpStatusWType: string
  bpValuationCurr: string
  bp_cap_rate: number
  bp_gfa: number
  bp_valuation: number
  bp_valuation_eur_psm: number
  bp_valuation_puom: number
  bp_valuation_usd_psm: number
  cartodb_id: number
  days_since_acq_vintage_dt: number
  dealAreaUom: string
  dealBpId: string
  dealBroker: string
  dealId: string
  dealName: string
  dealSeller: string
  dealStatus: string
  dealTradeCloseBuyer: string
  dealUwImplEqCommit: string
  deal_asking_cap_rate: number
  deal_asking_pnra: number
  deal_asking_price: number
  deal_asking_price_per_unit: number
  deal_asking_price_puom: number
  deal_asking_shareholding: number
  deal_trade_close_cap_rate: number
  deal_trade_close_price: number
  deal_trade_close_price_punit: number
  deal_trade_close_price_puom: number
  lastUpdateUser: string
  lat: number
  layerName: string
  lng: number
  projCity: string
  projCountry: string
  projCurr: string
  projPropCount: string
  projSector: string
  projSubSector: string
  proj_loan_balance: number
  proj_loan_int_rate: number
  proj_shareholding_perc: number
  propAddress: string
  propCity: string
  propId: string
  propName: string
  propThumbnailUrl: string
  propType: string
  propUom: string
  propValuationCurr: string
  propZip: string
  prop_cap_rate: number
  prop_nra: number
  prop_num_units: number
  prop_occ_rate: number
  prop_sqft: number
  prop_sqm: number
  prop_valuation: number
  prop_valuation_eur: number
  prop_valuation_usd: number
  source: string
  team: string
  type: string
  distance: number
  developmentStage: string
  gfaSqm: number
  currentOccupancy: number
  passingNerDay: number
  assetName: string
  dealTradeCloseDt: string
  dealTradeClosePrice: number
  bpCapRate: number
  projName: string
  projId: number
  projFwdLvgIrr: string
  bpValuation: number
  bpValuationPuom: number
  propNra: number
  propWaleAreaYr: string
  city: string
  cityTier: string
  assetType: string
  devCompletionDate: string
}

export interface legendValue {
  name: string,
  legendName: string,
  color: string,
  value?: string
}

export interface TeamValue {
  name: string,
  value: string
}

export interface DirectoryLogisticsDto {
  address: string
  approvedDate: string
  bpInvStatus: string
  assetName: string
  assetType: string
  cartodbId: number
  city: string
  cityCn: string
  cityTier: string
  constructionCostPsmGfa: number
  currentOccupancy: number
  dataDt: string
  dateLastReported: string
  dawId: string
  dealName: string
  dealStatus: string
  devCompletionDate: string
  devStartDate: string
  developmentStage: string
  developmentYieldUw: number
  district: string
  districtCn: string
  eqCommitmentMn: number
  eqCommitmentUsdMn: number
  exitCapRateActual: number
  exitCapRateUw: number
  gfaSqm: number
  gicOwnership: number
  irrUw: number
  keyTenants: string
  landAcquisitionDate: string
  landAreaSqm: number
  landCostPsmGfa: number
  landTenureExpiry: string
  landZoning: string
  lat: number
  leaseInceptionDate: string
  leaseUpPeriod: string
  lng: number
  marketNerDay: number
  nerDayUw: number
  nerDayUwDate: string
  nerType: string
  nlaSqm: number
  partner: string
  passingNerDay: number
  passingNerDayType: string
  projectCurrency: string
  rentGrowthUw: string
  rentGrowthUwNote: string
  seedAsset: string
  stabilizedOccupancy: number
  team: string
  theGeom: string
  theGeomWebmercator: string
  unitAcqPricePsm: number
  warehouseDesign: string
}