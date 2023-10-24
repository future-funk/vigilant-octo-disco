import { FREQUENCY_TYPE } from './FREQUENCY_TYPE'
import { MEASUREMENT_VALUE } from './MEASUREMENT'
import { TIMEFRAME } from './TIMEFRAME'

export const DEFAULT_TXN = {
  frequency: FREQUENCY_TYPE.ANNUALLY,
  timeframe: TIMEFRAME.ALL,
  measurement: MEASUREMENT_VALUE.LEVEL,
}
