import { withTheme } from '@bpd/bpd-web/shared/theme'
import { renderIf } from '@bpd/ui/libs/react-slots'
import { PerfectScrollbar } from '@bpd/vendors/perfect-scrollbar'
import { Stack } from '@gic/battlefield-ui-pack'
import { some, values } from 'lodash'
import React, { ReactElement, ReactNode } from 'react'

export interface LayoutProps {
  main?: ReactNode
  tabs?: ReactElement
  menuBar?: ReactNode
}

const StyledTabsContainer = withTheme(Stack)(({ theme }) => ({
  alignItems: 'center',
  flexDirection: 'row',
  marginBottom: theme.spacing(1),
  justifyContent: 'space-between',
}))

const StyledContainer = withTheme(Stack)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}))

const Layout: React.FC<LayoutProps> = (props) => {
  const { main, tabs, menuBar } = props
  const hasMenuBar = some(values(menuBar))
  const hasTab = some(values(tabs))
  const hasMain = some(values(main))

  return (
    <Stack height="100%">
      {renderIf(hasMenuBar, <StyledContainer>{menuBar}</StyledContainer>)}
      {renderIf(hasTab, <StyledTabsContainer>{tabs}</StyledTabsContainer>)}
      {renderIf(
        hasMain,
        <Stack flex={1} overflow="auto" bgcolor="common.white">
          <PerfectScrollbar>{main}</PerfectScrollbar>
        </Stack>
      )}
    </Stack>
  )
}

export default Layout
