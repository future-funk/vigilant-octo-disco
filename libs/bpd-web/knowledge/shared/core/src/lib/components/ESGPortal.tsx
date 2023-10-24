import { ROUTES } from '@bpd/bpd-web/shared/config'
import esgPortalImage from '../assets/images/esg-portal.png'
import KnowledgeCard from './KnowledgeCard'


const ESGPortal = () => {
  return (
    <KnowledgeCard
      key="re-portal"
      href={ROUTES.KNOWLEDGE.ESG_PORTAL}
      src={esgPortalImage}
      title="ESG Portal"
      subtitle="RE ESG landscape provides information on the RE asset physical mapping, RE ESG researches and policies."
    />
  )
}

export default ESGPortal
