import { FC, ReactNode } from 'react'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { Stack, StackProps } from '@gic/battlefield-ui-pack'
import { renderSlot } from '@bpd/ui/libs/react-slots'

type RenderChild = (() => ReactNode) | ReactNode

export type LayoutBodyProps = StackProps & {
  main?: {
    left?: RenderChild
    right?: RenderChild
  }
}

const StyledContainer = withTheme(Stack)(({ theme }) => ({
  flexDirection: 'row',
}))

const LayoutBody: FC<LayoutBodyProps> = ({ main, ...rest }) => {
  const { left, right } = main ?? {}

  return (
    <StyledContainer {...rest}>
      {renderSlot(left)}
      {renderSlot(
        right ? (
          <Stack padding={3} flexGrow={1}>
            {right}
          </Stack>
        ) : null
      )}
    </StyledContainer>
  )
}

export default LayoutBody
