import { QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import { TAGS } from '../constants'
import { getDataSourceInfoSource } from '../sources'
import type { ReFlowSectorCartoBuilder } from '../types'

const getDataSourceInfo = (builder: ReFlowSectorCartoBuilder) =>
  QueryBuilder.get<null, null>(builder, getDataSourceInfoSource, [
    TAGS.MARKET_TRANSACTIONS_CARTO_TAG,
  ])

export default getDataSourceInfo
