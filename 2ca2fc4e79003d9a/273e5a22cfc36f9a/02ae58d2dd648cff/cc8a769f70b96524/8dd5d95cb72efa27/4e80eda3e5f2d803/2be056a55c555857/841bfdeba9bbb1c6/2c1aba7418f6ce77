import { MapBoundaryLayer } from '@bpd/vendors/carto'
import { ESGPortalCartoQueries } from '@bpd/esg-portal/shared/data-access'
 import { useGetFilterSelectedValues } from '../hooks'

const MapBoundary = () => {
    const selectedFilterValues = useGetFilterSelectedValues({})
    const { data } = ESGPortalCartoQueries.useGetMapBoundary({ filters: selectedFilterValues })


    return MapBoundaryLayer(data)
}

export default MapBoundary