import { QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import { TAGS } from '../constants'
import {
  GetCompanyDecompByNetFlowSource,
  getCompanyDecompByNetFlowSource,
} from '../sources'
import type { ReFlowSectorCartoBuilder } from '../types'

export interface CompanyDecompByNetFlow {
  dimension: string
  netPriceUsd: number
  netPercent: number
}

export type GetCompanyDecompByNetFlowResult = CompanyDecompByNetFlow[]

const getCompanyDecompByNetFlow = (builder: ReFlowSectorCartoBuilder) =>
  QueryBuilder.get<GetCompanyDecompByNetFlowResult, GetCompanyDecompByNetFlowSource>(
    builder,
    getCompanyDecompByNetFlowSource,
    [TAGS.MARKET_TRANSACTIONS_CARTO_TAG]
  )

export default getCompanyDecompByNetFlow
