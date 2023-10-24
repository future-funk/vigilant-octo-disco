import {
  Builder,
  abortPreviousQuery,
  createQueryParams,
} from '@bpd/bpd-web/shared/data-access'
import { generatePath } from 'react-router-dom'
import { ENDPOINTS, TAGS } from '../constants'

export interface PortfolioBreakdown {
  strategy: string
  currency: string
  country: string
  investmentVehicle: null | string
  sector: null
  mgmtTeam: null
  lfyIrr: null | number
  l3FyIrr: null | number
  l5FyIrr: null | number
  l7FyIrr: null | number
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
  expDollar: null | number
  aprXPercent: null | number
  aprXDollar: null
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
  lastUpdateDt: null | string
}

export type GetPortfolioBreakdownResult = PortfolioBreakdown[]
interface GetPortfolioBreakdownPayload {
  currency: string
  fiscalYear: string
  strategy: string
  projectCurrency: string
  selectedParameter: string
  team: string
}

const query = (requestPayload: GetPortfolioBreakdownPayload) => {
  const {
    currency,
    projectCurrency,
    fiscalYear,
    strategy,
    selectedParameter,
    team,
  } = requestPayload
  return {
    url: `${generatePath(ENDPOINTS.MVIRR.PORTF_BKDN_SUMMARIES, {
      team,
      fiscalYear,
    })}${createQueryParams([
      ['currency', currency],
      ['strategy', strategy],
      ['project_currency', projectCurrency],
      ['selected_parameter', selectedParameter],
    ])}`,
  }
}

const getPortfolioBreakdown = (builder: Builder) => {
  return builder.query<
    GetPortfolioBreakdownResult,
    GetPortfolioBreakdownPayload
  >({
    providesTags: [TAGS.MV_IRR_API_TAG],
    async queryFn(arg, api, extraOptions, baseQuery) {
      abortPreviousQuery(api)
      const { error, data, meta } = await baseQuery(query(arg))
      if (error) return { error, meta }
      return { data: data as GetPortfolioBreakdownResult, meta }
    },
  })
}

export default getPortfolioBreakdown
