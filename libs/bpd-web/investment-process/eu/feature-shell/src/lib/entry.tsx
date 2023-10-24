import { defaults } from '@bpd/bpd-web/investment-process/eu/shared/core'
// import { Page } from '@bpd/bpd-web/investment-process/shared/core'
import { ROUTES } from '@bpd/bpd-web/shared/config'
import { Page, RegisterPage } from '@bpd/bpd-web/shared/core'
import loadable, { lazy } from '@loadable/component'

const Deals = loadable.lib(
  () => import('@bpd/bpd-web/investment-process/eu/shared/deals')
)

const People = loadable.lib(
  () => import('@bpd/bpd-web/investment-process/eu/shared/people')
)

const Projects = loadable.lib(
  () => import('@bpd/bpd-web/investment-process/eu/shared/projects')
)

const Tracker = loadable.lib(
  () => import('@bpd/bpd-web/investment-process/eu/shared/tracker')
)

const InvestmentMemo = loadable.lib(
  () => import('@bpd/bpd-web/investment-process/eu/investment-memo')
)

const Entry = () => {
  return (
    <>
      <RegisterPage
        page={Page}
        defaults={defaults}
        config={{
          [`${ROUTES.INVESTMENT_PROCESS.EU.DEALS}/*`]: Deals,
          [ROUTES.INVESTMENT_PROCESS.EU.PEOPLE]: People,
          [ROUTES.INVESTMENT_PROCESS.EU.PROJECTS]: Projects,
          [`${ROUTES.INVESTMENT_PROCESS.EU.TRACKER}/*`]: Tracker,
          [ROUTES.INVESTMENT_PROCESS.EU.INVESTMENT_MEMO]: InvestmentMemo,
        }}
      />
    </>
  )
}

export default Entry
