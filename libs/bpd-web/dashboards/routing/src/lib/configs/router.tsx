import { ROUTES } from '@bpd/bpd-web/shared/config'
import { DashboardSkeleton, RouteObject } from '@bpd/bpd-web/shared/core'
import {
  HeaderExtraContentRight,
  SECONDARY_MENU,
} from '@bpd/dashboards/shared/core'
import { Suspense } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { router as creditPortalRouterDefs } from '@bpd/credit-portal/routing'
import { router as fundPortalRouterDefs } from '@bpd/fund-portal/routing'
import { router as marketTransactionsRouterDefs } from '@bpd/market-transactions/routing'
import { router as teamAnalyticsRouterDefs } from '@bpd/team-analytics/routing'

const DashboardEntry = () => <div>Dashboards</div>

const router: RouteObject[] = [
  {
    path: ROUTES.DASHBOARDS.BASE,
    handle: {
      headerExtraContent: {
        right: <HeaderExtraContentRight />,
      },
      crumb: () => 'Dashboards',
      pageTitle: () => 'Dashboards',
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
        path: ROUTES.DASHBOARDS.BASE,
        element: (
          <Navigate
            to={ROUTES.DASHBOARDS.MARKET.MARKET_TRANSACTIONS.OVERVIEW}
            replace
          />
        ),
      },
      {
        handle: {
          crumb: () => SECONDARY_MENU.PORTFOLIO_ANALYTICS.BASE,
          pageTitle: () => SECONDARY_MENU.PORTFOLIO_ANALYTICS.BASE,
        },
        path: ROUTES.DASHBOARDS.PORTFOLIO_ANALYTICS.BASE,
        element: <DashboardEntry />,
        children: [
          {
            path: ROUTES.DASHBOARDS.PORTFOLIO_ANALYTICS.BASE,
            element: (
              <Navigate
                to={ROUTES.DASHBOARDS.PORTFOLIO_ANALYTICS.INVESTMENT_PACE}
                replace
              />
            ),
          },
          {
            index: true,
            handle: {
              crumb: () => SECONDARY_MENU.PORTFOLIO_ANALYTICS.INVESTMENT_PACE,
              pageTitle: () =>
                SECONDARY_MENU.PORTFOLIO_ANALYTICS.INVESTMENT_PACE,
            },
            path: ROUTES.DASHBOARDS.PORTFOLIO_ANALYTICS.INVESTMENT_PACE,
            element: <DashboardEntry />,
          },
          {
            index: true,
            handle: {
              crumb: () => SECONDARY_MENU.PORTFOLIO_ANALYTICS.EXPOSURE,
              pageTitle: () => SECONDARY_MENU.PORTFOLIO_ANALYTICS.EXPOSURE,
            },
            path: ROUTES.DASHBOARDS.PORTFOLIO_ANALYTICS.EXPOSURE,
            element: <DashboardEntry />,
          },
          {
            index: true,
            handle: {
              crumb: () => SECONDARY_MENU.PORTFOLIO_ANALYTICS.PERFORMANCE,
              pageTitle: () => SECONDARY_MENU.PORTFOLIO_ANALYTICS.PERFORMANCE,
            },
            path: ROUTES.DASHBOARDS.PORTFOLIO_ANALYTICS.PERFORMANCE,
            element: <DashboardEntry />,
          },
          {
            index: true,
            handle: {
              crumb: () => SECONDARY_MENU.PORTFOLIO_ANALYTICS.CASHFLOW,
              pageTitle: () => SECONDARY_MENU.PORTFOLIO_ANALYTICS.CASHFLOW,
            },
            path: ROUTES.DASHBOARDS.PORTFOLIO_ANALYTICS.CASHFLOW,
            element: <DashboardEntry />,
          },
        ],
      },
      {
        handle: {
          crumb: () => SECONDARY_MENU.MARKET.BASE,
          pageTitle: () => SECONDARY_MENU.MARKET.BASE,
        },
        path: ROUTES.DASHBOARDS.MARKET.BASE,
        children: [
          {
            path: ROUTES.DASHBOARDS.MARKET.BASE,
            element: (
              <Navigate
                to={ROUTES.DASHBOARDS.MARKET.MARKET_TRANSACTIONS.OVERVIEW}
                replace
              />
            ),
          },
          ...marketTransactionsRouterDefs,
        ],
      },
      ...creditPortalRouterDefs,
      ...fundPortalRouterDefs,
      ...teamAnalyticsRouterDefs,
    ],
  },
]

export default router
