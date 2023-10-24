import React, { ReactNode } from 'react'
import LayoutBody, { LayoutBodyProps } from './LayoutBody'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { Stack } from '@gic/battlefield-ui-pack'
import { BpdTabsProps } from '@bpd/bpd-web/shared/ui'

export interface LayoutProps extends LayoutBodyProps {
  children?: ReactNode
  tabsProps?: Partial<BpdTabsProps>
}

const TAB_CONTAINER_HEIGHT = '68px'

const StyledLayoutBody = withTheme(LayoutBody)(({ theme }) => ({
  height: `calc(100% - ${TAB_CONTAINER_HEIGHT} - ${theme.spacing(2)})`,
}))

const StyledContainer = withTheme(Stack)({
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
})

const Layout: React.FC<LayoutProps> = (props) => {
  const { children, top, ...layoutBodyProps } = props

  return (
    <>
      <StyledContainer>{top}</StyledContainer>
      <StyledLayoutBody mt={1} {...layoutBodyProps} />
      {children}
    </>
  )
}

export default Layout
