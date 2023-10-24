import { QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import { TAGS } from '../constants'
import { GetCompanyTxnsSource, getCompanyTxnsSource } from '../sources'
import type { ReFlowSectorCartoBuilder } from '../types'

export interface CompanyTxn {
  txnDt: string
  propName: string
  address: string
  country: string
  nra: number
  uom: string
  sector: string
  priceUsd: number
  capRate: number | null
  numPropInPortfolio: number
  priceUsdPuom: number
  buyers: string
  sellers: string
  txnType: string
}

export type GetCompanyTxnResult = CompanyTxn[]

const getCompanyTxns = (builder: ReFlowSectorCartoBuilder) =>
  QueryBuilder.get<GetCompanyTxnResult, GetCompanyTxnsSource>(
    builder,
    getCompanyTxnsSource,
    [TAGS.MARKET_TRANSACTIONS_CARTO_TAG]
  )

export default getCompanyTxns
