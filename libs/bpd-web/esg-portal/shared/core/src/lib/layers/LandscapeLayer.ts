import { get, toString, toNumber } from 'lodash'
import { selectSourceById } from '@carto/react-redux'
import { useAppSelector, useAppDispatch } from '@bpd/bpd-web/shared/store'
import { useAppPalette, decomposeColorValues } from '@bpd/bpd-web/shared/theme'
import {
  createCartoLayer,
  getCartoLayers,
  useZoomLevel,
  createGetDomainColors,
  useRegisterSource,
} from '@bpd/vendors/carto'
import {
  ESGPortalRequestPayload,
  getESGLandscapeSource,
} from '@bpd/esg-portal/shared/data-access'
import {
  useGetLegendColors,
  useGetLayerLegends,
  useGetLegends,
  useGetFilterSelectedValues,
} from '../hooks'
import { COLOR_BY_TYPES, COLOR_BY_COLUMN } from '../constants'
import { EsgPortalSelectors, EsgPortalActions } from '../data'
import { conditionChecker } from '../utils'

export const ESG_LANDSCAPE_LAYER_ID = 'landscapeLayer'

const TXT_ZOOM_LEV = 6

const LandscapeLayer = () => {
  const dispatch = useAppDispatch()
  const zoomLevel = useZoomLevel()
  const palette = useAppPalette()
  const colors = useGetLegendColors()
  const selectedFilterValues = useGetFilterSelectedValues({})

  const selectedColorByValue = useAppSelector(
    EsgPortalSelectors.getColorByValue
  )

  const { [ESG_LANDSCAPE_LAYER_ID]: layer } = useAppSelector(getCartoLayers)
  const { legend } = layer || {}
  const source = useAppSelector((state) =>
    selectSourceById(state, layer?.source)
  )

  useRegisterSource({
    source: getESGLandscapeSource({}),
    layer: { id: ESG_LANDSCAPE_LAYER_ID },
    legend: {
      ...useGetLayerLegends({
        types: COLOR_BY_TYPES.STORM_SURGE_RISK_RATING,
        type: 'stormSurgeRr',
        colors,
        visible: true,
      }),
      ...useGetLayerLegends({
        types: COLOR_BY_TYPES.GREEN_CERT_BUCKET,
        type: 'bucket',
        colors,
        visible: false,
      }),
      ...useGetLayerLegends({
        types: COLOR_BY_TYPES.HURRICANE_RISK_RATING,
        type: 'hurricaneRr',
        colors,
        visible: false,
      }),
      ...useGetLayerLegends({
        types: COLOR_BY_TYPES.INLAND_FLOOD_RISK_RATION,
        type: 'inlandFloodRr',
        colors,
        visible: false,
      }),
      ...useGetLayerLegends({
        types: COLOR_BY_TYPES.WILDFIRE_RISK_RATING,
        type: 'wildfireRr',
        colors,
        visible: false,
      }),
    },
  })

  const { activeLegends, column } = useGetLegends({
    legends: legend,
    type: selectedColorByValue,
  })

  const labelColors = {
    [COLOR_BY_COLUMN.STORM_SURGE_RR]: palette.common.black,
    [COLOR_BY_COLUMN.BUCKET]: palette.common.white,
    [COLOR_BY_COLUMN.HURRICANE_RR]: palette.common.white,
    [COLOR_BY_COLUMN.INLAND_FLOOR_RR]: palette.common.black,
    [COLOR_BY_COLUMN.WILDFIRE_RR]: palette.common.black,
  }

  return createCartoLayer<ESGPortalRequestPayload>({
    ...source,
    id: ESG_LANDSCAPE_LAYER_ID,
    pointType: 'circle+text',
    pickable: true,
    getText: ({ properties }) => {
      return get(properties, selectedColorByValue)
        ? toString(get(properties, selectedColorByValue))
        : ' '
    },
    getTextSize: zoomLevel > TXT_ZOOM_LEV ? 12 : 0,
    textFontWeight: 600,
    getTextColor: () =>
      decomposeColorValues(get(labelColors, selectedColorByValue)),
    getPointRadius: zoomLevel > TXT_ZOOM_LEV ? 10 : 3,
    getLineColor: decomposeColorValues(palette.common.white),
    getFillColor: ({ properties }) => {
      return createGetDomainColors(column, activeLegends, {
        fallback: palette.map.lavenderGray,
      })({ properties })
    },
    getIsVisible: ({ properties }) => {
      return conditionChecker(properties, selectedFilterValues)
    },
    onClick: ({ object }) => {
      const properties = object?.properties
      if (!properties) return
      setTimeout(() => {
        dispatch(
          EsgPortalActions.setSelectedRecord({
            ...properties,
            lat: toNumber(properties?.lat),
            lng: toNumber(properties?.lng),
          })
        )
      })
    },
    updateTriggers: {
      getIsVisible: [selectedColorByValue, selectedFilterValues, zoomLevel],
    },
  })
}

export default LandscapeLayer
