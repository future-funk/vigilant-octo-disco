import { useMemo, useState } from 'react'
import { withAuthMvIrr } from '@bpd/access-control'
import { useAppSelector } from '@bpd/bpd-web/shared/store'
import { BpdErrorForbiddenBox, BpdTabs } from '@bpd/bpd-web/shared/ui'
import Portfolio from './Portfolio'
import Project from './Project'
import RefreshDateTemplate from './RefreshDateTemplate'
import { MvIrrSelectors } from '../data'

const PORTFOLIO_TAB = {
  tab: 'Portfolio',
  key: `Portfolio`,
  children: <Portfolio />,
}
const PROJECT_TAB = {
  tab: 'Project',
  key: `Project`,
  children: <Project />,
}

const MV_TABS = [PORTFOLIO_TAB, PROJECT_TAB]

const MvDashboard = () => {
  const [activeTab, setActiveTab] = useState(PORTFOLIO_TAB.key)

  const { portfolioLastUpdatedDt, projectLastUpdatedDt } = useAppSelector(
    MvIrrSelectors.getMetaData
  )

  const lastUpdatedDt = useMemo(
    () =>
      activeTab === PORTFOLIO_TAB.key
        ? portfolioLastUpdatedDt
        : projectLastUpdatedDt,
    [portfolioLastUpdatedDt, projectLastUpdatedDt, activeTab]
  )

  return (
    <BpdTabs
      sx={{ p: 1 }}
      activeKey={activeTab}
      tabBarExtraContent={
        <RefreshDateTemplate lastUpdatedDt={lastUpdatedDt} sx={{ mr: 3 }} />
      }
      items={MV_TABS}
      onChange={(val) => setActiveTab(val)}
    />
  )
}

export default withAuthMvIrr(MvDashboard, {
  NotAllowedComponent: <BpdErrorForbiddenBox />,
})
