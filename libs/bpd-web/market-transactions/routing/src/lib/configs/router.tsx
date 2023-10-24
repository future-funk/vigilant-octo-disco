import { ROUTES } from '@bpd/bpd-web/shared/config'
import { DashboardSkeleton, RouteObject } from '@bpd/bpd-web/shared/core'
import { lazy, Suspense } from 'react'
import { Outlet } from 'react-router'
import { Navigate } from 'react-router-dom'

const MarketTransactionsEntry = lazy(
  () =>
    import(
      /* webpackChunkName: "MarketTransactionsEntry" */ '@bpd/market-transactions/feature-shell'
    )
)

const router: RouteObject[] = [
  {
    path: ROUTES.DASHBOARDS.MARKET.MARKET_TRANSACTIONS.BASE,
    handle: {
      crumb: () => 'Market Transactions',
      pageTitle: () => 'Market Transactions',
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
        path: `${ROUTES.DASHBOARDS.MARKET.MARKET_TRANSACTIONS.BASE}/*`,
        element: <MarketTransactionsEntry />,
      },
      {
        path: ROUTES.DASHBOARDS.MARKET.MARKET_TRANSACTIONS.BASE,
        element: (
          <Navigate
            to={ROUTES.DASHBOARDS.MARKET.MARKET_TRANSACTIONS.OVERVIEW}
            replace
          />
        ),
      },
    ],
  },
]

export default router
