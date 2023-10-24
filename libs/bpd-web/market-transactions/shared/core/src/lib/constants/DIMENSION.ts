import { Options } from '@bpd/bpd-web/shared/data-access'

export const DIMENSION_TYPE = {
  COUNTRY: 'country',
  SECTOR: 'sector',
  CAPITAL_FLOW_TYPE: 'capital_flow_type',
}

export const DIMENSION_LABEL = {
  [DIMENSION_TYPE.COUNTRY]: 'Country',
  [DIMENSION_TYPE.SECTOR]: 'Sector',
  [DIMENSION_TYPE.CAPITAL_FLOW_TYPE]: 'Capital Flow Type',
}

export const DIMENSION_TYPE_OPTIONS: Options<
  typeof DIMENSION_TYPE[keyof typeof DIMENSION_TYPE]
> = [
  {
    label: 'Country',
    value: DIMENSION_TYPE.COUNTRY,
  },
  {
    label: 'Sector',
    value: DIMENSION_TYPE.SECTOR,
  },
  {
    label: 'Capital Flow Type',
    value: DIMENSION_TYPE.CAPITAL_FLOW_TYPE,
  },
]
