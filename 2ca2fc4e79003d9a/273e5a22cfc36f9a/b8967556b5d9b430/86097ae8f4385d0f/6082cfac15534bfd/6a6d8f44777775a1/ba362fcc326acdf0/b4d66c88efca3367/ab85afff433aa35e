import {
  Builder,
  abortPreviousQuery,
  createQueryParams,
} from '@bpd/bpd-web/shared/data-access'
import { generatePath } from 'react-router-dom'
import { ENDPOINTS, TAGS } from '../constants'

interface Staff {
  roleName: string
  ntid: string
  name: string
  initials: string
}

export interface ProjectSummary {
  projId: string
  projName: string
  strategy: string
  country: string
  currency: string
  invtVehicle: string
  sector: string
  staffs: Staff[]
  comment: null
  lfyIrr: number
  l3FyIrr: number
  l5FyIrr: number
  l7FyIrr: number | null
  inceptionIrr: number
  irr: null
  irrX: null
  l3FyIrrX: null
  l5FyIrrX: null
  l7FyIrrX: null
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
  lastUpdateDt: null
}

export type GetProjectSummaryResult = ProjectSummary[]
interface GetProjectSummaryPayload {
  currency: string
  fiscalYear: string
  team: string
}

const query = (requestPayload: GetProjectSummaryPayload) => {
  const { currency, fiscalYear, team } = requestPayload
  return {
    url: `${generatePath(ENDPOINTS.MVIRR.PROJ_SUMMARIES, {
      team,
      fiscalYear,
    })}${createQueryParams([['currency', currency]])}`,
  }
}

const getProjectSummary = (builder: Builder) => {
  return builder.query<GetProjectSummaryResult, GetProjectSummaryPayload>({
    providesTags: [TAGS.MV_IRR_API_TAG],
    async queryFn(arg, api, extraOptions, baseQuery) {
      abortPreviousQuery(api)
      const { error, data, meta } = await baseQuery(query(arg))
      if (error) return { error, meta }
      return { data: data as GetProjectSummaryResult, meta }
    },
  })
}

export default getProjectSummary
