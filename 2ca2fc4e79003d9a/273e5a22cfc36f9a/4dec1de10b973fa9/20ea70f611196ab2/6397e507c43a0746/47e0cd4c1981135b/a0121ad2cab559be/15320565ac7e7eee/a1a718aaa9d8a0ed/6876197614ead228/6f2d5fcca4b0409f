import { QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import { DIRECTORY_CARTO_TAG } from '../constants'
import { getMarketsSource } from '../sources'
import { DirectoryCartoBuilder, SourceLayerTypes as GetMarketsSource } from '../types'
import { Directory } from '../types/DtoTypes'



export type GetMarketsResult = Directory[]

const getMarkets = (builder: DirectoryCartoBuilder) =>
  QueryBuilder.get<GetMarketsResult, GetMarketsSource>(
    builder,
    getMarketsSource,
    [DIRECTORY_CARTO_TAG]
  )

export default getMarkets
