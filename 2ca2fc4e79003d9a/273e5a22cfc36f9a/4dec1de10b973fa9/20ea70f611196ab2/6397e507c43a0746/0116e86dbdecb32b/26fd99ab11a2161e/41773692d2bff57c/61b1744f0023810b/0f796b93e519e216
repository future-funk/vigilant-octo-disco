import {
  DirectorySources,
  Directory,
  STATUS_TYPE,
  COLOR_BY_SECTOR,
  COLOR_BY_TYPE,
  MARKET
} from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'
import {
  useAppDispatch,
  useAppSelector,
  UiSelectors,
} from '@bpd/bpd-web/shared/store'
import { decomposeColorValues, useAppPalette } from '@bpd/bpd-web/shared/theme'
import {
  createCartoLayer,
  createGetDomainColors,
  getCartoLayers,
  useRegisterSource,
  MapActions,
} from '@bpd/vendors/carto'
import { selectSourceById } from '@carto/react-redux'
import { SECTOR } from '@bpd/bpd-web/shared/data-access'
import { DirectorySelectors } from '../data/stores/directorySlice'
import { generateConditions, getPopupProps } from '../utils'

import {
  useGetLayerLegends,
  useGetLegends,
  useGetSelectedFilterValues,
} from '../hooks'

export const MARKETS_LAYER_ID = 'marketsLayer'

const MarketsLayer = () => {
  const dispatch = useAppDispatch()
  const platte = useAppPalette()

  const appTeam: string = useAppSelector(UiSelectors.getTeam)
  const basemap = useAppSelector((state) => state?.carto?.basemap || '')

  const { [MARKETS_LAYER_ID]: layer } = useAppSelector(getCartoLayers)

  const source = useAppSelector((state) =>
    selectSourceById(state, layer?.source)
  )

  const selectedColorByType = useAppSelector(
    DirectorySelectors.getSelectedDirectoryColorByValue
  )

  const layerLegends = useGetLayerLegends({
    types: SECTOR,
    type: COLOR_BY_SECTOR,
  })
  const { filters, revertedSelectedType, selectedFilterValues } =
    useGetSelectedFilterValues()

  const legend = {
    [STATUS_TYPE.MARKET_DATA.label]: {
      label: STATUS_TYPE.MARKET_DATA.label,
      value: STATUS_TYPE.MARKET_DATA.value,
      color: platte.map.green,
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
      source: DirectorySources.getMarket({
        team: appTeam,
      }),
      layer: { id: MARKETS_LAYER_ID },
      legend,
    },
    {
      skip: !appTeam,
      update: [appTeam, basemap],
    }
  )

  return createCartoLayer<Directory>({
    // ...(layerProps as any),
    ...source,
    id: MARKETS_LAYER_ID,
    getPointRadius: 3,
    getFillColor: ({ properties }) => {
      return createGetDomainColors(column, activeLegends)({ properties })
    },
    pickable: true,
    getLineColor: decomposeColorValues(platte.common.white),
    getIsVisible: ({ properties }) => {
      return generateConditions(properties, {
        ...selectedFilterValues,
        bpInvStatus:
          (selectedFilterValues.bpInvStatus || []).length > 0
            ? selectedFilterValues.bpInvStatus
            : [MARKET],
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
    updateTriggers: { getIsVisible: [filters, selectedColorByType] },
  })
}

export default MarketsLayer
