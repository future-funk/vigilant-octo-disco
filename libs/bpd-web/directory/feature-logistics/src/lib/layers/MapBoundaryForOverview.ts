import { MapBoundaryLayer } from '@bpd/vendors/carto'
import { every, isEmpty } from 'lodash'
import { LogisticsCartoQuery } from '../data'
import { useOverviewQueryArgs } from '../hooks'

const MapBoundaryForOverview = () => {
  const { filters: selectedFilterValues } = useOverviewQueryArgs()

  const isAllUndefinedOrEmpty = every(selectedFilterValues, isEmpty)

  const { data } = LogisticsCartoQuery.useGetOverviewMapBoundaryQuery(
    {
      filters: selectedFilterValues,
    },
    {
      skip: isAllUndefinedOrEmpty,
    }
  )

  return MapBoundaryLayer(data)
}

export default MapBoundaryForOverview
