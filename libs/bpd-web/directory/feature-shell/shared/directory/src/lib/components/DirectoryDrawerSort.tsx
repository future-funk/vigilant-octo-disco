import { useAppDispatch, useAppSelector } from '@bpd/bpd-web/shared/store'
import { BpdSortSelect, SortConfig, SortOrder } from '@bpd/bpd-web/shared/ui'
import { map } from 'lodash'
import { FC, useEffect } from 'react'
import {
  DirectoryActions,
  DirectorySelectors,
} from '../data/stores/directorySlice'
import { sortingOptions } from '../configs'
import { MapActions, MapSelectors } from '@bpd/vendors/carto'

interface DrawerSortProps {
  config?: SortConfig[]
}

const DrawerSort: FC<DrawerSortProps> = (props) => {
  const { config: paramConfig } = props

  const sortingConfig = paramConfig ? paramConfig : sortingOptions

  const dispatch = useAppDispatch()
  const mapCenterPoint = useAppSelector(MapSelectors.getCenterPoint)
  const markerCoordinates = useAppSelector(MapSelectors.getMarkerCoordinates)

  const options: SortConfig[] = map(
    sortingConfig,
    ({ label, field, order, value }) => ({
      label,
      field,
      order: order as SortOrder,
    })
  )

  const value = useAppSelector(DirectorySelectors.getSelectedDirectorySort) || 'Select'

  const getDistanceSortingField = sortingConfig.find(
    (fields) => fields.value === '[asc] distance'
  )

  const handleSelect = (config: SortConfig) => {
    if (config.field === 'distance')
      dispatch(
        MapActions.setMarkerCoordinates(markerCoordinates || mapCenterPoint)
      )
    else dispatch(MapActions.setMarkerCoordinates(null))

    dispatch(DirectoryActions.setSelectedDirectorySort(config))
  }

  useEffect(() => {
    if (
      getDistanceSortingField &&
      markerCoordinates &&
      value?.key !== '[asc] distance'
    ) {
      dispatch(
        DirectoryActions.setSelectedDirectorySort({
          label: getDistanceSortingField.label,
          field: getDistanceSortingField.field,
          order: getDistanceSortingField.order,
          key: getDistanceSortingField.value,
          value: getDistanceSortingField.value,
        })
      )
    }
  }, [markerCoordinates])

  useEffect(() => {
    return () => {
      dispatch(MapActions.setMarkerCoordinates(null))
    }
  }, [])

  return (
    <BpdSortSelect options={options} value={value} onSelect={handleSelect} />
  )
}

export default DrawerSort
