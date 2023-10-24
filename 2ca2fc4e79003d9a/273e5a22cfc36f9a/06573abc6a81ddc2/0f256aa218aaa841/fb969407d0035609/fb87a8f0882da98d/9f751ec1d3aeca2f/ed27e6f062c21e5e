import { ROUTES } from '@bpd/bpd-web/shared/config'
import { DashboardSkeleton, RouteObject } from '@bpd/bpd-web/shared/core'
import { Suspense, lazy } from 'react'
import { Outlet } from 'react-router-dom'

const CreditPortalEntry = lazy(
  () =>
    import(
      /* webpackChunkName: "CreditPortalEntry" */ '@bpd/credit-portal/feature-shell'
    )
)

const router: RouteObject[] = [
  {
    path: `${ROUTES.DASHBOARDS.CREDIT_PORTAL.BASE}/*`,
    handle: {
      crumb: () => 'Credit Portal',
      pageTitle: () => 'Credit Portal',
    },
    element: (
      <Suspense
        fallback={
          <DashboardSkeleton center={<DashboardSkeleton.Box active />} />
        }
      >
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        path: `${ROUTES.DASHBOARDS.CREDIT_PORTAL.BASE}/*`,
        element: <CreditPortalEntry />,
      },
    ],
  },
]

export default router
