import {
  UiSelectors,
  useAppSelector,
  useAppDispatch,
} from '@bpd/bpd-web/shared/store'
import { decomposeColorValues, useAppPalette } from '@bpd/bpd-web/shared/theme'
import { ScatterplotLayer } from 'deck.gl/typed'
import {
  createGetDomainColors,
  getCartoLayers,
  MapActions,
  useRegisterSource,
} from '@bpd/vendors/carto'
import {
  DirectorySelectors,
  getAssetsSource,
  LogisticsResponseDto,
} from '../data'
import { useGetLegendColors, useGetSelectedCardsByFilters } from '../hooks'
import { getPopupProps } from '../utils'

import {
  COLOR_BY_TYPES,
  FILTER_COLUMN,
  MAP_ASSET_TYPE_FILTER,
} from '../constants'
import {
  useGetActiveMapLegends,
  useGetLayerLegends,
  useGetLegends,
} from '@bpd/bpd-web/directory/feature-shell/shared/directory'
import { useMemo } from 'react'
import { filterByConfig } from '@bpd/bpd-web/shared/ui'
import { map, size } from 'lodash'

export const SELECTED_ASSETS_LAYER = 'selectedLogisticsAssetsLayer'

interface SelectedAssetsLayerProps {
  skip?: boolean
}

const SelectedAssetsLayer = (props?: Partial<SelectedAssetsLayerProps>) => {
  const dispatch = useAppDispatch()

  const palette = useAppPalette()

  const selectedAssets = useGetSelectedCardsByFilters()

  const colors = useGetLegendColors()

  const selectedMapAssetType = useAppSelector(
    DirectorySelectors.getSelectedMapAssetType
  )

  const selectedColorByType = useAppSelector(
    DirectorySelectors.getSelectedLogisticsColorByValue
  )

  const { [SELECTED_ASSETS_LAYER]: layer } = useAppSelector(getCartoLayers)

  const { legend } = layer || {}

  useRegisterSource(
    {
      source: getAssetsSource({}),
      layer: { id: SELECTED_ASSETS_LAYER },
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
      skip: !selectedAssets,
    }
  )

  //update the legend
  useGetActiveMapLegends(
    selectedAssets || [],
    !selectedAssets || props?.skip || !legend ? null : selectedColorByType,
    useMemo(() => ({}), [selectedAssets])
  )

  const { activeLegends, column } = useGetLegends({
    legends: legend,
    type: selectedColorByType,
  })

  if (!selectedAssets || props?.skip) return null

  return new ScatterplotLayer<{
    coordinates: [number, number]
    data: LogisticsResponseDto
  }>({
    id: SELECTED_ASSETS_LAYER,
    data: selectedAssets.map((row) => ({
      coordinates: [row.lng, row.lat],
      data: row,
    })),
    getPosition: (data) => data.coordinates,
    lineWidthMinPixels: 1,
    stroked: true,
    radiusMinPixels: 4,
    pickable: true,
    getFillColor: ({ data }) => {
      const filteredImportSites = filterByConfig(
        [data],
        map(
          MAP_ASSET_TYPE_FILTER[selectedMapAssetType] || [],
          ([field, type, value]) => ({ field, type, value })
        )
      )
      return size(filteredImportSites) > 0
        ? createGetDomainColors(column, activeLegends)({ properties: data })
        : [255, 255, 255, 0]
    },

    getLineColor: decomposeColorValues(palette.common.white),

    onClick: ({ coordinate, object }) => {
      const [longitude, latitude] = coordinate || []
      if (!object) return
      setTimeout(() =>
        dispatch(
          dispatch(
            MapActions.setTooltip({
              ...getPopupProps(object.data),
              latitude: latitude,
              longitude: longitude,
            })
          )
        )
      )
    },
    updateTriggers: {
      getFillColor: [selectedColorByType, column],
    },
  })
}

export default SelectedAssetsLayer
