import { useAppDispatch, useAppSelector } from '@bpd/bpd-web/shared/store'
import { useAppPalette, decomposeColorValues } from '@bpd/bpd-web/shared/theme'
import { selectSourceById } from '@carto/react-redux'
import { useCartoLayerProps } from '@carto/react-api'
import {
  createCartoLayer,
  useRegisterSource,
  getCartoLayers,
  createGetDomainColors,
  MapActions,
} from '@bpd/vendors/carto'
import {
  useGetLayerLegends,
  useGetLegends,
} from '@bpd/bpd-web/directory/feature-shell/shared/directory'
import {
  getAssetsSource,
  LogisticsResponseDto,
  DirectorySelectors,
} from '../data'
import {
  COLOR_BY_TYPES,
  FILTER_COLUMN,
  MAP_ASSET_TYPE_FILTER,
} from '../constants'
import { useOverviewQueryArgs, useGetLegendColors } from '../hooks'
import { conditionHelper, getPopupProps } from '../utils'
import { filterByConfig } from '@bpd/bpd-web/shared/ui'
import { get, map, size } from 'lodash'

export const ASSETS_LAYER_ID = 'assetsLayer'

const AssetsLayer = () => {
  const dispatch = useAppDispatch()

  const palette = useAppPalette()

  const selectedMapAssetType = useAppSelector(
    DirectorySelectors.getSelectedMapAssetType
  )

  const { filters: selectedFilterValues, showSelectedCards: skip } =
    useOverviewQueryArgs()

  const colors = useGetLegendColors()

  const { [ASSETS_LAYER_ID]: layer } = useAppSelector(getCartoLayers)

  const { legend } = layer || {}

  useRegisterSource(
    {
      source: getAssetsSource({}),
      layer: { id: ASSETS_LAYER_ID },
      legend: {
        ...useGetLayerLegends({
          types: COLOR_BY_TYPES.PROJECT,
          type: FILTER_COLUMN.PROJECT_NAME,
          colors,
          visible: false,
        }),
        ...useGetLayerLegends({
          types: COLOR_BY_TYPES.ASSET_TYPE,
          type: FILTER_COLUMN.ASSET_TYPE,
          colors,
          visible: false,
        }),
        ...useGetLayerLegends({
          types: COLOR_BY_TYPES.STATUS,
          type: FILTER_COLUMN.STATUS,
          colors,
          visible: false,
        }),
      },
    },
    {
      skip,
    }
  )

  const selectedColorByType = useAppSelector(
    DirectorySelectors.getSelectedLogisticsColorByValue
  )

  const { activeLegends, column } = useGetLegends({
    legends: legend,
    type: selectedColorByType,
  })

  const source = useAppSelector((state) =>
    selectSourceById(state, layer?.source)
  )

  
  const layerProps = useCartoLayerProps({ source })

  return createCartoLayer<LogisticsResponseDto>({
    ...(layerProps as any),
    id: ASSETS_LAYER_ID,
    getPointRadius: 4,
    pickable: true,
    getFillColor: ({ properties }) => {
      return createGetDomainColors(column, activeLegends)({ properties })
    },
    getLineColor: decomposeColorValues(palette.common.white),
    getIsVisible: ({ properties }) => {
      const filteredImportSites = filterByConfig(
        [properties],
        map(
          MAP_ASSET_TYPE_FILTER[selectedMapAssetType] || [],
          ([field, type, value]) => ({ field, type, value })
        )
      )
      return size(filteredImportSites) > 0
        ? conditionHelper(properties, selectedFilterValues)
        : false
    },
    onClick: ({ object }, event: any) => {
      if (event.rightButton) return
      const properties = object?.properties
      if (!properties) return
      setTimeout(() => {
        dispatch(
          MapActions.setTooltip({
            ...getPopupProps(properties),
            latitude: properties?.lat,
            longitude: properties?.lng,
          })
        )
      })
    },
    updateTriggers: {
      getIsVisible: [
        selectedColorByType,
        selectedFilterValues,
        selectedMapAssetType,
      ],
    },
  })
}

export default AssetsLayer
