const MV_IRR_BASE = 'mv_irr'

const META_ENDPOINTS = {
  FY: `${MV_IRR_BASE}/fy`,
  ATLAS_CF_CLASSIFICATION: `${MV_IRR_BASE}/txn-mappings`,
}

const MV_IRR_API_BASE = `${MV_IRR_BASE}/:team/:fiscalYear`

const MVIRR_ENDPOINTS = {
  CASHFLOW_DOWNLOAD: `${MV_IRR_API_BASE}/cash_flow/download`,
  CASHFLOW_TEMPLATE: `${MV_IRR_API_BASE}/importtemplate/cash-flows`,
  MV_TEMPLATE: `${MV_IRR_API_BASE}/importtemplate/market-values`,
  CASHFLOW_UPLOAD: `${MV_IRR_API_BASE}/upload/cash-flows`,
  MV_UPLOAD: `${MV_IRR_API_BASE}/upload/market-values`,

  SUMMARIES: `${MV_IRR_API_BASE}/summaries`,
  PORTF_BKDN_SUMMARIES: `${MV_IRR_API_BASE}/portf-bkdn-summaries`,
  PROJ_SUMMARIES: `${MV_IRR_API_BASE}/proj-summaries`,
  REFRESH_PROJECT: `${MV_IRR_API_BASE}/irr/generate_proj/:projId`,
}

const PROJECT_BASE = `${MV_IRR_API_BASE}/projects/:projId`
const PROJECT_ENDPOINTS = {
  PROJECT_BY_ID: `${PROJECT_BASE}`,
  CASHFLOWS_HISTORY: `${PROJECT_BASE}/cash-flows/history`,
  CATEGORIES_HISTORY: `${PROJECT_BASE}/categories/history`,
  COMMENTS: `${PROJECT_BASE}/comments`,
  COMMENTS_HISTORY: `${PROJECT_BASE}/comments/history`,
  CASHFLOW_TEMPLATE: `${PROJECT_BASE}/importtemplate/cash-flows`,
  CATEGORY_TEMPLATE: `${PROJECT_BASE}/importtemplate/categories`,
  MV_HISTORY: `${PROJECT_BASE}/market-values/history`,
  SUMMARY_CASHFLOW: `${PROJECT_BASE}/summary-cash-flows`,
  CASHFLOW_UPLOAD: `${PROJECT_BASE}/upload/cash-flows`,
  CATEGORY_UPLOAD: `${PROJECT_BASE}/upload/categories`,
}

export const ENDPOINTS = {
  META: META_ENDPOINTS,
  MVIRR: MVIRR_ENDPOINTS,
  PROJECT: PROJECT_ENDPOINTS,
}
