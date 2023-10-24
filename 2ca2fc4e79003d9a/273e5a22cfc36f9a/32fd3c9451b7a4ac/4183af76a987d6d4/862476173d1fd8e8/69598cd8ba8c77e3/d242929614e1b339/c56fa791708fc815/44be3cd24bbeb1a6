import { Suspense } from 'react'
import { ROUTES } from '@bpd/bpd-web/shared/config'
import {
  Company360DetailPage,
  Company360HomePage,
} from '@bpd/bpd-web/company360/shared/feature-shell'

import LazyC360GlobalEntryPage from '@bpd/bpd-web/company360/global/feature-shell'

import { C360Skeleton } from '../components'

const router = [
  {
    path: ROUTES.C360,
    element: (
      <Suspense fallback={<C360Skeleton />}>
        <LazyC360GlobalEntryPage />
      </Suspense>
    ),
    children: [
      {
        path: '',
        element: <Company360HomePage />,
      },
      {
        path: `${ROUTES.C360}/companies/:companyId/*`,
        element: <Company360DetailPage />,
      },
    ],
  },
]
export default router
