import { Options, CardViewType } from '../types'
export const CARD_VIEW_TYPE = {
  TABLE: 'TABLE',
  CHART: 'CHART',
} as const

export const CARD_VIEW_TYPE_OPTIONS: Options<CardViewType> = [
  {
    label: 'Chart',
    value: CARD_VIEW_TYPE.CHART,
  },
  {
    label: 'Grid',
    value: CARD_VIEW_TYPE.TABLE,
  },
]
