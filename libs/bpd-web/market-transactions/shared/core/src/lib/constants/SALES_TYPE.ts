import { Options } from '@bpd/bpd-web/shared/data-access'

export const SALES_TYPE = {
  PROPERTY_SALES: 'Property Sales',
  PORTFOLIO_SALES: 'Portfolio Sales',
} as const

export const SALES_TYPE_OPTIONS: Options<
  typeof SALES_TYPE[keyof typeof SALES_TYPE]
> = [
  { label: SALES_TYPE.PROPERTY_SALES, value: SALES_TYPE.PROPERTY_SALES },
  { label: SALES_TYPE.PORTFOLIO_SALES, value: SALES_TYPE.PORTFOLIO_SALES },
]
