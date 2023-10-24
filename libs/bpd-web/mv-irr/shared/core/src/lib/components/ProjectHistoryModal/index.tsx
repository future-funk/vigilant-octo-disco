import { Modal } from '@gic/battlefield-ui-pack'
import React, { FC, useMemo, useState } from 'react'
import { ProjectSummary } from '@bpd/mv-irr/shared/data-access'
import CashFlows from './CashFlows'
import Categories from './Categories'
import MarketValues from './MarketValues'
import Comments from './Comments'
import { BpdTabs } from '@bpd/bpd-web/shared/ui'
import { UiSelectors, useAppSelector } from '@bpd/bpd-web/shared/store'
import { MvIrrSelectors } from '../../data'

export interface ProjectHistoryModalProps {
  onCloseModal: () => void
  selectedProject: ProjectSummary
}

const CASH_FLOWS_TAB = {
  tab: 'Cash Flows',
  key: `cashflows`,
  children: <CashFlows params={null} />,
}
const CATEGORIES_TAB = {
  tab: 'Categories',
  key: `categories`,
  children: <Categories params={null} />,
}

const MARKET_VALUES_TAB = {
  tab: 'Market Values',
  key: `market_values`,
  children: <MarketValues params={null} />,
}
const COMMENTS_TAB = {
  tab: 'Comments',
  key: `comments`,
  children: <Comments params={null} />,
}

const HISTORY_TABS = [
  CASH_FLOWS_TAB,
  CATEGORIES_TAB,
  MARKET_VALUES_TAB,
  COMMENTS_TAB,
]

const AddExtraProps = (Component, extraProps) => {
  return React.cloneElement(Component, { ...{ params: extraProps } })
}

const ProjectHistoryModal: FC<ProjectHistoryModalProps> = (props) => {
  const {
    onCloseModal,
    selectedProject: { projId },
  } = props
  const [activeTab, setActiveTab] = useState(CASH_FLOWS_TAB.key)

  const team = useAppSelector(UiSelectors.getTeam)

  const { fiscalYear } = useAppSelector(MvIrrSelectors.getFilters)

  const params = useMemo(
    () => ({
      projId,
      team,
      fiscalYear,
    }),
    [projId, team, fiscalYear]
  )

  const tabsList = useMemo(
    () =>
      HISTORY_TABS.map((tab) => ({
        ...tab,
        children: AddExtraProps(tab.children, params),
      })),
    [HISTORY_TABS]
  )

  return (
    <Modal
      visible
      destroyOnClose
      disableFooter
      width={1024}
      bodyStyle={{ minHeight: 500, padding: '16px 24px ' }}
      title={`Past activities (${projId})`}
      onCancel={onCloseModal}
    >
      <BpdTabs
        activeKey={activeTab}
        items={tabsList}
        onChange={(val) => setActiveTab(val)}
      />
    </Modal>
  )
}

export default ProjectHistoryModal
