import { Suspense, lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { ROUTES } from '@bpd/bpd-web/shared/config'
import { Outlet } from 'react-router-dom'
import { DashboardSkeleton, RouteObject } from '@bpd/bpd-web/shared/core'

const LogisticsEuEntry = lazy(
  () => import('@bpd/bpd-web/directory/feature-shell/feature-logistics')
)

const router: RouteObject[] = [
  {
    path: ROUTES.EXPERTS.BASE,
    handle: {
      headerExtraContent: {
        right: <div />
      },
      crumb: () => 'Logistics',
      pageTitle: () => 'Logistics',
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
        index: true,
        path: ROUTES.LOCATION_ANALYSIS.EU.OFFICE.LOGISTICS.asParent,
        element: <div>Welcome to Route</div>,
      },
    //   {
    //     path: ROUTES.LOCATION_ANALYSIS.EU.OFFICE.LOGISTICS.asParent,
    //     element: <Navigate to={`${ROUTES.LOCATION_ANALYSIS.EU.OFFICE.LOGISTICS.asParent}`} replace />,
    //   },
    ],
  },
]

export default router
