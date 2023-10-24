import {
  createBreadcrumbsConfig,
  createModulesConfig,
  createRoutingConfig,
  createTabsConfig,
} from '../utils'
import { PageConfig } from '@bpd/bpd-web/directory/feature-shell/shared/core'
import { ROUTES } from '@bpd/bpd-web/shared/config'
import {
  BASE_ROUTES,
  SCOPE,
  VIEW_STATE,
  PAGE_TITLE,
  TEAM_SELECT_OPTIONS,
} from '../constants'
import { DirectorySlice } from '../data'
import slots from './slots'

const logisticConfig: PageConfig = {
  [BASE_ROUTES.LOGISTICS.asParent]: {
    dashboard: {
      teamSelect: {
        options: TEAM_SELECT_OPTIONS,
        path: ROUTES.DIRECTORY.DIRECTORY_BASE,
      },
    },
    breadcrumbs: createBreadcrumbsConfig(BASE_ROUTES),
    modules: createModulesConfig({
      slices: { directory: DirectorySlice },
      viewState: VIEW_STATE,
    }),
    tabs: createTabsConfig(BASE_ROUTES, {}),
    scope: SCOPE,
    title: PAGE_TITLE,
    routing: createRoutingConfig('/', slots),
  },
}

export default logisticConfig
