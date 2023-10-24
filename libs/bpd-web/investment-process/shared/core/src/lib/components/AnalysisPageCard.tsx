import { BpdHorizontalDivider } from '@bpd/bpd-web/shared/ui'
import { Box, BoxProps, Typography } from '@gic/battlefield-ui-pack'
import { FC } from 'react'

export type AnalysisPageCardType = 'chart' | 'table'

export interface AnalysisPageCardProps extends BoxProps {
  title?: string
}

export const AnalysisPageCard: FC<AnalysisPageCardProps> = (props) => {
  const { title, children, ...rest } = props
  return (
    <Box bgcolor="common.white" borderRadius={0.5} flex={1} {...rest}>
      {/* Header */}
      <Box padding={2}>
        <Typography variant="subtitle1">{title}</Typography>
      </Box>
      {/* Body */}
      <BpdHorizontalDivider />
      <Box padding={2}>{children}</Box>
    </Box>
  )
}

export default AnalysisPageCard
