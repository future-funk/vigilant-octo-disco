import { FilterOutlined } from '@ant-design/icons'
import { BpdPopover, BpdRange } from '@bpd/bpd-web/shared/ui'
import { Box, Stack, Typography } from '@gic/battlefield-ui-pack'
import { FC } from 'react'
import CellLoader from './CellLoader'

export interface HeaderRangeProps {
  min: number
  minLabel?: string
  max: number
  maxLabel?: string
  step?: number
  headerLabel?: string
  title?: string
  value?: [number, number]
  onChange?: (value: [number, number]) => void
  onAfterChange?: (value: [number, number]) => void
  isLoading?: boolean
}

export const HeaderRange: FC<HeaderRangeProps> = (props) => {
  const {
    min,
    minLabel = 'Min Label',
    max,
    maxLabel = 'Max Label',
    step,
    title = 'Header Title',
    headerLabel = 'Header Label',
    value,
    onChange,
    onAfterChange,
    isLoading,
  } = props

  // * Popover Children
  const contentJsx = (
    <Box px={2} py={1}>
      <BpdRange
        title={title}
        min={{ value: min, label: minLabel }}
        max={{ value: max, label: maxLabel }}
        step={step}
        value={value}
        onChange={onChange}
        onAfterChange={onAfterChange}
        tooltipVisible={false}
      />
    </Box>
  )

  return (
    <BpdPopover placement="bottom" trigger="click" content={contentJsx}>
      <Stack
        direction="row"
        width="100%"
        justifyContent={isLoading ? 'center' : 'space-between'}
        alignItems="center"
        px={2}
        sx={{
          cursor: 'pointer',
        }}
      >
        {isLoading ? (
          <CellLoader />
        ) : (
          <>
            <Typography variant="subtitle3">{headerLabel}</Typography>
            <FilterOutlined style={{ fontSize: '12px' }} />
          </>
        )}
      </Stack>
    </BpdPopover>
  )
}

export default HeaderRange
