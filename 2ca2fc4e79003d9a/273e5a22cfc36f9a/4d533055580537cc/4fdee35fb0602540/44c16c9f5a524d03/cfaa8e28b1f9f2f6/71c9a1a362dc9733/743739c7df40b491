import { ROUTES } from '@bpd/bpd-web/shared/config'
import { DashboardSkeleton, RouteObject } from '@bpd/bpd-web/shared/core'
import { router as esgAdePortalRouterDefs } from '@bpd/esg-ade-portal/routing'
import { router as parcelAnalysisRouterDefs } from '@bpd/project-hansel/shared/routing'
import { router as stratsPortalRouterDefs } from '@bpd/strats-portal/routing'
import { router as esgPortalRouterDefs } from '@bpd/esg-portal/routing'
import { Suspense, lazy } from 'react'
import { Outlet } from 'react-router-dom'

const KnowledgeEntry = lazy(
  () =>
    import(
      /* webpackChunkName: "KnowledgeEntry" */ '@bpd/knowledge/feature-shell'
    )
)

const router: RouteObject[] = [
  {
    path: ROUTES.KNOWLEDGE.BASE,
    handle: {
      headerExtraContent: {
        right: <></>,
      },
      crumb: () => 'Knowledge',
      pageTitle: () => 'Knowledge',
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
        path: ROUTES.KNOWLEDGE.BASE,
        element: <KnowledgeEntry />,
      },
      ...stratsPortalRouterDefs,
      ...parcelAnalysisRouterDefs,
      ...esgPortalRouterDefs,
      ...esgAdePortalRouterDefs
    ],
  },
]

export default router
