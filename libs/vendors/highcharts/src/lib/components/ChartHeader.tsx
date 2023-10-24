import { withTheme } from '@bpd/bpd-web/shared/theme'
import { Stack, StackProps, Typography } from '@gic/battlefield-ui-pack'
import type { FC, ReactNode } from 'react'

export interface ChartHeaderProps extends StackProps {
  children?: ReactNode
  title: string
}

const ChartHeaderContainer = withTheme(Stack)({
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
})

const ChartHeaderTitle = withTheme(Typography)({ fontWeight: 600 })

const ChartHeader: FC<ChartHeaderProps> = (props) => {
  const { title, children, ...stackProps } = props

  return (
    <ChartHeaderContainer {...stackProps}>
      <ChartHeaderTitle>{title}</ChartHeaderTitle>
      {children}
    </ChartHeaderContainer>
  )
}

export default ChartHeader
