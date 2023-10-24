import {
  Builder,
  abortPreviousQuery,
  createQueryParams,
} from '@bpd/bpd-web/shared/data-access'
import { generatePath } from 'react-router-dom'
import { ENDPOINTS, TAGS } from '../constants'

export interface GetProjectCashflowResult {
  summary: CashflowSummary
  cashFlows: ProjectCashFlow[]
}

export interface ProjectCashFlow {
  txnDt: Date
  source: string
  total: number | null
  apr: null
  cc: null
  roc: null
  ifo: null
  pe: null
  val: number | null
  lastUpdateDt: null
  lastUpdateUser: null
  lastUpdateUserName: null
  lastUpdateUserInitials: null
}

export interface CashflowSummary {
  lfyIrr: number
  l3fyIrr: number
  l5fyIrr: number
  l7fyIrr: number
  inceptionIrr: number
  irr: null
  irrX: null
  l3fyIrrX: null
  l5fyIrrX: null
  l7fyIrrX: null
  inceptionIrrX: null
  numDays: null
  aprPercent: null
  aprDollar: null
  incPercent: null
  incDollar: number
  expPercent: null
  expDollar: number
  aprXPercent: null
  aprXDollar: null
  incXPercent: null
  incXDollar: number
  expXPercent: null
  expXDollar: number
  apr: null
  cc: number
  roc: number
  ifo: number
  pe: number
  bmv: number
  emv: null
  emvDt: null
  isLfyIrrHidden: boolean
  isL3fyIrrHidden: boolean
  isL5fyIrrHidden: boolean
  isL7fyIrrHidden: boolean
  isInceptionIrrHidden: boolean
  isIrrHidden: boolean
  isIrrXHidden: boolean
  isL3fyIrrXHidden: boolean
  isL5fyIrrXHidden: boolean
  isL7fyIrrXHidden: boolean
  isInceptionIrrXHidden: boolean
  errorCode: string
  lastUpdateDt: null
}

interface GetProjectCashflowPayload {
  team: string
  fiscalYear: string
  projId: string
  activeCurrency: string
}

const query = (requestPayload: GetProjectCashflowPayload) => {
  const { team, fiscalYear, projId, activeCurrency } = requestPayload
  return {
    url: `${generatePath(ENDPOINTS.PROJECT.SUMMARY_CASHFLOW, {
      team,
      fiscalYear,
      projId,
    })}${createQueryParams([['currency', activeCurrency]])}`,
  }
}

const getProjectCashflow = (builder: Builder) => {
  return builder.query<GetProjectCashflowResult, GetProjectCashflowPayload>({
    providesTags: [TAGS.MV_IRR_API_TAG],
    async queryFn(arg, api, extraOptions, baseQuery) {
      abortPreviousQuery(api)
      const { error, data, meta } = await baseQuery(query(arg))
      if (error) return { error, meta }
      return { data: data as GetProjectCashflowResult, meta }
    },
  })
}

export default getProjectCashflow
