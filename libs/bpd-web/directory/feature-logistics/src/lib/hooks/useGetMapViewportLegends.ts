import { isNil } from 'lodash'
import { useAppSelector } from '@bpd/bpd-web/shared/store'
import {
  useGetMapLayerData,
  useGetActiveMapLegends,
} from '@bpd/bpd-web/directory/feature-shell/shared/directory'
import { getSource } from '@bpd/vendors/carto'
import { DirectorySelectors, ASSETS_SOURCE_ID } from '../data'
import useOverviewQueryArgs from './useOverviewQueryArgs'
import { ASSETS_LAYER_ID } from '../layers'

const useGetMapViewportLegends = <T>(
  mapRecords?: T[],
  isFetching?: boolean
) => {
  const { filters } = useOverviewQueryArgs()

  const selectedColorBy = useAppSelector(
    DirectorySelectors.getSelectedLogisticsColorByValue
  )

  const isAssetLayerRegistered = !!useAppSelector((state) =>
    getSource(state, ASSETS_LAYER_ID)
  )

  const { data: records, isLoading } = useGetMapLayerData({
    dataSource: ASSETS_SOURCE_ID,
    params: { rowsPerPage: 1000 },
    enabled: isNil(mapRecords) ? true : false,
  })

  useGetActiveMapLegends(
    !isNil(mapRecords) ? mapRecords : records?.data || [],
    isAssetLayerRegistered ? selectedColorBy : null,
    filters,
    !isNil(isFetching) ? isFetching : isLoading
  )
}

export default useGetMapViewportLegends
