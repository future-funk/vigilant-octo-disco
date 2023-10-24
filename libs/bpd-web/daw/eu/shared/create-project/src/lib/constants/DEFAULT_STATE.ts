import { ROUTES } from '@bpd/bpd-web/shared/config'
import { DealReqType, TEAMS } from '@bpd/ui/constants'
import { EU_PROJECT_DEFAULT_FORM_VALUES } from './PROJECT_DEFAULT_FORM_VALUES'

export const DEFAULT_STATE = {
  requestType: EU_PROJECT_DEFAULT_FORM_VALUES.requestType as DealReqType,
  team: TEAMS.EU,
  pageTitle: 'Create New Project',
  breadcrumbs: [
    {
      key: 'back',
      href: `${ROUTES.INVESTMENT_PROCESS.EU.TRACKER}`,
      title: 'Back to Task Listing',
      typographyProps: {
        variant: 'body3',
        color: 'primary.main',
      },
    },
  ],
}
