import {
  createBreadcrumbsConfig,
  createModulesConfig,
  createRoutingConfig,
  createTabsConfig,
  TEAM_SELECT_OPTIONS,
  directorySlice,
  PAGE_TITLE
} from '@bpd/bpd-web/directory/feature-shell/shared/directory'
import {
  PageConfig,
} from '@bpd/bpd-web/directory/feature-shell/shared/core'
import { BASE_ROUTES, VIEW_STATE, SCOPE } from '../constants'
import { ROUTES } from '@bpd/bpd-web/shared/config'
import slots from './slots'

const directoryConfig: PageConfig = {
  [BASE_ROUTES.DEFAULT.asParent]: {
    dashboard: {
      teamSelect: {
        options: TEAM_SELECT_OPTIONS,
        path: ROUTES.DIRECTORY.DIRECTORY_BASE,
      },
    },
    breadcrumbs: createBreadcrumbsConfig(BASE_ROUTES),
    modules: createModulesConfig({
      slices: { directory: directorySlice },
      viewState: VIEW_STATE,
    }),
    tabs: createTabsConfig(BASE_ROUTES, {}),
    scope: SCOPE,
    title: PAGE_TITLE,
    routing: createRoutingConfig('/', slots),
  },
}

export default directoryConfig
