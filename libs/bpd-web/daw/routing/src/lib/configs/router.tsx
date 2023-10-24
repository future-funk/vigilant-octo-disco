import { lazy } from 'react'
import { RouteObject } from '@bpd/bpd-web/shared/core'

export const DawFormEuEntry = lazy(
  () =>
    import(
      /* webpackChunkName: "daw-eu-feature-shell" */ '@bpd/daw/eu/feature-shell'
    )
)

export const DawFormUsEntry = lazy(
  () =>
    import(
      /* webpackChunkName: "daw-us-feature-shell" */ '@bpd/daw/us/feature-shell'
    )
)

const router: RouteObject[] = []

export default router
