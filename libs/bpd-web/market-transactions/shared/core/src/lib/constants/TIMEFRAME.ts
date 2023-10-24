import { Options } from '@bpd/bpd-web/shared/data-access'
import { FREQUENCY_TYPE } from './FREQUENCY_TYPE'

export const TIMEFRAME = {
  ALL: 999,
  YR_10: 120,
  YR_5: 60,
  YR_2: 24,
  YR_1: 12,
  MTH_6: 6,
  MTH_3: 3,
} as const

export const TIMEFRAME_OPTIONS: Options<
  typeof TIMEFRAME[keyof typeof TIMEFRAME]
> = [
  { label: '1Y', value: TIMEFRAME.YR_1 },
  { label: '2Y', value: TIMEFRAME.YR_2 },
  { label: '5Y', value: TIMEFRAME.YR_5 },
  { label: '10Y', value: TIMEFRAME.YR_10 },
  { label: 'ALL', value: TIMEFRAME.ALL },
]

export const FREQ_TIMEFRAME_MAP = {
  [FREQUENCY_TYPE.ANNUALLY]: TIMEFRAME.ALL,
  [FREQUENCY_TYPE.QUARTERLY]: TIMEFRAME.YR_5,
  [FREQUENCY_TYPE.MONTHLY]: TIMEFRAME.YR_2,
}

export const MONTH_TIMEFRAME_OPTIONS: Options<
  typeof TIMEFRAME[keyof typeof TIMEFRAME]
> = [
  { label: '3M', value: TIMEFRAME.MTH_3 },
  { label: '6M', value: TIMEFRAME.MTH_6 },
  { label: '12M', value: TIMEFRAME.YR_1 },
  { label: '24M', value: TIMEFRAME.YR_2 },
]
