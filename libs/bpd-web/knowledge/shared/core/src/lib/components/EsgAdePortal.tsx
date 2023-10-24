import { ROUTES } from '@bpd/bpd-web/shared/config'
import esgAdePortalImage from '../assets/images/esg-ade-portal.png'
import KnowledgeCard from './KnowledgeCard'

const EsgAdePortal = () => {
  return (
    <KnowledgeCard
      key="esg_research_portal"
      src={esgAdePortalImage}
      href={ROUTES.KNOWLEDGE.ESG_ADE_PORTAL.BASE}
      title="ESG | ADE Portal"
      subtitle="It provides information on the RE ESG researches and policies."
    />
  )
}

export default EsgAdePortal
