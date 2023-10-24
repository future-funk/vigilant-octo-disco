import { Options } from "@bpd/bpd-web/shared/data-access"

export const FREQUENCY_TYPE = {
  ANNUALLY: 'Y',
  QUARTERLY: 'Q',
  MONTHLY: 'M',
} as const

export const FREQUENCY_TYPE_OPTIONS: Options<typeof FREQUENCY_TYPE[keyof typeof FREQUENCY_TYPE]> = [
  { label: 'Annually', value: FREQUENCY_TYPE.ANNUALLY },
  { label: 'Quarterly', value: FREQUENCY_TYPE.QUARTERLY },
  { label: 'Monthly', value: FREQUENCY_TYPE.MONTHLY },
]
