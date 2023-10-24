import { MEASUREMENT_VALUE } from '../constants'

const getIsMeasurementLevel = (measurement: string): boolean => {
  return MEASUREMENT_VALUE.LEVEL === measurement
}

export default getIsMeasurementLevel
