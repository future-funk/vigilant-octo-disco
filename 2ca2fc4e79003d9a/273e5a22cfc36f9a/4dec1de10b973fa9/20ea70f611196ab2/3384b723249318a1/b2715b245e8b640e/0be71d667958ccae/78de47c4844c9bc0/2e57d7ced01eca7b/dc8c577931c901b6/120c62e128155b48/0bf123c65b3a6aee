import type {
  Point,
  CircleLayerProps as CoreCircleLayerProps,
  Coordinate,
} from '@bpd/vendors/carto'
import { CircleLayer as CoreCircleLayer } from '@bpd/vendors/carto'

export interface CircleLayerData {
  coordinates: Point
}
export interface CircleLayerProps {
  coordinate?: Coordinate
  radius?: number | null
  skip?: boolean
  units?: CoreCircleLayerProps['units']
}
export const CIRCLE_LAYER_ID = 'circleLayer'

const CircleLayer = ({
  coordinate,
  radius,
  units = 'meters',
  skip = false,
}: CircleLayerProps = {}) => {
  const { latitude, longitude } = coordinate
  if (!latitude || !longitude || skip) return null

  return new CoreCircleLayer({
    radius,
    units,
    position: [longitude, latitude],
    getTextColor: () => [0, 0, 0, 0]
  })
}

export default CircleLayer
