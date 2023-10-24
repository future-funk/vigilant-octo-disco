import { Stack, Box } from '@gic/battlefield-ui-pack'
import { Popover } from 'antd'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { FC } from 'react'
import CellLoader from './CellLoader'
import type { HeaderRangeProps } from './HeaderRange'
import { SliderRangeProps } from 'antd/lib/slider'
import { BpdRange } from '@bpd/bpd-web/shared/ui'

export interface CellRangeProps extends HeaderRangeProps {
  sliderProps?: Omit<
    SliderRangeProps,
    'value' | 'onChange' | 'onAfterChange' | 'min' | 'max' | 'range' | 'step'
  >
  disabledMin?: boolean
  disabledMax?: boolean
}

const StyledPopover = withTheme(Popover)(({ theme }) => ({
  '&&& .cell-range': {
    marginTop: theme.spacing(3),
  },
}))

export const CellRange: FC<CellRangeProps> = (props) => {
  const {
    min,
    minLabel = 'Min Label',
    max,
    maxLabel = 'Max Label',
    step,
    title = 'Header Title',
    value,
    onChange,
    onAfterChange,
    isLoading,
    children,
    sliderProps,
    disabledMin,
    disabledMax,
  } = props

  const childrenToRender = children

  // * Popover Children
  const contentJsx = (
    <Box
      sx={{
        paddingX: 2,
        paddingY: 1,
        ...(disabledMax && {
          '&&& .ant-slider-handle.ant-slider-handle-2': {
            cursor: 'not-allowed',
          },
        }),
        ...(disabledMin && {
          '&&& .ant-slider-handle.ant-slider-handle-1': {
            cursor: 'not-allowed',
          },
        }),
      }}
    >
      <BpdRange
        title={title}
        min={{ value: min, label: minLabel }}
        max={{ value: max, label: maxLabel }}
        step={step}
        value={value}
        onChange={onChange}
        onAfterChange={onAfterChange}
        tooltipVisible={false}
        {...sliderProps}
      />
    </Box>
  )

  return (
    <StyledPopover
      content={contentJsx}
      trigger="click"
      placement="bottom"
      overlayClassName="cell-range"
    >
      <Stack alignItems="center" direction="row">
        {isLoading ? <CellLoader /> : childrenToRender}
      </Stack>
    </StyledPopover>
  )
}

export default CellRange
