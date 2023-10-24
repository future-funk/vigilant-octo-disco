import React, { ReactNode } from 'react'
import { Stack } from '@gic/battlefield-ui-pack'

export interface TopLayoutProps {
  left?: ReactNode
  right?: ReactNode
}

const TopLayout: React.FC<TopLayoutProps> = (props) => {
  const { left, right } = props

  return (
    <>
      <Stack>{left}</Stack>
      <Stack>{right}</Stack>
    </>
  )
}

export default TopLayout
