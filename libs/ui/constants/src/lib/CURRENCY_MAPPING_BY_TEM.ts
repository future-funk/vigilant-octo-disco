import { Team } from './TEAMS'
import { map } from 'lodash'
import { CURRENCIES } from './CURRENCIES'

type IgnoredTeams = ''

export const CURRENCY_MAPPING_BY_TEM: Record<
  Exclude<Team, IgnoredTeams>,
  { label: string; value: string }[]
> = {
  us: [
    ...map(['BRL', 'CAD', 'CHF', 'MXN', 'USD'], (item) => ({
      label: item,
      value: item,
    })),
  ],
  eu: [
    ...map(['DKK', 'EUR', 'GBP', 'SEK', 'TRY', 'USD'], (item) => ({
      label: item,
      value: item,
    })),
  ],
  cn: [
    ...map(['CNY', 'HKD', 'TWD', 'USD'], (item) => ({
      label: item,
      value: item,
    })),
  ],
  asig: [
    ...map(
      [
        'AUD',
        'CNY',
        'HKD',
        'IDR',
        'INR',
        'JPY',
        'MYR',
        'NZD',
        'PHP',
        'KRW',
        'THB',
        'TWD',
        'VND',
        'USD',
      ],
      (item) => ({
        label: item,
        value: item,
      })
    ),
  ],
  anz: [
    ...map(['AUD', 'NZD', 'USD'], (item) => ({
      label: item,
      value: item,
    })),
  ],
  jp: [
    ...map(['JPY', 'USD'], (item) => ({
      label: item,
      value: item,
    })),
  ],
  in: [
    ...map(['INR', 'USD'], (item) => ({
      label: item,
      value: item,
    })),
  ],
  kr: [
    ...map(['KRW', 'USD'], (item) => ({
      label: item,
      value: item,
    })),
  ],
  cmt: [
    ...map(CURRENCIES, (item) => ({
      label: item,
      value: item,
    })),
  ],
  strats: [],
  global: [],
  gips: [],
}
