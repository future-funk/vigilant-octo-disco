import {
  DirectorySources,
  Directory,
  STATUS_TYPE,
  COLOR_BY_SECTOR,
  COLOR_BY_TYPE,
  HOLDING,
} from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'
import { useAppSelector, UiSelectors } from '@bpd/bpd-web/shared/store'
import { decomposeColorValues, useAppPalette } from '@bpd/bpd-web/shared/theme'
import {
  createCartoLayer,
  createGetDomainColors,
  getCartoLayers,
  useRegisterSource,
} from '@bpd/vendors/carto'
import { selectSourceById } from '@carto/react-redux'
import { useCartoLayerProps } from '@carto/react-api'
import { DirectorySelectors } from '../data/stores/directorySlice'
import { generateConditions, getPopupProps } from '../utils'
import { useAppDispatch } from '@bpd/bpd-web/shared/store'
import { MapActions } from '@bpd/vendors/carto'
import { SECTOR } from '@bpd/bpd-web/shared/data-access'

import {
  useGetLayerLegends,
  useGetLegends,
  useGetSelectedFilterValues,
} from '../hooks'

// eslint-disable-next-line
export interface HoldingsLayerProps {}

export const HOLDING_LAYER_ID = 'holdingsLayer'

const HoldingLayer = () => {
  const dispatch = useAppDispatch()
  const platte = useAppPalette()

  const appTeam = useAppSelector(UiSelectors.getTeam)
  const basemap = useAppSelector((state) => state?.carto?.basemap || '')

  const { [HOLDING_LAYER_ID]: layer } = useAppSelector(getCartoLayers)

  const source = useAppSelector((state) =>
    selectSourceById(state, layer?.source)
  )
  const selectedColorByType = useAppSelector(
    DirectorySelectors.getSelectedDirectoryColorByValue
  )

  const layerProps = useCartoLayerProps({ source })
  const layerLegends = useGetLayerLegends({
    types: SECTOR,
    type: COLOR_BY_SECTOR,
  })
  const { filters, revertedSelectedType, selectedFilterValues } =
    useGetSelectedFilterValues()

  const legend = {
    [STATUS_TYPE.HOLDING_DIRECT.label]: {
      label: STATUS_TYPE.HOLDING_DIRECT.label,
      value: STATUS_TYPE.HOLDING_DIRECT.value,
      color: platte.map.red,
      visible: true,
      type: COLOR_BY_TYPE,
    },
    [STATUS_TYPE.HOLDING_FUND_UNDERLYING.label]: {
      label: STATUS_TYPE.HOLDING_FUND_UNDERLYING.label,
      value: STATUS_TYPE.HOLDING_FUND_UNDERLYING.value,
      color: platte.map.orange,
      visible: true,
      type: COLOR_BY_TYPE,
    },
    [STATUS_TYPE.HOLDING_PORTFOLIO.label]: {
      label: STATUS_TYPE.HOLDING_PORTFOLIO.label,
      value: STATUS_TYPE.HOLDING_PORTFOLIO.value,
      color: platte.map.blue,
      visible: true,
      type: COLOR_BY_TYPE,
    },
    ...layerLegends,
  }

  const { activeLegends, column } = useGetLegends({
    legends: legend,
    type: selectedColorByType || COLOR_BY_TYPE,
  })

  useRegisterSource(
    {
      source: DirectorySources.getHolding({ team: appTeam }),
      layer: { id: HOLDING_LAYER_ID },
      legend,
    },
    {
      skip: !appTeam,
      update: [appTeam, basemap],
    }
  )

  return createCartoLayer<Directory>({
    ...(layerProps as any),
    // ...source,
    // uniqueIdProperty: '',
    id: HOLDING_LAYER_ID,
    getPointRadius: 3,
    getFillColor: ({ properties }) => {
      return createGetDomainColors(column, activeLegends)({ properties })
    },
    getLineColor: decomposeColorValues(platte.common.white),
    pickable: true,
    getIsVisible: ({ properties }) => {
      return generateConditions(properties, {
        ...selectedFilterValues,
        bpInvStatus:
          (selectedFilterValues.bpInvStatus || []).length > 0
            ? selectedFilterValues.bpInvStatus
            : [HOLDING],
      })
    },
    onClick: ({ object }, event: any) => {
      if (event.rightButton) return
      const properties = object?.properties
      if (!properties) return
      setTimeout(() => {
        dispatch(
          MapActions.setTooltip({
            ...getPopupProps({ item: properties, team: appTeam }),
            latitude: properties?.lat,
            longitude: properties?.lng,
          })
        )
      })
    },
    updateTriggers: {
      getIsVisible: [filters, selectedColorByType],
    },
  })
}

export default HoldingLayer
