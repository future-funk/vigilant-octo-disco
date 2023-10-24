import { camelCaseTransformer } from '@bpd/utils/casing'
import { CartoLayer } from '@deck.gl/carto/typed'
import {
  Color,
  Layer,
  LayerProps,
  PickingInfo as DeckGLPickingInfo,
} from '@deck.gl/core/typed'
import { GeoJsonLayerProps } from '@deck.gl/layers/typed'
import { _Tile2DHeader } from '@deck.gl/geo-layers/typed'
import { chain, map } from 'lodash'
import { GeoJSONFeature } from 'maplibre-gl'
import type { MjolnirEvent } from 'mjolnir.js'
import { LegendData, Source } from '../types'

export type Data<T> = { properties: T }

export type ValueGetter<T, R> = R | ((data: Data<T>) => R)

export type GetPointRadius<T> = ValueGetter<T, number>

export type GetIsVisible<T> = (data: Data<T>) => boolean

export type GeoJSON<T = unknown> = Omit<GeoJSONFeature, 'properties'> & {
  properties: T
}

export type Tile<T> = {
  dataInWGS84: GeoJSON<T>[]
}

export type OnViewportLoad<T> = (data: Tile<T>[]) => void

export type OnFeaturesLoad<T> = (data: T[]) => void

export interface PickingInfo<T = any>
  extends Omit<DeckGLPickingInfo, 'object'> {
  object?: Data<T>
  layer: (Layer & { props: LayerProps }) | null
}

export type CreateCartoLayer<T extends object> = Omit<
  Partial<CartoLayer<T>>,
  'onClick'
> &
  Omit<
    GeoJsonLayerProps,
    | 'data'
    | 'getFillColor'
    | 'getLineColor'
    | 'getPointRadius'
    | 'onClick'
    | 'highlightColor'
  > &
  Source & {
    getLineColor?: ValueGetter<T, Color>
    getFillColor?: ValueGetter<T, Color>
    getPointRadius?: GetPointRadius<T>
    getIsVisible?: GetIsVisible<T>
    setLegend?: Record<string, LegendData>
    onClick?:
      | ((pickingInfo: PickingInfo<T>, event: MjolnirEvent) => void)
      | null
    highlightColor?:
      | [number, number, number, number]
      | ((pickingInfo: PickingInfo<T>) => [number, number, number, number])
    onViewportLoad?: OnViewportLoad<T>
    onFeaturesLoad?: OnFeaturesLoad<T>
    visibilityByZoom?: { min?: number; max?: number }
    uniqueIdProperty?: string
  }

const normalizeData = (data: any) => ({
  ...data,
  points: {
    ...data.points,
    numericProps: camelCaseTransformer(data.points.numericProps),
    properties: data.points.properties.map(camelCaseTransformer),
  },
  polygons: {
    ...data.polygons,
    numericProps: camelCaseTransformer(data.polygons.numericProps),
    properties: data.polygons.properties.map(camelCaseTransformer),
  },
  lines: {
    ...data.lines,
    numericProps: camelCaseTransformer(data.lines.numericProps),
    properties: data.lines.properties.map(camelCaseTransformer),
  },
})

const invoke = <T, R>(fn: ValueGetter<T, R>, data: Data<T>) =>
  typeof fn === 'function' ? (fn as (data: Data<T>) => R)(data) : fn

const invokeValueGetter =
  <T, R>(
    valueGetter: ValueGetter<T, R>,
    visibleGetter?: GetIsVisible<T>,
    defaultsTo?: R
  ) =>
  (data: Data<T>) => {
    const isVisible = visibleGetter ? visibleGetter(data) : true
    if (!isVisible) return defaultsTo
    return invoke(valueGetter, data)
  }

const createCartoLayer = <T extends object>(props: CreateCartoLayer<T>) => {
  const {
    data,
    getFillColor,
    getLineColor,
    getPointRadius,
    getIsVisible,
    updateTriggers,
    onFeaturesLoad,
  } = props

  if (!data) return null

  return new CartoLayer({
    pointRadiusUnits: 'pixels',
    lineWidthUnits: 'pixels',
    ...props,
    dataTransform: normalizeData,
    getPointRadius: invokeValueGetter(getPointRadius, getIsVisible, 0),
    getFillColor: invokeValueGetter(getFillColor, getIsVisible, [0, 0, 0, 0]),
    getLineColor: invokeValueGetter(getLineColor, getIsVisible, [0, 0, 0, 0]),
    updateTriggers: {
      ...updateTriggers,
      ...{
        getFillColor: updateTriggers?.getIsVisible,
        getLineColor: updateTriggers?.getIsVisible,
        getPointRadius: updateTriggers?.getIsVisible,
      },
    },

    ...(onFeaturesLoad
      ? {
          onViewportLoad: (data: Tile<T>[]) => {
            const features = chain(data)
              .flatMap('dataInWGS84')
              .map('properties')
              .uniqBy('cartodb_id')
              .value()
            onFeaturesLoad?.(camelCaseTransformer(features))
          },
        }
      : {}),
    onTileLoad: (tile: _Tile2DHeader) => {
      //have to do for others as well such as lines, points...
      if (tile.data?.polygons) {
        chain(tile.data.polygons)
          .update('numericProps', camelCaseTransformer)
          .update('properties', (properties) =>
            map(properties, camelCaseTransformer)
          )
          .value()
      }
    },
  })
}

export default createCartoLayer
