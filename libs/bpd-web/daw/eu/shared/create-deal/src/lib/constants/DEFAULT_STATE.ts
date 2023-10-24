import { ROUTES } from '@bpd/bpd-web/shared/config'
import { DealReqType, TEAMS } from '@bpd/ui/constants'
import { DEFAULT_FORM_VALUES } from './DEFAULT_FORM_VALUES'
export const DEFAULT_STATE = {
  requestType: DEFAULT_FORM_VALUES.requestType as DealReqType,
  team: TEAMS.EU,
  pageTitle: 'Create New Deal',
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
