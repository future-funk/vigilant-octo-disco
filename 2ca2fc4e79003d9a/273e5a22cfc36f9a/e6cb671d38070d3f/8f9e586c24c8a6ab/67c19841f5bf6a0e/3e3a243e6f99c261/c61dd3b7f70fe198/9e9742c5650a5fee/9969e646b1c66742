import { chain } from 'lodash'

const MY_DEALS = 'My Deals'
const TEAM_DEALS = 'Team Deals'

export const OWNERSHIP = { MY_DEALS, TEAM_DEALS }

export const OWNERSHIP_OPTIONS = chain(OWNERSHIP)
  .values()
  .map((owner) => ({ key: owner, label: owner, value: owner }))
  .value()
