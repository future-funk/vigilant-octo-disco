import {
  createBreadcrumbsConfig,
  createModulesConfig,
  createRoutingConfig,
  TEAM_SELECT_OPTIONS,
  directorySlice,
  PAGE_TITLE
} from '@bpd/bpd-web/directory/feature-shell/shared/directory'
import {
  PageConfig,
} from '@bpd/bpd-web/directory/feature-shell/shared/core'
import { ROUTES } from '@bpd/bpd-web/shared/config'
import {
  BASE_ROUTES,
  SCOPE,
  VIEW_STATE,
} from '../constants'
import slots from './slots'

const directoryConfig: PageConfig = {
  [BASE_ROUTES.DEFAULT.asParent]: {
    dashboard: {
      teamSelect: {
        options: TEAM_SELECT_OPTIONS,
        path: ROUTES.DIRECTORY.DIRECTORY_BASE,
      },
    },
    breadcrumbs: createBreadcrumbsConfig(BASE_ROUTES, {
      overrides: [[1, { title: PAGE_TITLE }]],
    }),
    modules: createModulesConfig({
      slices: { directory: directorySlice },
      viewState: VIEW_STATE,
    }),
    scope: SCOPE,
    title: PAGE_TITLE,
    routing: createRoutingConfig('/', slots),
  },
}

export default directoryConfig
