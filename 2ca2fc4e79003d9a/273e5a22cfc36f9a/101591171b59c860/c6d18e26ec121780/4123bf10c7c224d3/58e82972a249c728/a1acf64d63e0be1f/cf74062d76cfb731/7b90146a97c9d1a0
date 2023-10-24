import {
  Builder,
  createQueryParams,
  QueryBuilder,
} from '@bpd/bpd-web/shared/data-access'
import { generatePath } from 'react-router-dom'
import { ENDPOINTS, DAW_TAG } from '../constants'

export interface RekiProjectSearch {
  projId: string
  projName: string
}

export type GetSearchRekiProjectsResult = RekiProjectSearch[]

export type GetSearchRekiProjectsPayload = {
  searchText: string
}

const getSearchRekiProjects = (builder: Builder) =>
  QueryBuilder.get<GetSearchRekiProjectsResult, GetSearchRekiProjectsPayload>(
    builder,
    ({ searchText }) => ({
      url: `${generatePath(ENDPOINTS.SEARCH_REKI_PROJECTS)}${createQueryParams([
        ['search_text', searchText],
      ])}`,
    }),
    [DAW_TAG]
  )

export default getSearchRekiProjects
