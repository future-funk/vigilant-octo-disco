import { Config } from '@bpd/bpd-web/shared/core'
import { HOME_BREADCRUMB } from '../constants'

const defaults: Partial<Config> = {
  dashboard: {
    breadcrumbs: [HOME_BREADCRUMB],
    title: 'My Workspace',
    teamSelect: null,
  },
}

export default defaults
