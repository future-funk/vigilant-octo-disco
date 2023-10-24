import { QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import { TAGS } from '../constants'
import { GetCompaniesSource, getCompaniesSource } from '../sources'
import type { ReFlowSectorCartoBuilder } from '../types'

export interface Company {
  companyName: string
  companyCountry: string
  buyTotalPriceUsd: number
  buyTxnCount: number
  sellTotalPriceUsd: number
  sellTxnCount: number
  totalPriceUsd: number
  netTotalPriceUsd: number
  netTxnCount: number
}

export type GetCompanyResult = Company[]

const getCompanies = (builder: ReFlowSectorCartoBuilder) =>
  QueryBuilder.get<GetCompanyResult, GetCompaniesSource>(
    builder,
    getCompaniesSource,
    [TAGS.MARKET_TRANSACTIONS_CARTO_TAG]
  )

export default getCompanies
