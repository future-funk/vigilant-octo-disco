import { QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import { DIRECTORY_CARTO_TAG } from '../constants'
import { getHoldingSource } from '../sources'
import { DirectoryCartoBuilder, Directory, SourceLayerTypes as GetHoldingSource } from '../types'


export type GetHoldingsResults = Directory[]

const getHoldings = (builder: DirectoryCartoBuilder) => 
    QueryBuilder.get<GetHoldingsResults, GetHoldingSource>(
        builder,
        getHoldingSource,
        [DIRECTORY_CARTO_TAG]
    )

export default getHoldings