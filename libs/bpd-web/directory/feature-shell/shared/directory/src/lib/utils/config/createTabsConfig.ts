import {
    CreateTabOptions,
    createTabs,
  } from '@bpd/bpd-web/directory/feature-shell/shared/core'
  import { BaseRoutes } from '@bpd/bpd-web/shared/config'
  import { BpdTabsProps } from '@bpd/bpd-web/shared/ui'
  
  const createTabsConfig = (
    routes: BaseRoutes,
    options: CreateTabOptions
  ): Record<string, BpdTabsProps> => {
    const { left, right } = options
  
    return createTabs([
      {
        path: routes.DEFAULT.asParent,
        left,
        right,
      },
    ])
  }
  
  export default createTabsConfig
  