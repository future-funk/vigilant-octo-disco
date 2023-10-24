import { DirectoryCartoBuilder } from '../types'
import { QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import {
  GetTopInsightSource,
  getTopInsightSource,
} from '../sources'

export interface TopInsight {
  name: string, 
  dealcount: number
  valuation: number,
  currency: string
}

export type GetTopInsightResults = TopInsight[]

const  getTopInsight = (builder: DirectoryCartoBuilder) =>
  QueryBuilder.get<GetTopInsightResults, GetTopInsightSource>(
    builder,
    getTopInsightSource 
  )

export default getTopInsight 
