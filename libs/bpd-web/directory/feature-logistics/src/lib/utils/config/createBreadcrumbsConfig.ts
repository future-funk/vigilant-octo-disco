import { BaseRoutes, ROUTES } from '@bpd/bpd-web/shared/config'
import { TypographyProps } from '@gic/battlefield-ui-pack'
import { chain } from 'lodash'

export interface Breadcrumb {
    key: string,
    title: string,
    href?: string,
    typographyProps?: TypographyProps
}

export interface CreateBreadcrumbsOptions {
    overrides?: [number, Partial<Breadcrumb>][]
    items?: Breadcrumb[]
}

export const HOME_BREADCRUMB = {
    title: 'Home',
    href: ROUTES.DEFAULT,
    key: ROUTES.DEFAULT
}

const createBreadcrumbsConfig = (
    routes: BaseRoutes,
    options?: CreateBreadcrumbsOptions
) => {
    const { items = [], overrides } = options || {}

    return [
      HOME_BREADCRUMB,
      {
        title: 'Directory',
        href: routes.DEFAULT.asParent,
        key: routes.DEFAULT.asParent,
      },
      ...items,
    ].map((config, index) => {
      const match = chain(overrides)
        .find(([position]) => index === position)
        .get(1)
        .value() as Partial<Breadcrumb>
  
      return match ? { ...config, ...match } : config
    })
}

export default createBreadcrumbsConfig