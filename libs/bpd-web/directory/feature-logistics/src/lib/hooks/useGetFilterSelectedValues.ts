import { get } from 'lodash'
import { useMemo } from 'react'
import { FILTER_COLUMN } from '../constants'

const useGetFilterSelectedValues = <T>({ filters }: { filters: T }) => {
  return useMemo(
    () => ({
      projectName: get(filters, FILTER_COLUMN.PROJECT_NAME),
      assetType: get(filters, FILTER_COLUMN.ASSET_TYPE),
      country: get(filters, FILTER_COLUMN.COUNTRY),
      status: get(filters, FILTER_COLUMN.STATUS),
    }),
    [filters]
  )
}

export default useGetFilterSelectedValues
