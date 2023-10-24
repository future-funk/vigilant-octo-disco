import { lazy } from 'react'
import { ROUTES } from '@bpd/bpd-web/shared/config'
import { RouteObject } from '@bpd/bpd-web/shared/core'

const ESGPortalEntry = lazy(
  () =>
    import(
      /* webpackChunkName: "esg-portal-global" */ '@bpd/esg-portal/feature-shell'
    )
)

const router: RouteObject[] = [
  {
    path: `${ROUTES.KNOWLEDGE.ESG_PORTAL}`,
    handle: {
      crumb: () => 'ESG Portal',
      pageTitle: () => 'ESG Portal',
      headerExtraContent: {
        right: <></>,
      },
    },
    children: [
      {
        index: true,
        path: `*`,
        element: <ESGPortalEntry />,
      },
    ],
  },
]

export default router

