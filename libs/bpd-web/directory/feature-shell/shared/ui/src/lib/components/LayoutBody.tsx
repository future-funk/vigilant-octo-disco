import { withTheme } from '@bpd/bpd-web/shared/theme'
import { renderSlot } from '@bpd/ui/libs/react-slots'
import { Stack, StackProps } from '@gic/battlefield-ui-pack'
import { FC, ReactNode } from 'react'

type RenderChild = (() => ReactNode) | ReactNode

export interface LayoutBodySlots {
  left?: RenderChild
  center?: RenderChild
  right?: RenderChild
  top?: RenderChild
}

export type LayoutBodyProps = Omit<StackProps, 'left' | 'right' | 'top'> &
  LayoutBodySlots

const StyledContainer = withTheme(Stack)(({ sx, theme }) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  border: `1px solid ${theme.palette.null.border}`,
  borderRadius: '4px',
  ...sx,
}))

const LayoutBody: FC<LayoutBodyProps> = (props) => {
  const { left, center, right, ...rest } = props

  return (
    <StyledContainer {...rest} sx={rest?.sx}>
      {renderSlot(left)}
      <Stack style={{ flexBasis: '40%' }}>{renderSlot(center)}</Stack>
    </StyledContainer>
  )
}

export default LayoutBody
