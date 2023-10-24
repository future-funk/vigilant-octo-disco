import { withTheme } from '@bpd/bpd-web/shared/theme'
import { Box, Stack, Typography } from '@gic/battlefield-ui-pack'
import { Checkbox } from 'antd'
import { LegendData } from '../types'

interface LegendItemProps extends LegendData {
  onChange: (checked: boolean, id: string) => void
}

const StyledContainer = withTheme(Stack)(({ theme }) => ({
  alignItems: 'center',
  flexDirection: 'row',
  gap: theme.spacing(1),
}))

const StyledColor = withTheme(Box)(({ sx, theme }) => ({
  backgroundColor: sx?.backgroundColor,
  borderRadius: '100%',
  height: '8px',
  width: '8px',
  minWidth: '8px',
}))

const LegendItemCheckable = (props: LegendItemProps) => {
  const { label, visible, onChange, value = '', color } = props
  return (
    <StyledContainer>
      <Checkbox
        defaultChecked={visible}
        onChange={(event) => onChange(event.target.checked, value.toString())}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <StyledColor sx={{ backgroundColor: color }} />
          <Typography variant="body2">{label}</Typography>
        </Stack>
      </Checkbox>
    </StyledContainer>
  )
}

export default LegendItemCheckable
