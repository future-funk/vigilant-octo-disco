import {
  Builder,
  createQueryParams,
  QueryBuilder,
} from '@bpd/bpd-web/shared/data-access'
import { generatePath } from 'react-router-dom'
import { ENDPOINTS, DAW_TAG } from '../constants'

export interface SearchStaff {
  ntid: string
  name: string
}
export type GetSearchStaffsResult = SearchStaff[]

export type GetSearchStaffsPayload = {
  query: string
}

const getSearchStaffs = (builder: Builder) =>
  QueryBuilder.get<GetSearchStaffsResult, GetSearchStaffsPayload>(
    builder,
    ({ query }) => ({
      url: `${generatePath(ENDPOINTS.SEARCH_STAFFS)}${createQueryParams([
        ['query', query],
      ])}`,
    }),
    [DAW_TAG]
  )

export default getSearchStaffs
