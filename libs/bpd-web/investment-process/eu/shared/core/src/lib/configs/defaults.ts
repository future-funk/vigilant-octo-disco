import { getDefaults } from '@bpd/bpd-web/investment-process/shared/core'
import { ROUTES, TEAMS } from '@bpd/bpd-web/shared/config'
import { TABS } from '../constants'

const defaults = getDefaults({
  dashboard: {
    teamSelect: {
      path: `${ROUTES.INVESTMENT_PROCESS.BASE}/:team/deals`,
    },
  },
  page: {
    default: TABS.DEALS,
    tabs: {
      items: [TABS.DEALS, TABS.PROJECTS, TABS.TRACKER, TABS.PEOPLE],
    },
  },
  team: TEAMS.EU,
})

export default defaults
