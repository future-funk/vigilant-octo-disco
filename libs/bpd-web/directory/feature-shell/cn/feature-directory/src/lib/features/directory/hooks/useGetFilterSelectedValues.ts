import { useMemo } from 'react'
import { get, camelCase, find } from 'lodash'
import { useAppSelector } from '@bpd/bpd-web/shared/store'
import { DirectorySelectors } from '../data'
import { FILTER_COLUMN } from '../constants'

const useGetFilterSelectedValues = () => {
  const filters = useAppSelector(DirectorySelectors.getSelectedDirectoryFilters)

  const getAssetType = (value) => {
    return value ? value === 'all' ? ['dry storage', 'cold storage'] : [value] : []
  }

  return useMemo(
    () => ({
      developmentStage: find(
        filters,
        { field: camelCase(FILTER_COLUMN.DEVELOPMENT_STAGE)}
      )?.value || {},
      dealStatus: find(filters, {
        field: camelCase(FILTER_COLUMN.DEAL_STATUS),
      })?.value,
      team: find(filters, { field: camelCase(FILTER_COLUMN.TEAM) })?.value || {},
      partner: find(filters, { field: camelCase(FILTER_COLUMN.PARTNER) })?.value || {},
      dealName: find(filters, { field: camelCase(FILTER_COLUMN.DEAL_NAME) })?.value || {},
      city: find(filters, { field: camelCase(FILTER_COLUMN.CITY) })?.value || {},
      cityTier: find(filters, { field: camelCase(FILTER_COLUMN.CITY_TIER) })?.value || {},
      assetType: getAssetType(find(filters, {
        field: camelCase(FILTER_COLUMN.ASSET_TYPE),
      })?.value) || {},
      gfaSqm: find(filters, { field: camelCase(FILTER_COLUMN.GFA_SQM) })?.value || [],
    }),
    [filters]
  )
}

export default useGetFilterSelectedValues
