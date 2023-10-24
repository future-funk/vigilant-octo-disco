import { ROUTES } from '@bpd/bpd-web/shared/config'
import { DealReqType, TEAMS } from '@bpd/ui/constants'
import { PROJECT_DEFAULT_FORM_VALUES } from '@bpd/daw/shared/project'

export const DEFAULT_STATE = {
  requestType: PROJECT_DEFAULT_FORM_VALUES.requestType as DealReqType,
  team: TEAMS.US,
  pageTitle: 'Create New Project',
  breadcrumbs: [
    {
      key: 'back',
      href: `${ROUTES.INVESTMENT_PROCESS.US.TRACKER}`,
      title: 'Back to Deal Listing',
      typographyProps: {
        variant: 'body3',
        color: 'primary.main',
      },
    },
  ],
}
