import {
  CaseStudy,
  PageConfig,
  PoliciesAndProcedures,
  ResearchDrawer,
} from '@bpd/esg-ade-portal/shared/core'
import { TABS } from '@bpd/esg-ade-portal/shared/data-access'

const slots: PageConfig['slots'] = {
  tabs: {
    items: [
      {
        ...TABS.CASE_STUDY,
        children: <CaseStudy />,
      },
      {
        ...TABS.RESEARCH,
        children: <ResearchDrawer />,
      },
      {
        ...TABS.POLICIES_AND_PROCEDURES,
        children: <PoliciesAndProcedures />,
      },
      {
        ...TABS.ESG_BULLETIN,
        children: <>ESG_BULLETIN</>,
      },
      {
        ...TABS.ESG_TALKING_POINTS_WITH_EXTERNAL_PARTIES,
        children: <>ESG_TALKING_POINTS_WITH_EXPTERNAL_PARTIES</>,
      },
      {
        ...TABS.RES_APPROACH_TO_SUSTAINABILITY,
        children: <>RES_APPROACH_TO_SUSTAINABILITY</>,
      },
      {
        ...TABS.RED_OR_AMBER_SCREENING,
        children: <>RED_OR_AMBER_SCREENING</>,
      },
    ],
  },
}

export default slots
