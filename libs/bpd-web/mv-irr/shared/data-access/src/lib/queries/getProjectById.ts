import { Builder, abortPreviousQuery } from '@bpd/bpd-web/shared/data-access'
import { generatePath } from 'react-router-dom'
import { ENDPOINTS, TAGS } from '../constants'

export interface Staff {
  fyStartDt: string
  team: string
  projId: string
  roleName: string
  ntid: string
  name: string
  initials: string
}

export interface GetProjectByIdResult {
  fyStartDt: string
  team: string
  projId: string
  projName: string
  lclCurr: string
  strategy: string
  region: string
  country: string
  sector: string
  invtVehicle: string
  invtStartDt: string
  bmvDt: string
  bmvLcy: number
  bmvUsd: number
  sharepointFolder: string
  emvType: string
  emvLastUpdateDt: string
  staffs: Staff[]
}

interface GetProjectByIdPayload {
  fiscalYear: string
  team: string
  projId: string
}

const query = (requestPayload: GetProjectByIdPayload) => {
  const { fiscalYear, team, projId } = requestPayload
  return {
    url: generatePath(ENDPOINTS.PROJECT.PROJECT_BY_ID, {
      team,
      fiscalYear,
      projId,
    }),
  }
}

const getProjectById = (builder: Builder) => {
  return builder.query<GetProjectByIdResult, GetProjectByIdPayload>({
    providesTags: [TAGS.MV_IRR_API_TAG],
    async queryFn(arg, api, extraOptions, baseQuery) {
      abortPreviousQuery(api)
      const { error, data, meta } = await baseQuery(query(arg))
      if (error) return { error, meta }
      return { data: data as GetProjectByIdResult, meta }
    },
  })
}

export default getProjectById
