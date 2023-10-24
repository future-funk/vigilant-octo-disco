import { Options } from '@bpd/bpd-web/shared/data-access'

export const TXN_VOL_DIMENSION_TYPE = {
  SINGLE_ASSET_PORTFOLIO: 'txn_class',
  COUNTRY: 'country',
  SECTOR: 'sector',
  CAPITAL_FLOW_TYPE: 'capital_flow_type',
} as const

export const TXN_VOL_DIMENSION_TYPE_OPTIONS: Options<
  typeof TXN_VOL_DIMENSION_TYPE[keyof typeof TXN_VOL_DIMENSION_TYPE]
> = [
  {
    label: 'Single Asset & Portfolio',
    value: TXN_VOL_DIMENSION_TYPE.SINGLE_ASSET_PORTFOLIO,
  },
  {
    label: 'Country',
    value: TXN_VOL_DIMENSION_TYPE.COUNTRY,
  },
  {
    label: 'Sector',
    value: TXN_VOL_DIMENSION_TYPE.SECTOR,
  },
]
