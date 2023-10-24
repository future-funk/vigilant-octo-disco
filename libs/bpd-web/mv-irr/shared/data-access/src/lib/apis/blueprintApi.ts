import { transformQueries } from '@bpd/bpd-web/shared/data-access'
import { blueprintApiSlice } from '@bpd/bpd-web/shared/store'
import { TAGS } from '../constants'
import {
  getEndFy,
  getPortfolioSummary,
  getPortfolioBreakdown,
  getProjectSummary,
  getCashflowsHistory,
  getCategoriesHistory,
  getMarketValuesHistory,
  getCommentsHistory,
  getProjectById,
  getProjectCashflow,
  getProjectComment,
  putProjectComment,
  postRefreshProject,
} from '../queries'

const blueprintApi = blueprintApiSlice
  .enhanceEndpoints({ addTagTypes: [TAGS.MV_IRR_API_TAG] })
  .injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
      getEndFy: getEndFy(builder),
      getPortfolioSummary: getPortfolioSummary(builder),
      getPortfolioBreakdown: getPortfolioBreakdown(builder),
      getProjectSummary: getProjectSummary(builder),
      getCashflowsHistory: getCashflowsHistory(builder),
      getCategoriesHistory: getCategoriesHistory(builder),
      getMarketValuesHistory: getMarketValuesHistory(builder),
      getCommentsHistory: getCommentsHistory(builder),
      getProjectById: getProjectById(builder),
      getProjectCashflow: getProjectCashflow(builder),
      getProjectComment: getProjectComment(builder),
      putProjectComment: putProjectComment(builder),
      postRefreshProject: postRefreshProject(builder),
    }),
  })

export const queries = transformQueries(blueprintApi, '')

export default blueprintApi
