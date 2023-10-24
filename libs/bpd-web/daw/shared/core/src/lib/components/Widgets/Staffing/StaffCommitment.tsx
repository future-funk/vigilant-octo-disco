import { useAppSpacing, withTheme } from '@bpd/bpd-web/shared/theme'
import {
  BpdInputNumber,
  BpdInputNumberPercentage,
  BpdRange,
  BpdRangeProps,
  FieldProps,
} from '@bpd/bpd-web/shared/ui'
import { Stack } from '@gic/battlefield-ui-pack'
import { map, range, zipObject } from 'lodash'
import { FC } from 'react'

export interface StaffCommitmentProps
  extends Omit<BpdRangeProps, 'onChange' | 'value'>,
    FieldProps {
  value: number | undefined
  onChange: (value: number) => void
}

const StyledInputNumber = withTheme(BpdInputNumber)(({ theme }) => {
  return {
    '&&& .ant-input-number-input': {
      padding: `0 ${theme.spacing(1.25)}`,
    },
  }
})

const StyledBpRangeSlider = withTheme(BpdRange)(({ theme }) => {
  return {
    flexGrow: 1,
    width: '-webkit-fill-available',
    alignItems: 'flex-start',
    marginTop: theme.spacing(1.25),
    '&&& .ant-slider-rail': {
      backgroundColor: theme.palette.null.hover,
      height: 2,
    },
    '&&& .ant-slider-mark': {
      display: 'none',
    },
    '&&& .ant-slider-dot': {
      borderColor: theme.palette.null.hover,
      top: '-3px',
      height: 10,
      width: 10,
    },
    '&&& .ant-slider-dot.ant-slider-dot-active': {
      borderColor: theme.palette.primary.main,
    },
  }
})

const StaffCommitment: FC<StaffCommitmentProps> = ({
  value,
  onChange,
  marks,
  max,
  step,
  ...componentProps
}) => {
  const spacing = useAppSpacing()

  const handleInternalChange = ([_, newValue]: [number, number]) => {
    onChange?.(newValue)
  }

  const InputNumber = marks ? StyledInputNumber : BpdInputNumberPercentage

  const inputWidth = marks ? spacing(6) : spacing(13.75)

  const sliderMarks = marks
    ? zipObject(range(max.value + 1), map(range(max.value + 1), String))
    : undefined

  return (
    <Stack flexDirection="row" spacing={1}>
      <Stack flexGrow={1}>
        <StyledBpRangeSlider
          {...componentProps}
          step={step}
          max={max}
          onChange={handleInternalChange}
          marks={sliderMarks}
          value={[0, value || 0]}
        />
      </Stack>
      <Stack width={inputWidth}>
        <InputNumber
          {...{
            sx: {
              width: inputWidth,
              paddingleft: spacing(1.25),
            },
            max: max.value,
            min: 0,
            step,
            value,
            showControls: true,
            onChange: (newValue) => onChange(newValue as number),
          }}
        />
      </Stack>
    </Stack>
  )
}

export default StaffCommitment
