import { withTheme } from '@bpd/bpd-web/shared/theme'
import { Box, Stack, Typography } from '@gic/battlefield-ui-pack'
import { LegendData } from '../types'

interface LegendItemProps extends LegendData {}

const StyledContainer = withTheme(Stack)(({ theme }) => ({
  alignItems: 'center',
  flexDirection: 'row',
  gap: theme.spacing(1),
}))

const StyledColor = withTheme(Box)(({ sx, theme }) => ({
  backgroundColor: sx?.backgroundColor,
  borderRadius: '100%',
  minHeight: theme.spacing(2),
  minWidth: theme.spacing(2),
}))

const StyledTypography = withTheme(Typography)(() => ({
  lineHeight: 1,
}))

const LegendItem = (props: LegendItemProps) => {
  const { color, label } = props
  return (
    <StyledContainer>
      <StyledColor sx={{ backgroundColor: color }} />
      <StyledTypography variant="subtitle2">{label}</StyledTypography>
    </StyledContainer>
  )
}

export default LegendItem
