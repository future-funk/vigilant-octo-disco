import { QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import { DIRECTORY_CARTO_TAG } from '../constants'
import { getSearchSource, GetSearchSource } from '../sources'
import { DirectoryCartoBuilder } from '../types'

export type GetDirectorySearchResult = any[]

const getSearch = (builder: DirectoryCartoBuilder) =>
  QueryBuilder.get<GetDirectorySearchResult, GetSearchSource>(
    builder,
    getSearchSource,
    [DIRECTORY_CARTO_TAG]
  )

export default getSearch
