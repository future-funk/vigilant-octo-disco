import { Builder, abortPreviousQuery } from '@bpd/bpd-web/shared/data-access'
import { ENDPOINTS, TAGS } from '../constants'

export interface GetEndFyResult {
  fy: number
}

export interface GetEndFYPayload {}

const getEndFy = (builder: Builder) => {
  return builder.query<GetEndFyResult, GetEndFYPayload>({
    providesTags: [TAGS.MV_IRR_API_TAG],
    async queryFn(arg, api, extraOptions, baseQuery) {
      abortPreviousQuery(api)
      const { error, data, meta } = await baseQuery({
        url: ENDPOINTS.META.FY,
      })
      if (error) return { error, meta }
      return { data: data as GetEndFyResult, meta }
    },
  })
}

export default getEndFy
