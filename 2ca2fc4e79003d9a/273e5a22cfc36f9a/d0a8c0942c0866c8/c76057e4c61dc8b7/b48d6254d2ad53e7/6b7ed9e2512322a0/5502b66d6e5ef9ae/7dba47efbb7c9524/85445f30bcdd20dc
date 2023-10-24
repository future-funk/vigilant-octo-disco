import { Options } from '@bpd/bpd-web/shared/data-access'

export const DECOMP_VIEW_TYPE = {
  NET_FLOW: 'net_flow',
  BOUGHT: 'bought',
  SOLD: 'sold',
  TOTAL: 'total',
}

export const DECOMP_VIEW_TYPE_OPTIONS: Options<
  typeof DECOMP_VIEW_TYPE[keyof typeof DECOMP_VIEW_TYPE]
> = [
  { label: 'Net Flow', value: DECOMP_VIEW_TYPE.NET_FLOW },
  { label: 'Bought', value: DECOMP_VIEW_TYPE.BOUGHT },
  { label: 'Sold', value: DECOMP_VIEW_TYPE.SOLD },
  { label: 'Total', value: DECOMP_VIEW_TYPE.TOTAL },
]

export const VIEW_TYPE_MAP = {
  [DECOMP_VIEW_TYPE.NET_FLOW]: {
    label: 'Net Flow',
    header: 'Net Flow',
    tooltip: 'Bought - Sold',
    priceField: 'netPriceUsd',
    percentField: 'netPercent',
  },
  [DECOMP_VIEW_TYPE.BOUGHT]: {
    label: 'Bought',
    header: 'Total',
    priceField: 'buyPriceUsd',
    percentField: 'buyPercent',
  },
  [DECOMP_VIEW_TYPE.SOLD]: {
    label: 'Sold',
    header: 'Total',
    priceField: 'sellPriceUsd',
    percentField: 'sellPercent',
  },
  [DECOMP_VIEW_TYPE.TOTAL]: {
    label: 'Total',
    header: 'Total',
    tooltip: 'Bought + Sold',
    priceField: 'priceUsd',
    percentField: 'percent',
  },
}
