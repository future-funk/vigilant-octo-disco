import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { ROUTES } from '@bpd/bpd-web/shared/config'
import { DashboardSkeleton, RouteObject } from '@bpd/bpd-web/shared/core'
import MyWorkspaceEntry from '@bpd/my-workspace/feature-shell'
import { HeaderExtraContentRight } from '@bpd/my-workspace/shared/core'

const router: RouteObject[] = [
  {
    path: ROUTES.MY_WORKSPACE,
    handle: {
      crumb: () => 'Overview',
      pageTitle: () => 'My Workspace',
      headerExtraContent: {
        right: <HeaderExtraContentRight />,
      },
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
        path: `${ROUTES.MY_WORKSPACE}`,
        element: <MyWorkspaceEntry />,
      },
    ],
  },
]

export default router
