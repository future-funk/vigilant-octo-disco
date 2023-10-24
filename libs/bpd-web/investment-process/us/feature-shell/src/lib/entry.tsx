import { Page } from '@bpd/bpd-web/investment-process/shared/core'
import { defaults } from '@bpd/bpd-web/investment-process/us/shared/core'
import { ROUTES } from '@bpd/bpd-web/shared/config'
import { RegisterPage } from '@bpd/bpd-web/shared/core'
import loadable from '@loadable/component'

const Deals = loadable.lib(
  () => import('@bpd/bpd-web/investment-process/us/shared/deals')
)

const People = loadable.lib(
  () => import('@bpd/bpd-web/investment-process/us/shared/people')
)

const Projects = loadable.lib(
  () => import('@bpd/bpd-web/investment-process/us/shared/projects')
)

const Tracker = loadable.lib(
  () => import('@bpd/bpd-web/investment-process/us/shared/tracker')
)

const Entry = () => {
  return (
    <RegisterPage
      page={Page}
      defaults={defaults}
      config={{
        [`${ROUTES.INVESTMENT_PROCESS.US.DEALS}/*`]: Deals,
        [ROUTES.INVESTMENT_PROCESS.US.PEOPLE]: People,
        [ROUTES.INVESTMENT_PROCESS.US.PROJECTS]: Projects,
        [`${ROUTES.INVESTMENT_PROCESS.US.TRACKER}/*`]: Tracker,
      }}
    />
  )
}

export default Entry
