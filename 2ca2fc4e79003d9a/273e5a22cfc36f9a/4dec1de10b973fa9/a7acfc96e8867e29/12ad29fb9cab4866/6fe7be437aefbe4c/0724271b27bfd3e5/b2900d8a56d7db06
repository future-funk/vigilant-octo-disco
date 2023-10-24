import { FC, useEffect, useMemo } from 'react'
import { compact, find, map } from 'lodash'
import { useAppDispatch, useAppSelector } from '@bpd/bpd-web/shared/store'
import {
  DirectoryActions,
  DirectorySelectors,
} from '@bpd/bpd-web/directory/feature-shell/shared/directory'
import { BpdSortSelect, SortConfig, SortOrder } from '@bpd/bpd-web/shared/ui'
import { LogisticsSortingOptions } from '../constants'
import { MapSelectors } from '@bpd/vendors/carto'

const options: SortConfig[] = map(
  LogisticsSortingOptions,
  ({ label, field, order, value }) => ({
    label,
    field,
    order: order as SortOrder,
  })
)

const LogisticsDrawerSort:FC = () => {
  const dispatch = useAppDispatch()

  const selectedSort = useAppSelector(
    DirectorySelectors.getSelectedLogisticsSort
  )

  const markerCoordinates = useAppSelector(MapSelectors.getMarkerCoordinates)

  const handleSelect = (config: SortConfig) => {
    dispatch(DirectoryActions.setSelectedLogisticsSort(config))
  }

  const sortOptions = useMemo(() => {
    return compact([
      ...options,
      markerCoordinates
        ? {
            label: 'Distance',
            field: 'distance',
            order: 'asc' as SortOrder,
          }
        : null,
    ])
  }, [markerCoordinates])

  useEffect(() => {
    if (markerCoordinates) {
      dispatch(
        DirectoryActions.setSelectedLogisticsSort(
          find(sortOptions, { field: 'distance' })
        )
      )
      return
    }
    dispatch(DirectoryActions.setSelectedLogisticsSort(sortOptions?.at(0)))
  }, [!!markerCoordinates])

  return (
    <BpdSortSelect
      options={sortOptions}
      value={selectedSort}
      onSelect={handleSelect}
    />
  )
}

export default LogisticsDrawerSort
