import { GetProjectCashflowResult } from '@bpd/mv-irr/shared/data-access'
import { FC } from 'react'
import ProjectPerformance from './ProjectPerformance'
import { Stack, Typography } from '@gic/battlefield-ui-pack'
import CashflowGrid from './CashflowGrid'
import ProjectComment from './ProjectComment'

export interface ProjectCashFlowProps {
  projectCashflowData: GetProjectCashflowResult
  fiscalYear: string
  activeCurrency: string
  projId: string
  team: string
}

const ProjectCashFlow: FC<ProjectCashFlowProps> = (props) => {
  const { projectCashflowData, fiscalYear, activeCurrency, projId, team } = props
  const { summary, cashFlows } = projectCashflowData || {}

  return (
    <Stack mt={2}>
      <Typography variant="h4" color="text.subHeading" sx={{ mb: 2 }}>
        PERFORMANCE
      </Typography>
      <ProjectPerformance {...{ data: summary, fiscalYear, activeCurrency }} />
      <ProjectComment {...{ fiscalYear, projId, team }} />
      <CashflowGrid
        {...{ data: cashFlows, fiscalYear, projId, activeCurrency, team }}
      />
    </Stack>
  )
}

export default ProjectCashFlow
