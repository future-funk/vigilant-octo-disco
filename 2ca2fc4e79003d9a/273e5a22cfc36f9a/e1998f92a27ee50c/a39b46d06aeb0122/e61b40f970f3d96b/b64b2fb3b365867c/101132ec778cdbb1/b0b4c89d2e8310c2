import { ROUTES } from '@bpd/bpd-web/shared/config'
import { DashboardSkeleton, RouteObject } from '@bpd/bpd-web/shared/core'
import { Suspense, lazy } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const EsgAdePortalEntry = lazy(
  () =>
    import(
      /* webpackChunkName: "EsgAdePortalEntry" */ '@bpd/esg-ade-portal/feature-shell'
    )
)

const router: RouteObject[] = [
  {
    path: ROUTES.KNOWLEDGE.ESG_ADE_PORTAL.BASE,
    handle: {
      crumb: () => 'ESG | ADE Portal',
      pageTitle: () => 'ESG | ADE Portal',
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
        handle: {
          crumb: () => 'Case Study',
          pageTitle: () => 'Case Study',
        },
        path: ROUTES.KNOWLEDGE.ESG_ADE_PORTAL.CASE_STUDY,
        element: <EsgAdePortalEntry />,
      },
      {
        handle: {
          crumb: () => 'Case Study',
          pageTitle: () => 'Case Study',
        },
        path: ROUTES.KNOWLEDGE.ESG_ADE_PORTAL.CASE_STUDY_DETAILS,
        element: <EsgAdePortalEntry />,
      },
      {
        handle: {
          crumb: () => 'Research',
          pageTitle: () => 'Research',
        },
        path: ROUTES.KNOWLEDGE.ESG_ADE_PORTAL.RESEARCH,
        element: <EsgAdePortalEntry />,
      },
      {
        handle: {
          crumb: () => 'Research',
          pageTitle: () => 'Research',
        },
        path: ROUTES.KNOWLEDGE.ESG_ADE_PORTAL.RESEARCH_DETAILS,
        element: <EsgAdePortalEntry />,
      },
      {
        path: ROUTES.KNOWLEDGE.ESG_ADE_PORTAL.BASE,
        element: (
          <Navigate to={ROUTES.KNOWLEDGE.ESG_ADE_PORTAL.CASE_STUDY} replace />
        ),
      },
    ],
  },
]

export default router
