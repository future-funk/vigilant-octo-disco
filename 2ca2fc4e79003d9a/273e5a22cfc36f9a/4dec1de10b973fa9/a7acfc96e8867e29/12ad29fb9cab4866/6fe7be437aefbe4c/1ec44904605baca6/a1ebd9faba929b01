import { useMemo } from 'react'
import { chain, get, startCase } from 'lodash'
import { LogisticsCartoQuery, LogisticsFilterDto } from '../data'
import { FILTER_COLUMN } from '../constants'

const getGroupedItems = (
  filterItems: LogisticsFilterDto[],
  groupBy: string
) => {
  return chain(filterItems)
    .map((filterItem) => {
      const value = get(filterItem, groupBy)
      if (!value) return null
      return {
        label: get(filterItem, groupBy).replaceAll('_', ' '),
        value,
      }
    })
    .compact()
    .uniqBy('value')
    .orderBy('value')
    .value()
}

const useGetBaseFilterItems = () => {
  const { data: filterItems = [] } =
    LogisticsCartoQuery.useGetLogisticsAssetsQuery({
      groupBy: ['project_name', 'asset_type', 'country', 'status'],
    })

  const results = {
    projectNames: useMemo(
      () => getGroupedItems(filterItems, FILTER_COLUMN.PROJECT_NAME),
      [filterItems]
    ),
    assetTypes: useMemo(
      () => getGroupedItems(filterItems, FILTER_COLUMN.ASSET_TYPE),
      [filterItems]
    ),
    countries: useMemo(
      () => getGroupedItems(filterItems, FILTER_COLUMN.COUNTRY),
      [filterItems]
    ),
    status: useMemo(
      () => getGroupedItems(filterItems, FILTER_COLUMN.STATUS),
      [filterItems]
    ),
  }
  return results
}

export default useGetBaseFilterItems
