import { LayoutBodySlots } from '@bpd/bpd-web/directory/feature-shell/shared/ui'
import { BaseRoutes } from '@bpd/bpd-web/shared/config'

export const createRoutingConfig = (
  routes: BaseRoutes,
  slots: LayoutBodySlots
) => ({
  path: typeof routes === 'string' ? routes : routes.DIRECTORY.asChild,
  slots,
})

export default createRoutingConfig
