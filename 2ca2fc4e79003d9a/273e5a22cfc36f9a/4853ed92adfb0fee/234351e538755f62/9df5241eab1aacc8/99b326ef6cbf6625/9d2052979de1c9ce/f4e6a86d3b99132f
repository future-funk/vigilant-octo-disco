import { Suspense, lazy } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import {
  HeaderExtraContentRight,
  SECONDARY_MENU,
} from '@bpd/data-downloader/shared/core'
import { ROUTES } from '@bpd/bpd-web/shared/config'
import { DashboardSkeleton, RouteObject } from '@bpd/bpd-web/shared/core'
import { router as twrEngineRouterDefs } from '@bpd/twr-engine/routing'

const IrrEngineEntry = lazy(
  () =>
    import(
      /* webpackChunkName: "IrrEngineEntry" */ '@bpd/data-downloader/feature-irr-engine'
    )
)

const router: RouteObject[] = [
  {
    path: ROUTES.DATA_DOWNLOADER.BASE,
    handle: {
      headerExtraContent: {
        right: <HeaderExtraContentRight />,
      },
      crumb: () => SECONDARY_MENU.DATA_DOWNLOADER,
      pageTitle: () => SECONDARY_MENU.DATA_DOWNLOADER,
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
    // element: <DataDownloaderEntry />,
    children: [
      ...twrEngineRouterDefs,
      {
        path: ROUTES.DATA_DOWNLOADER.IRR_ENGINE,
        handle: {
          crumb: () => SECONDARY_MENU.IRR_ENGINE,
          pageTitle: () => SECONDARY_MENU.IRR_ENGINE,
        },
        element: <IrrEngineEntry />,
      },
      {
        path: ROUTES.DATA_DOWNLOADER.BASE,
        element: <Navigate to={ROUTES.DATA_DOWNLOADER.TWR_ENGINE} replace />,
      },
    ],
  },
]

export default router
