import { withTheme } from '@bpd/bpd-web/shared/theme'
import { Stack } from '@gic/battlefield-ui-pack'
import { FC } from 'react'
import { DealOverview } from '../components'

export interface WorkspacePageProps {}

const MainLayoutStack = withTheme(Stack)(({ theme }) => {
  return {
    gap: theme.spacing(4),
  }
})

export const WorkspacePage: FC<WorkspacePageProps> = (props) => {
  return (
    <MainLayoutStack>
      {/* Portfolio Analytics Overview */}
      <DealOverview />
    </MainLayoutStack>
  )
}

export default WorkspacePage
