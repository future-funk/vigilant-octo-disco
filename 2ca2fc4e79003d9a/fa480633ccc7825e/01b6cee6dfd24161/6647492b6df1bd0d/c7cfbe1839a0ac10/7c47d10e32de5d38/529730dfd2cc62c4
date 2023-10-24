import {
  CompositeLayer,
  Position as DeckGLPosition,
  Accessor,
  Color,
} from '@deck.gl/core/typed'
import {
  GeoJsonLayer,
  TextLayer,
  ScatterplotLayer,
} from '@deck.gl/layers/typed'
import circle from '@turf/circle'
import { Units, Position, Polygon, Feature, Properties } from '@turf/helpers'
import { get } from 'lodash'
import { ViewportOptions } from '@deck.gl/core/typed/viewports/viewport'
import { getMilesToMeters } from '../utils'
import type { CompositeLayerProps } from '../types'

export type CircleLayerProps<DataT = any> = CompositeLayerProps & {
  position: [number, number]
  units: Units
  radius: number
  getTextColor?: Accessor<DataT, Color>
}

interface LabelPosition {
  coordinates: DeckGLPosition
  angle: number
  label: string
}

const getLabelPosition = <P = Properties>(
  polygons: Feature<Polygon, P>,
  label: string
): LabelPosition[] | undefined => {
  return (
    polygons &&
    polygons?.geometry &&
    polygons?.geometry?.coordinates[0]
      .map((coordinates: Position, index: number) => {
        return {
          coordinates: coordinates as DeckGLPosition,
          angle: index * 90,
          label: index ? label : '', //skip the first index as it will be filled by 360
        }
      })
      .filter((lPos) => lPos.label)
  )
}

const getCirclePolygon = <P = Properties>({
  lat,
  lon,
  radius,
  units,
}: {
  lat: number
  lon: number
  radius: number
  units: Units
}): Feature<Polygon, P> => {
  return circle([lon, lat], radius, { steps: 4, units })
}

const defaultProps = {
  // Inherit all of GeoJsonLayer's props
  ...GeoJsonLayer.defaultProps,
  position: [0, 0],
  radius: 1,
  units: 'meters',
  getTextColor: [0, 0, 0, 255],
}
class CircleLayer<DataT = any, ExtraPropsT = unknown> extends CompositeLayer<
  ExtraPropsT & CircleLayerProps<DataT>
> {
  renderLayers() {
    const {
      position,
      radius,
      getTextColor,
      units = 'meters',
      ...rest
    } = this.props
    const [lon, lat] = position
    const circlePolygons = getCirclePolygon({ lat, lon, radius, units })
    return [
      new ScatterplotLayer({
        stroked: true,
        filled: true,
        lineWidthMinPixels: 1,
        lineWidthScale: 0.1,
        getPosition: (data) => data.coordinates,
        getRadius: () => {
          if (units === 'miles') return getMilesToMeters(radius)
          return radius
        },
        getFillColor: () => [0, 0, 0, 20],
        getLineColor: () => [0, 0, 0, 180],
        ...rest,
        data: [{ coordinates: [lon, lat] }],
        id: 'circleLayer',
      }),
      new TextLayer({
        id: 'circleTextLayer',
        data: getLabelPosition(circlePolygons, `${radius} ${units}`),
        getPosition: (d: LabelPosition) => d.coordinates,
        getText: (d: LabelPosition) => d.label,
        getAngle: (d: LabelPosition) => d.angle,
        getSize: 6,
        getTextAnchor: 'middle',
        getAlignmentBaseline: 'center',
        sizeMinPixels: 6,
        sizeScale: 2,
        opacity: 0.9,
        getColor: getTextColor ? getTextColor : [0, 0, 0, 255],
        pickable: false,
        characterSet: 'auto',
        visibilityByZoom: rest.visibilityByZoom,
      }),
    ]
  }
  filterSubLayer({
    layer,
    viewport,
  }: {
    layer: unknown
    viewport: ViewportOptions
  }) {
    const { min = -Infinity, max = Infinity } = get(
      layer,
      'props.visibilityByZoom',
      { min: -Infinity, max: Infinity }
    )
    const currentZoomRange = Math.floor(get(viewport, 'zoom')!)

    return min <= currentZoomRange && max >= currentZoomRange
  }
}

CircleLayer.layerName = 'CircleLayerWithLabel'
CircleLayer.defaultProps = defaultProps

export default CircleLayer
