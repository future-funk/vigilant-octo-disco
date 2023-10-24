import { QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import { TAGS } from '../constants'
import { GetTopSalesSource, getTopSalesSource } from '../sources'
import type { ReFlowSectorCartoBuilder } from '../types'

export interface TopSale {
  txnDt: string
  propName: string
  address: string
  country: string
  nra: number
  uom: string
  sector: string
  priceUsd: number
  capRate: null | number
  numPropInPortfolio: null | number
  priceUsdPuom: null | number
  buyers: string
  sellers: string
  priceLcy: number
  priceLcyPuom: number
  currency: string
  city: string
  propMaintype: string
  propSubtype: string
  capRateQualifier: string
  dealQualifier: string
}

export type GetTopSaleResult = TopSale[]

const getTopSales = (builder: ReFlowSectorCartoBuilder) =>
  QueryBuilder.get<GetTopSaleResult, GetTopSalesSource>(
    builder,
    getTopSalesSource,
    [TAGS.MARKET_TRANSACTIONS_CARTO_TAG]
  )

export default getTopSales
