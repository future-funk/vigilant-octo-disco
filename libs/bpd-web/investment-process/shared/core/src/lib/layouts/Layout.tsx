import { withTheme } from '@bpd/bpd-web/shared/theme'
import { renderIf } from '@bpd/ui/libs/react-slots'
import { Stack } from '@gic/battlefield-ui-pack'
import { some, values } from 'lodash'
import React, { ReactElement, ReactNode } from 'react'
import TopLayout, { TopLayoutProps } from './TopLayout'

export interface LayoutProps {
  main: ReactNode
  tabs: ReactElement
  top?: TopLayoutProps
}

const StyledTabsContainer = withTheme(Stack)(({ theme }) => ({
  alignItems: 'center',
  flexDirection: 'row',
  marginBottom: theme.spacing(2),
  justifyContent: 'space-between',
}))

const Layout: React.FC<LayoutProps> = (props) => {
  const { main, tabs, top } = props

  const hasTop = some(values(top))

  return (
    <Stack height="100%">
      <StyledTabsContainer>{tabs}</StyledTabsContainer>
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
