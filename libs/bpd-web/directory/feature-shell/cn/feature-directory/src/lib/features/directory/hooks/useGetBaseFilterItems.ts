import { useMemo } from 'react'
import { chain, get, camelCase } from 'lodash'
import { BpdFilterComponent } from '@bpd/bpd-web/shared/ui'
import { DirectoryCartoQuery } from '../data'
import {
  developmentStageFilter,
  dealStatusFilter,
  warehouseTypeFilter,
  teamFilter,
  partnerFilter,
  dealsFilter,
  cityFilter,
  cityTierFilter,
  gfaRangeFilter,
  directoryFilterMore,
} from '../configs'
import { FilterDto } from '../types'
import { FILTER_COLUMN } from '../constants'

const getGroupedItems = (filterItems: FilterDto[], filterColumn: string) => {
  return chain(filterItems)
    .map((value) => ({
      label: get(value, camelCase(filterColumn)),
      value: get(value, camelCase(filterColumn)),
      key: get(value, camelCase(filterColumn)),
    }))
    .compact()
    .value()
}

const useGetBaseFilterItems = () => {
  const { data: cityValues = [] } =
    DirectoryCartoQuery.useGetDirectoryAssetsQuery({
      column: FILTER_COLUMN.CITY,
    })

  const { data: cityTierValues = [] } =
    DirectoryCartoQuery.useGetDirectoryAssetsQuery({
      column: FILTER_COLUMN.CITY_TIER,
    })

  const { data: dealValues = [] } =
    DirectoryCartoQuery.useGetDirectoryAssetsQuery({
      column: FILTER_COLUMN.DEAL_NAME,
    })

  const { data: partnerValues = [] } =
    DirectoryCartoQuery.useGetDirectoryAssetsQuery({
      column: FILTER_COLUMN.PARTNER,
    })

  const getFilterOptions = (
    filter: BpdFilterComponent,
    options: FilterDto[],
    column: string
  ) => {
    return {
      ...filter,
      options: getGroupedItems(options, column),
    }
  }

  const getPartnerFilter = () =>
    getFilterOptions(partnerFilter, partnerValues, FILTER_COLUMN.PARTNER)
  const getDealsFilter = () =>
    getFilterOptions(dealsFilter, dealValues, FILTER_COLUMN.DEAL_NAME)
  const getCityFilter = () =>
    getFilterOptions(cityFilter, cityValues, FILTER_COLUMN.CITY)
  const getCityTierFilter = () =>
    getFilterOptions(cityTierFilter, cityTierValues, FILTER_COLUMN.CITY_TIER)

  return {
    developmentStageFilter,
    dealStatusFilter,
    warehouseTypeFilter,
    teamFilter,
    partnerFilter: useMemo(() => getPartnerFilter(), [partnerValues]),
    dealsFilter: useMemo(() => getDealsFilter(), [dealValues]),
    cityFilter: useMemo(() => getCityFilter(), [cityValues]),
    directoryFilterMore: {
      ...directoryFilterMore,
      children: [
        ...directoryFilterMore.children,
        { ...useMemo(() => getPartnerFilter(), [partnerValues]), visibility: { display: { xxl: 'none', md: 'flex' } }},
        { ...useMemo(() => getDealsFilter(), [dealValues]), visibility: { display: { xxl: 'none', md: 'flex' } }},
        { ...useMemo(() => getCityFilter(), [cityValues]), visibility: { display: { xxl: 'none', md: 'flex' } } },
        { ...useMemo(() => getCityTierFilter(), [cityTierValues]) },
        { ...gfaRangeFilter },
      ],
    },
  }
}

export default useGetBaseFilterItems
