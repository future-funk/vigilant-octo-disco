import { createCartoSlice as createCartoReduxSlice } from '@carto/react-redux'
import { createSelector } from '@reduxjs/toolkit'
import { WebMercatorViewport } from 'deck.gl/typed'
import { get } from 'lodash'
import { CARTO_SLICE_KEY } from '../constants'
import { InitialCartoState, Layer, LayerLegend, Source } from '../types'

const createCartoSlice = (initialState: InitialCartoState) =>
  createCartoReduxSlice(initialState)

export const getCartoState = (rootState: any): any[typeof CARTO_SLICE_KEY] =>
  rootState[CARTO_SLICE_KEY]

export const getCartoCredentials = createSelector(
  getCartoState,
  (state) => state?.credentials
)

export const getCartoViewState = createSelector(
  getCartoState,
  (state) => state?.viewState
)

export const getCartoLayers = createSelector(
  getCartoState,
  (state) => state?.layers as Record<string, Layer>
)

export const getCartoLayer = createSelector(
  [getCartoState, (_, layerId) => layerId],
  (state, layerId) => get(state?.layers, layerId)
)

export const getLayerLegend = createSelector(
  [getCartoState, (_, layerId) => layerId],
  (state, layerId) => state?.layers?.[layerId]?.legend as LayerLegend
)

export const getSource = createSelector(
  [getCartoState, (_, layerId) => layerId],
  (state, layerId) => {
    const sourceId = state?.layers?.[layerId]?.source
    return state?.dataSources?.[sourceId] as unknown as Source
  }
)

export const getCartoViewport = createSelector(
  [getCartoViewState],
  (viewState) => {
    const viewport = new WebMercatorViewport(viewState)
    return viewport.getBounds()
  }
)

export const CartoSelectors = {
  getCredentials: getCartoCredentials,
  getViewState: getCartoViewState,
  getLayers: getCartoLayers,
  getLayer: getCartoLayer,
  getLayerLegend: getLayerLegend,
  getSource: getSource,
  getViewport: getCartoViewport,
}

export default createCartoSlice
