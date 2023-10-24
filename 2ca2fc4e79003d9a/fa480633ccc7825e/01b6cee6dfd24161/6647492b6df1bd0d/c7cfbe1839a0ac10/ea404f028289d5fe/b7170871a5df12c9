import {
  createSelector,
  createSlice,
  CreateSliceOptions,
  PayloadAction,
} from '@reduxjs/toolkit'
import { Coordinate, Point } from '../types'
import { every, values } from 'lodash'
import { ViewStateChangeEvent } from 'react-map-gl'

export interface Tooltip {
  title: string | string[][]
  description: string
  latitude: number
  longitude: number
  hideCloseButton?: boolean
}

export interface CurrentViewPort extends Omit<ViewStateChangeEvent, 'target' | 'originalEvent'>{
  viewPort: string
}

export interface MapState {
  bounds: string | null
  tooltip: Tooltip | null
  markerCoordinates: Coordinate| null
  centerPoint: Coordinate | null
  layers: any,
  baseMapBoundary: string | null
}

export const initialMapState: MapState = {
  bounds: null,
  tooltip: null,
  markerCoordinates: null,
  centerPoint: null,
  layers: [],
  baseMapBoundary: null
}

export const MAP_SLICE_KEY = 'map'

const createMapSlice = (options?: Partial<CreateSliceOptions>) =>
  createSlice({
    ...options,
    name: MAP_SLICE_KEY,
    initialState: { ...initialMapState, ...options?.initialState },
    reducers: {
      setBounds: (state, action: PayloadAction<string | null>) => {
        state.bounds = action.payload
      },
      setTooltip: (state, action: PayloadAction<Partial<Tooltip> | null>) => {
        if (every(values(action.payload))) {
          state.tooltip = action.payload
        } else {
          state.tooltip = null
        }
      },
      setLayers: (state, action: PayloadAction<any>) => {
        state.layers = action.payload
      },
      setMarkerCoordinates: (state, action: PayloadAction<Coordinate | null>) => {
        state.markerCoordinates = action.payload
      },
      setCenterPoint: (state, action: PayloadAction<Coordinate | null>) => {
        state.centerPoint = action.payload
      },
      setBaseMapBoundary: (state, action: PayloadAction<any>) => {
        state.baseMapBoundary = action.payload
      }
    },
  })

export const createMapRootState =
  () =>
  (rootState: any): MapState =>
    rootState[MAP_SLICE_KEY]

export const createMapSelectors = () => {
  const getRootState = createMapRootState()

  return {
    getTooltip: createSelector(getRootState, (state) => state?.tooltip),
    getBounds: createSelector(getRootState, (state) => state?.bounds),
    getMarkerCoordinates: createSelector(getRootState, (state) => state?.markerCoordinates),
    getCenterPoint: createSelector(getRootState, (state) => state?.centerPoint),
    getLayers: createSelector(getRootState, (state) => state?.layers),
    getBaseMapBoundary: createSelector(getRootState, (state) => state?.baseMapBoundary)
  }
}

export default createMapSlice
