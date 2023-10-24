import { FC } from 'react'
import Legend from './Legend'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { Stack } from '@gic/battlefield-ui-pack'
import { LayersControlGroupProps } from './LayersControlGroup'

export interface LegendControlGroupProps {
  groups: Pick<LayersControlGroupProps, 'ids' | 'title'>[]
}
const StyledContainer = withTheme(Stack)(({ theme }) => ({
  background: theme.palette.common.white,
  flexDirection: 'column',
  gap: theme.spacing(1),
  position: 'absolute',
  right: theme.spacing(2),
  top: theme.spacing(2),
  zIndex: 2,
  borderRadius: theme.spacing(0.5),
  boxShadow: '0 0 10px rgb(0 0 0 / 10%)',
  padding: theme.spacing(2),
  paddingBottom: '0px',
}))

const LegendControlGroup: FC<LegendControlGroupProps> = ({ groups }) => (
  <StyledContainer>
    <Stack direction="column" gap={4}>
      {groups.map((group) => (
        <Legend
          title={group.title}
          displayIntent={group.ids}
          //ToDo: has to wrap by theme and control the variable values
          sx={{
            position: 'initial',
            borderRadius: 'initial',
            boxShadow: 'none',
            padding: '0px',
            paddingBottom: '16px',
          }}
        />
      ))}
    </Stack>
  </StyledContainer>
)

export default LegendControlGroup
