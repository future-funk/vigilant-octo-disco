import { MAP_TYPES } from '@deck.gl/carto/typed'
import type {
  CartoState as CartoReactReduxState,
  InitialCartoState as CartoReactReduxInitialState,
} from '@carto/react-redux'
import type Map from 'react-map-gl'
import type { ViewState } from 'react-map-gl'
import {
  CompositeLayerProps as BaseCompositeLayerProps,
  Layer as BaseLayer,
} from '@deck.gl/core/typed'

export type MapProps = typeof Map['defaultProps']

export type MapViewState = ViewState & { width: number; height: number }

export type MapType = 'mapbox' | 'gmaps'

export type InitialCartoState = CartoReactReduxInitialState & {
  id?: string
  viewState: CartoReactReduxInitialState['viewState'] & { minZoom?: number }
}

export interface CartoState extends Omit<CartoReactReduxState, 'layers'> {
  layers: any
}

export type Source = {
  id: string
  data: string
  type: typeof MAP_TYPES[keyof typeof MAP_TYPES]
}

export type Point = [number, number]

export type Coordinate = { latitude: number; longitude: number }

export interface LegendData {
  attr?: string
  label: string
  value?: boolean | number | string
  color: string
  visible: boolean
  layers?: unknown[]
  type?: string
}

export type LayerLegend = Record<string, LegendData>

export interface Layer {
  id: string
  layerAttributes?: unknown
  legend: Record<string, LegendData>
  source: string
  visible: boolean
  visibilityByZoom: { min?: number; max?: number }
}

export interface Icon {
  url: string
  x: number
  y: number
  width: number
  height: number
  mask: boolean
}

export type CompositeLayerProps = BaseCompositeLayerProps & {
  visibilityByZoom?: {
    min?: number
    max?: number
  }
}
export type DeckGLLayer = BaseLayer<{
  visibilityByZoom: { min?: number | undefined; max?: number | undefined }
}>

export interface MapBound {
  bounds: string
}

export type MapBounds = MapBound[]
