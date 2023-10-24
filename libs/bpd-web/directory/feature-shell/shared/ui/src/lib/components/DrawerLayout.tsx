import { Stack, StackProps } from '@gic/battlefield-ui-pack'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

export interface DrawerLayoutProps extends StackProps {}

const DrawerLayout: FC<DrawerLayoutProps> = (props) => {
  const { width, ...rest } = props

  return (
    <Stack bgcolor="white" {...rest} minWidth={width} width={width}>
      <Outlet />
    </Stack>
  )
}

export default DrawerLayout
