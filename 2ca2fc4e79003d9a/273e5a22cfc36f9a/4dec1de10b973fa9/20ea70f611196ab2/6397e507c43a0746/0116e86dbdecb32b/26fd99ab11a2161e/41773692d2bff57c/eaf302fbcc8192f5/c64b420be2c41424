import { useMapLayerData, useMapLayerDataProps, useMapLayerDataResponse } from '@bpd/vendors/carto'

const useGetMapLayerData = ({ dataSource, params, enabled }: useMapLayerDataProps): useMapLayerDataResponse => {
    const rows = useMapLayerData({
        dataSource: dataSource,
        params: { ...params },
        enabled
    }) 

    return rows
}

export default useGetMapLayerData