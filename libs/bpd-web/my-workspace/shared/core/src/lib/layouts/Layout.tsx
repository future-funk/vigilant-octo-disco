import { MyWorkspaceQueries } from '@bpd/my-workspace/shared/data-access'
import { renderIf } from '@bpd/ui/libs/react-slots'
import { Stack } from '@gic/battlefield-ui-pack'
import { some, values } from 'lodash'
import { FC, ReactNode } from 'react'
import TopLayout, { TopLayoutProps } from './TopLayout'

export interface LayoutProps {
  main: ReactNode
  top?: TopLayoutProps
}

const Layout: FC<LayoutProps> = (props) => {
  const { main, top } = props
  const hasTop = some(values(top))

  MyWorkspaceQueries.useGetMyWorkspaceConfig(null)

  return (
    <Stack height="100%">
      <Stack height="inherit" spacing={1.5} overflow="hidden">
        {renderIf(hasTop, <TopLayout {...top} />)}
        <Stack flex={1} overflow="hidden">
          {main}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Layout
