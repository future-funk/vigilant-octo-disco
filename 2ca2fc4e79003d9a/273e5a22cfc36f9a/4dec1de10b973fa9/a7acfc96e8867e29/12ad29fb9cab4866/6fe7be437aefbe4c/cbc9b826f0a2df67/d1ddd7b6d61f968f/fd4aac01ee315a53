import { QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import { LogisticsCartoBuilder } from '../types'
import { LOGISTICS_CARTO_TAG } from '../constants'
import { GetAddressSearchSource, getAddressSearchSource } from '../sources'

export type GetSearchResult = any[]

const getAddressSearch = (builder: LogisticsCartoBuilder) =>
  QueryBuilder.get<GetSearchResult, GetAddressSearchSource>(
    builder,
    getAddressSearchSource,
    [LOGISTICS_CARTO_TAG]
  )

export default getAddressSearch
