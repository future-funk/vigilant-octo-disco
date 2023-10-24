import { FC } from 'react'
import { BpdSteps, BpdStepsProps } from '@bpd/bpd-web/shared/ui'
import { CREATE_RESEARCH_STEPS } from '../configs'

export interface ResearchContentProps {
  steps?: BpdStepsProps['steps']
}

const ResearchContent: FC<ResearchContentProps> = ({
  steps = CREATE_RESEARCH_STEPS,
}) => {
  return <BpdSteps steps={steps} />
}

export default ResearchContent
