import { QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import { TAGS } from '../constants'
import { getBaseRegionsCountriesSource } from '../sources'
import type { ReFlowSectorCartoBuilder } from '../types'

export interface BaseRegionCountry {
  country: string
  countryIsSelected: boolean
  region: string
  regionIsSelected: boolean
}

export type GetBaseRegionCountryResult = BaseRegionCountry[]

const getBaseRegionsCountries = (builder: ReFlowSectorCartoBuilder) =>
  QueryBuilder.get<GetBaseRegionCountryResult, null>(builder, getBaseRegionsCountriesSource, [
    TAGS.MARKET_TRANSACTIONS_CARTO_TAG,
  ])

export default getBaseRegionsCountries
