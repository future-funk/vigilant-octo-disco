import {
  createBreadcrumbsConfig,
  createModulesConfig,
  createRoutingConfig,
  createTabsConfig,
  TEAM_SELECT_OPTIONS,
} from '@bpd/bpd-web/directory/feature-shell/shared/directory'
import {
  createPageTitleConfig,
  PageConfig,
} from '@bpd/bpd-web/directory/feature-shell/shared/core'
import { ROUTES } from '@bpd/bpd-web/shared/config'
import {
  BASE_ROUTES,
  SCOPE,
  VIEW_STATE,
  PAGE_TITLE,
  HOME_BREADCRUMB,
  DIRECTORY,
} from '../../../shared'
import { DirectorySlice } from '../data'
import slots from './slots'

const directoryConfig: PageConfig = {
  [BASE_ROUTES.DEFAULT.asParent]: {
    dashboard: {
      breadcrumbs: [HOME_BREADCRUMB, DIRECTORY],
      title: PAGE_TITLE,
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
    title: createPageTitleConfig(),
    routing: createRoutingConfig('/', slots),
  },
}

export default directoryConfig
