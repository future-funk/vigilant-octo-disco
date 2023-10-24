import { Options } from '@bpd/bpd-web/shared/data-access'

export const BREAKDOWN_TYPE = {
  COUNTRY: 'country',
  INVESTMENT_VECHICLE: 'investment_vehicle',
  SECTOR: 'sector',
} as const

export const BREAKDOWN_ATTRIBUTES = {
  country: 'Returns Attribution Country',
  investment_vehicle: 'Investment Vehicle',
  sector: 'Sector',
}

export const BREAKDOWN_TYPE_OPTIONS: Options<
  typeof BREAKDOWN_TYPE[keyof typeof BREAKDOWN_TYPE]
> = [
  {
    label: BREAKDOWN_ATTRIBUTES[BREAKDOWN_TYPE.COUNTRY],
    value: BREAKDOWN_TYPE.COUNTRY,
  },
  {
    label: BREAKDOWN_ATTRIBUTES[BREAKDOWN_TYPE.INVESTMENT_VECHICLE],
    value: BREAKDOWN_TYPE.INVESTMENT_VECHICLE,
  },
  {
    label: BREAKDOWN_ATTRIBUTES[BREAKDOWN_TYPE.SECTOR],
    value: BREAKDOWN_TYPE.SECTOR,
  },
]
