import { QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import { chain } from 'lodash'
import { TAGS } from '../constants'
import { getBaseSectorsSource } from '../sources'
import type { ReFlowSectorCartoBuilder } from '../types'

export interface BaseSector {
  sector: string
}

export type GetBaseSectorResult = BaseSector[]

const getBaseSectors = (builder: ReFlowSectorCartoBuilder) =>
  QueryBuilder.get<GetBaseSectorResult, null>(
    builder,
    getBaseSectorsSource,
    [TAGS.MARKET_TRANSACTIONS_CARTO_TAG],
    {
      transformResponse: (response: GetBaseSectorResult) =>
        chain(response)
          .map((sector: BaseSector) => ({
            ...sector,
          }))
          .value(),
    }
  )

export default getBaseSectors
