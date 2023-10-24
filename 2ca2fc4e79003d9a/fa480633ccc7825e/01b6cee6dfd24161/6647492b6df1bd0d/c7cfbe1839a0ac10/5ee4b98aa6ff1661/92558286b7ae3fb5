import { withTheme } from '@bpd/bpd-web/shared/theme'
import ButtonGroup from 'antd/lib/button/button-group'
import type { FC, ReactNode } from 'react'

export interface MapToolbarProps {
  children: ReactNode
}

const StyledContainer = withTheme(ButtonGroup)(({ theme }) => ({
  backgroundColor: '#FFF',
  borderRadius: theme.spacing(2),
  bottom: theme.spacing(2),
  boxShadow: '0 0 10px rgb(0 0 0 / 10%)',
  padding: `${theme.spacing(0.25)} ${theme.spacing(1)}`,
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 2,
}))

const MapToolbar: FC<MapToolbarProps> = (props) => {
  const { children } = props

  return <StyledContainer>{children}</StyledContainer>
}

export default MapToolbar
