import { chain } from 'lodash'

const AMERICAS = 'Americas'
const EUROPE = 'Europe'
const GREATER_CHINA = 'Greater China'
const ASIA_EX_CHINA = 'Asia ex China'

export const MGMT_REGION = {
  AMERICAS,
  EUROPE,
  GREATER_CHINA,
  ASIA_EX_CHINA,
}

export const MGMT_REGION_OPTIONS = chain(MGMT_REGION)
  .values()
  .map((region) => ({ key: region, value: region, label: region }))
  .value()
