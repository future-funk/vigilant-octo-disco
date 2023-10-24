export const DEAL_REQ_TYPE = {
  DIRECT_INVESTMENT: 'New Investment',
  ADD_COMMITMENT: 'Additional Commitment',
  DIVESTMENT: 'Divestment',
  PRGM_JV_SUB_DEAL: 'Programmatic JV (Sub-Deal)',
  FUND_INVESTMENT: 'Fund Investment',
  GIPS: 'GIPS',
  ADE_ESG: 'ADE | ESG',
  ISPVMF_F_A_ISM: 'ISPVMF (F&A/ISM)',
  ISPVMF_FINANCING: 'ISPVMF (Financing)',
  LCD: 'LCD',
  OTHERS: 'Others',
  OTHERS_CN: 'Others (ADE | ESG, ISPVMF, LCD)',
  STRATS: 'Strats',
  SOFT_COMMITMENT_RELEASE: 'Soft Commitment Release',

  // Finance
  NEW_DEAL: 'New Deal',
  REFINANCING: 'Refinancing',
  CORP_LINE_NEW_DEAL: 'CorpLine - New Deal',
  CORP_LINE_REFI: 'CorpLine - Refi',
}

//Not working
//export type DealReqType = typeof DEAL_REQ_TYPE[keyof typeof DEAL_REQ_TYPE];

export type DealReqType =
  | 'New Investment'
  | 'Additional Commitment'
  | 'Divestment'
  | 'Programmatic JV (Sub-Deal)'
  | 'Fund Investment'
  | 'GIPS'
  | 'ADE | ESG'
  | 'ISPVMF (F&A/ISM)'
  | 'ISPVMF (Financing)'
  | 'LCD'
  | 'Others'
  | 'Others (ADE | ESG, ISPVMF, LCD)'
  | 'Strats'
  | 'Soft Commitment Release'
  | 'New Deal'
  | 'Refinancing'
  | 'CorpLine - New Deal'
  | 'CorpLine - Refi'
