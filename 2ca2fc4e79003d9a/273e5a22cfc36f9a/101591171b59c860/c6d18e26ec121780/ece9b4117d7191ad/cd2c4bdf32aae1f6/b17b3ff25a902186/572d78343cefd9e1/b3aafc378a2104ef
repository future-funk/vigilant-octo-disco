import React, { ReactNode } from 'react'
import { Stack } from '@gic/battlefield-ui-pack'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { renderSlot } from '@bpd/ui/libs/react-slots'

export interface LayoutProps {
  main?: ReactNode
  top?: ReactNode
  bottom?: ReactNode
}

const StyledContainer = withTheme(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.modal,
}))

const Layout: React.FC<LayoutProps> = (props) => {
  const { main, top, bottom } = props

  return (
    <>
      {renderSlot(top)}
      <StyledContainer>{main}</StyledContainer>
      {renderSlot(bottom)}
    </>
  )
}

export default Layout
