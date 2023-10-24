import { groupBy, forEach, map, get, isEmpty } from 'lodash'
import { formatNumber } from '@bpd/utils/formatters'
import { DirectoryCartoQuery } from '../data'
import { MapSelectors } from '@bpd/vendors/carto'
import { useAppSelector } from '@bpd/bpd-web/shared/store'
import { Directory } from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'

interface GetLocationInfoProps {
  selectedDirectory: Directory
}

const useGetLocationInfo = ({ selectedDirectory }: GetLocationInfoProps) => {
  const { lat, lng } = selectedDirectory || {}

  const baseMapBoundary = useAppSelector(MapSelectors.getBaseMapBoundary)

  const { data: locationInfo = [] } =
    DirectoryCartoQuery.useGetDirectoryLocationQuery(
      {
        latitude: lat,
        longitude: lng,
        siteMapBoundary: baseMapBoundary,
      },
      {
        skip: !baseMapBoundary,
      }
    )

  if (isEmpty(locationInfo)) return {}

  const fields = ['Airport', 'Train Station', 'City Centre']
  const groupedLocationInfo = groupBy(locationInfo, 'poiType')
  let orderedFields = {}

  forEach(fields, (field) => {
    const values = get(groupedLocationInfo, field)

    orderedFields = {
      ...orderedFields,
      [field]: map(values, (value) => ({
        name: value?.name || '',
        distance: `${formatNumber(value?.distance, 1)} km`,
      })),
    }
  })

  return {
    orderedFields,
    highways: map(
      get(groupedLocationInfo, 'Highway'),
      (highway) => highway?.nameEn || []
    ).join(', '),
  }
}

export default useGetLocationInfo
