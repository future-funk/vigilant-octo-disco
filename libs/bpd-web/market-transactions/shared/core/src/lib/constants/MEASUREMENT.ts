import { FREQUENCY_TYPE } from './FREQUENCY_TYPE'

export const MEASUREMENT_LABEL = {
  LEVEL: 'Levels',
  YoY: 'YoY, %',
  QoQ: 'QoQ, %',
  MoM: 'MoM, %',
} as const

export const MEASUREMENT_VALUE = {
  LEVEL: 'Level',
  YoY: 'Yoy',
  QoQ: 'Qoq',
  MoM: 'Mom',
} as const

export const MEASUREMENT_MAP = {
  [MEASUREMENT_VALUE.LEVEL]: MEASUREMENT_LABEL.LEVEL,
  [MEASUREMENT_VALUE.YoY]: MEASUREMENT_LABEL.YoY,
  [MEASUREMENT_VALUE.QoQ]: MEASUREMENT_LABEL.QoQ,
  [MEASUREMENT_VALUE.MoM]: MEASUREMENT_LABEL.MoM,
}

export const FREQ_MEASUREMENT_MAP: Record<
  typeof FREQUENCY_TYPE[keyof typeof FREQUENCY_TYPE],
  Array<{
    label: typeof MEASUREMENT_LABEL[keyof typeof MEASUREMENT_LABEL]
    value: typeof MEASUREMENT_VALUE[keyof typeof MEASUREMENT_VALUE]
  }>
> = {
  Y: [
    { label: MEASUREMENT_LABEL.LEVEL, value: MEASUREMENT_VALUE.LEVEL },
    { label: MEASUREMENT_LABEL.YoY, value: MEASUREMENT_VALUE.YoY },
  ],
  Q: [
    { label: MEASUREMENT_LABEL.LEVEL, value: MEASUREMENT_VALUE.LEVEL },
    { label: MEASUREMENT_LABEL.QoQ, value: MEASUREMENT_VALUE.QoQ },
    { label: MEASUREMENT_LABEL.YoY, value: MEASUREMENT_VALUE.YoY },
  ],
  M: [
    { label: MEASUREMENT_LABEL.LEVEL, value: MEASUREMENT_VALUE.LEVEL },
    { label: MEASUREMENT_LABEL.MoM, value: MEASUREMENT_VALUE.MoM },
    { label: MEASUREMENT_LABEL.YoY, value: MEASUREMENT_VALUE.YoY },
  ],
}
