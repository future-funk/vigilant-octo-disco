import { FC } from 'react'
import { BpdSteps, BpdStepsProps } from '@bpd/bpd-web/shared/ui'
import { CREATE_PROJECT_STEPS } from '../configs'

export interface ProjectContentProps {
  steps?: BpdStepsProps['steps']
}

const ProjectContent: FC<ProjectContentProps> = ({
  steps = CREATE_PROJECT_STEPS,
}) => {
  return <BpdSteps steps={steps} />
}

export default ProjectContent
