import { ROUTES } from '@bpd/bpd-web/shared/config'
import { DashboardSkeleton, RouteObject } from '@bpd/bpd-web/shared/core'
import { Suspense, lazy } from 'react'
import { Outlet } from 'react-router-dom'

const FundPortalEntry = lazy(
  () =>
    import(
      /* webpackChunkName: "FundPortalEntry" */ '@bpd/fund-portal/feature-shell'
    )
)

const router: RouteObject[] = [
  {
    path: `${ROUTES.DASHBOARDS.FUND_PORTAL.BASE}/*`,
    handle: {
      crumb: () => 'Fund Portal',
      pageTitle: () => 'Fund Portal',
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
        path: `${ROUTES.DASHBOARDS.FUND_PORTAL.BASE}/*`,
        element: <FundPortalEntry />,
      },
    ],
  },
]

export default router
