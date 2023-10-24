import { ROUTES } from '@bpd/bpd-web/shared/config'
import { TEAMS } from '@bpd/ui/constants'

export const DEFAULT_STATE = {
  requestType: null,
  team: TEAMS.EU,
  pageTitle: '',
  breadcrumbs: [
    {
      key: 'back',
      href: `${ROUTES.INVESTMENT_PROCESS.EU.BASE}/deals`,
      title: 'Back to Deal Listing',
      typographyProps: {
        variant: 'body3',
        color: 'primary.main',
      },
    },
  ],
}
