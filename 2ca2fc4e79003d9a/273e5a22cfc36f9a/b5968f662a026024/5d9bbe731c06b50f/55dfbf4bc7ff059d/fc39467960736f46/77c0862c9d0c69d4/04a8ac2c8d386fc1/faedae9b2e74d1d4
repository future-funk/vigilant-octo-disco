import { Suspense, lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { ROUTES } from '@bpd/bpd-web/shared/config'
import { Outlet } from 'react-router-dom'
import { DashboardSkeleton, RouteObject } from '@bpd/bpd-web/shared/core'

const ExpertsGlobalEntry = lazy(
  () => import('@bpd/bpd-web/experts/feature-shell')
)

const router: RouteObject[] = [
  {
    path: ROUTES.EXPERTS.BASE,
    handle: {
      headerExtraContent: {
        right: <div />
      },
      crumb: () => 'Experts',
      pageTitle: () => 'Experts',
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
        path: ROUTES.EXPERTS.BASE,
        element: <ExpertsGlobalEntry />,
      },
      {
        path: ROUTES.EXPERTS.BASE,
        element: <Navigate to={`${ROUTES.EXPERTS.BASE}`} replace />,
      },
    ],
  },
]

export default router
