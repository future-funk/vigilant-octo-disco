import { useAppPalette, withTheme } from '@bpd/bpd-web/shared/theme'
import { BpdButton, BpdButtonSize } from '@bpd/bpd-web/shared/ui'
import { Stack, StackProps } from '@gic/battlefield-ui-pack'
import { isEqual } from 'lodash'
import type { FC } from 'react'
import type { Interval } from '../types'

export interface DateChartActionsProps extends Omit<StackProps, 'onClick'> {
  activeInterval?: Interval
  onClick?: (value: Interval) => void
}

const StyledContainer = withTheme(Stack)(({ sx }) => ({
  flexDirection: 'row',
  ...sx,
}))

const DEFAULT_ACTIONS: { label: string; value: Interval }[] = [
  { label: 'Year', value: 'YEAR' },
  { label: 'Quarter', value: 'QUARTER' },
  { label: 'Month', value: 'MONTH' },
]

const DateChartActions: FC<DateChartActionsProps> = (props) => {
  const { activeInterval, onClick, ...stackProps } = props

  const palette = useAppPalette()

  return (
    <StyledContainer {...stackProps}>
      {onClick &&
        DEFAULT_ACTIONS.map(({ label, value }) => {
          const isActive = isEqual(activeInterval, value)
          return (
            <BpdButton
              key={value}
              title={label}
              size={BpdButtonSize.Small}
              variant="outlined"
              onClick={() => onClick(value)}
              sx={{
                paddingX: '16px',
                paddingY: '0px',
                borderRadius: '0',
                '&:first-of-type': {
                  borderRadius: '4px 0px 0px 4px',
                },
                '&:last-child': {
                  borderRadius: '0px 4px 4px 0px',
                },
                color: isActive ? palette.primary.main : palette.null.main,
                borderColor: isActive
                  ? palette.primary.main
                  : palette.null.border,
                ...(isActive && {
                  backgroundColor: palette.background.radio,
                  ':focus': {
                    backgroundColor: palette.background.radio,
                  },
                  ':hover': {
                    backgroundColor: palette.background.radio,
                  },
                }),
              }}
            />
          )
        })}
    </StyledContainer>
  )
}

export default DateChartActions
