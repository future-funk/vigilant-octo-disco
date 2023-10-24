import { toNumber } from 'lodash'
import {
  useAppDispatch,
  useAppSelector,
  UiSelectors,
} from '@bpd/bpd-web/shared/store'
import { decomposeColorValues, useAppPalette } from '@bpd/bpd-web/shared/theme'
import {
  Directory,
} from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'
import {
  useGetLayerLegends,
  useGetLegends,
  getPopupProps,
  generateConditions,
  CN_LOGISTICS,
  DirectoryActions,
} from '@bpd/bpd-web/directory/feature-shell/shared/directory'
import {
  createCartoLayer,
  createGetDomainColors,
  getCartoLayers,
  useRegisterSource,
  MapActions,
  useZoomLevel,
  createGetPointRadius,
  Extent,
} from '@bpd/vendors/carto'
import { selectSourceById } from '@carto/react-redux'
import { getAssetsSource } from '../data/sources'
import { DirectorySelectors } from '../data'
import { useGetLegendColors, useGetFilterSelectedValues } from '../hooks'
import { COLOR_BY_TYPES } from '../constants'

export const ASSETS_LAYER_ID = 'assetsLayer'

const useGetPointRadius = () => {
  const domain = [3, 15] as Extent

  return createGetPointRadius(domain)
}

const AssetsLayer = () => {
  const dispatch = useAppDispatch()
  const palette = useAppPalette()
  const colors = useGetLegendColors()
  const zoomLevel = useZoomLevel()

  const { [ASSETS_LAYER_ID]: layer } = useAppSelector(getCartoLayers)
  const { legend } = layer || {}
  const source = useAppSelector((state) =>
    selectSourceById(state, layer?.source)
  )

  const selectedFilterValues = useGetFilterSelectedValues()

  const appTeam: string = useAppSelector(UiSelectors.getTeam)

  const selectedColorByType = useAppSelector(
    DirectorySelectors.getSelectedDirectoryColorByValue
  )

  const getPointRadius = useGetPointRadius()(zoomLevel)

  const { activeLegends, column } = useGetLegends({
    legends: legend,
    type: selectedColorByType,
  })

  useRegisterSource({
    source: getAssetsSource({}),
    layer: { id: ASSETS_LAYER_ID },
    legend: {
      ...useGetLayerLegends({
        types: COLOR_BY_TYPES.WAREHOUSE_TYPES,
        type: 'assetType',
        colors,
        visible: true,
      }),
      ...useGetLayerLegends({
        types: COLOR_BY_TYPES.DEVELOPMENT_STAGES,
        type: 'developmentStage',
        colors,
        visible: false,
      }),
      ...useGetLayerLegends({
        types: COLOR_BY_TYPES.DEAL_STATUS,
        type: 'dealStatus',
        colors,
        visible: false,
      }),
      ...useGetLayerLegends({
        types: COLOR_BY_TYPES.CITY_TIER,
        type: 'cityTier',
        colors,
        visible: false,
      }),
      ...useGetLayerLegends({
        types: COLOR_BY_TYPES.PARTNER,
        type: 'partner',
        colors,
        visible: false,
      }),
    },
  })

  const handleClick = (item: Directory) =>
    dispatch(DirectoryActions.setSelectedDirectory(item))

  return createCartoLayer<Directory>({
    ...source,
    id: ASSETS_LAYER_ID,
    getPointRadius: () => {

      if (getPointRadius < 3) return 3
      return getPointRadius
    },
    pickable: true,
    getFillColor: ({ properties }) => {
      return createGetDomainColors(column, activeLegends)({ properties })
    },
    getLineColor: decomposeColorValues(palette.common.white),
    getIsVisible: ({ properties }) => {
      return layer?.visible
        ? generateConditions(
            {
              ...properties,
              gfaSqm: toNumber(properties?.gfaSqm),
              bpInvStatus: CN_LOGISTICS,
            },
            selectedFilterValues
          )
        : false
    },
    onClick: ({ object }, event: any) => {
      if (event.rightButton) return
      const properties = object?.properties
      if (!properties) return
      setTimeout(() => {
        dispatch(
          MapActions.setTooltip({
            ...getPopupProps({
              item: {
                ...properties,
                lat: toNumber(properties?.lat),
                lng: toNumber(properties?.lng),
              },
              team: appTeam,
              onClickFn: handleClick,
            }),
            latitude: properties?.lat,
            longitude: properties?.lng,
            hideCloseButton: true,
          })
        )
      })
    },
    updateTriggers: {
      getIsVisible: [layer, selectedFilterValues],
      getPointRadius: zoomLevel,
    },
  })
}

export default AssetsLayer
