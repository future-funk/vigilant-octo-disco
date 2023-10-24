import {
  Builder,
  abortPreviousQuery,
  createQueryParams,
} from '@bpd/bpd-web/shared/data-access'
import { generatePath } from 'react-router-dom'
import { ENDPOINTS, TAGS } from '../constants'

export interface PortfolioSummary {
  strategy: string
  currency: string
  country: null | string
  investmentVehicle: null | string
  sector: null | string
  mgmtTeam: null | string
  lfyIrr: null
  l3FyIrr: null
  l5FyIrr: null
  l7FyIrr: null
  inceptionIrr: null
  irr: null
  irrX: null
  l3FyIrrX: null
  l5FyIrrX: null
  l7FyIrrX: null
  inceptionIrrX: null | number
  numDays: null | number
  aprPercent: null | number
  aprDollar: null | number
  incPercent: null | number
  incDollar: null | number
  expPercent: null | number
  expDollar: number
  aprXPercent: null
  aprXDollar: null | number
  incXPercent: null | number
  incXDollar: null | number
  expXPercent: null | number
  expXDollar: null | number
  apr: null
  cc: number
  roc: number
  ifo: number
  pe: number
  bmv: number
  emv: number
  emvDt: null
  isLfyIrrHidden: boolean
  isL3FyIrrHidden: boolean
  isL5FyIrrHidden: boolean
  isL7FyIrrHidden: boolean
  isInceptionIrrHidden: boolean
  isIrrHidden: boolean
  isIrrXHidden: boolean
  isL3FyIrrXHidden: boolean
  isL5FyIrrXHidden: boolean
  isL7FyIrrXHidden: boolean
  isInceptionIrrXHidden: boolean
  errorCode: string
  lastUpdateDt: string | null
}

export type GetPortfolioSummaryResult = PortfolioSummary[]

interface GetPortfolioSummaryPayload {
  currency: string
  projectCurrency: string
  fiscalYear: string
  team: string
}

const query = (requestPayload: GetPortfolioSummaryPayload) => {
  const { currency, projectCurrency, fiscalYear, team } = requestPayload
  return {
    url: `${generatePath(ENDPOINTS.MVIRR.SUMMARIES, {
      team,
      fiscalYear,
    })}${createQueryParams([
      ['currency', currency],
      ['project_currency', projectCurrency],
    ])}`,
  }
}

const getPortfolioSummary = (builder: Builder) => {
  return builder.query<GetPortfolioSummaryResult, GetPortfolioSummaryPayload>({
    providesTags: [TAGS.MV_IRR_API_TAG],
    async queryFn(arg, api, extraOptions, baseQuery) {
      abortPreviousQuery(api)
      const { error, data, meta } = await baseQuery(query(arg))
      if (error) return { error, meta }
      return { data: data as GetPortfolioSummaryResult, meta }
    },
  })
}

export default getPortfolioSummary
