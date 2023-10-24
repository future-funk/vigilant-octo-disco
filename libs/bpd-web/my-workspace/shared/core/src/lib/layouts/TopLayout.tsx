import { Stack, StackProps } from '@gic/battlefield-ui-pack'
import { FC, ReactNode } from 'react'

export interface TopLayoutProps {
  left?: ReactNode
  right?: ReactNode
  leftProps?: StackProps
  rightProps?: StackProps
  wrapperProps?: StackProps
}

const TopLayout: FC<TopLayoutProps> = (props) => {
  const { left, right, leftProps, rightProps, wrapperProps } = props
  return (
    <Stack
      alignItems="center"
      direction="row"
      justifyContent="space-between"
      {...wrapperProps}
    >
      <Stack {...leftProps}>{left}</Stack>
      <Stack {...rightProps}>{right}</Stack>
    </Stack>
  )
}

export default TopLayout
