import { chain } from 'lodash'

const CMT = 'CMT'
const GIPS = 'GIPS'
const STRATS = 'Strats'

export const TRACKER = {
  CMT,
  GIPS,
  STRATS,
}

export const TRACKER_OPTIONS = chain(TRACKER)
  .values()
  .map((tracker) => ({ key: tracker, label: tracker, value: tracker }))
  .value()
