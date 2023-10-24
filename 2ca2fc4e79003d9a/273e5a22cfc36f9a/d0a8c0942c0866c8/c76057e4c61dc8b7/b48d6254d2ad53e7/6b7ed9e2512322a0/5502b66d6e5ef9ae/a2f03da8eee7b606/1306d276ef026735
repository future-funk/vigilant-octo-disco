import { BpdRadioGroup } from '@bpd/bpd-web/shared/ui'
import { Stack, Typography } from '@gic/battlefield-ui-pack'
import { RadioChangeEvent } from 'antd'
import { MONTH_TIMEFRAME_OPTIONS } from '../constants'
import { CSSProperties } from 'react'

interface LastNMonthsFilterProps {
  timeframe: number
  onChangeTimeframe: (e: RadioChangeEvent) => void
  isVertical?: boolean
}

const LastNMonthsFilter = (props: LastNMonthsFilterProps) => {
  const { timeframe, onChangeTimeframe, isVertical = false } = props

  const styles: CSSProperties = isVertical
    ? { flexDirection: 'column', alignItems: 'flex-start', gap: 0.5 }
    : { flexDirection: 'row', alignItems: 'center', gap: 2 }

  return (
    <Stack sx={styles}>
      <Typography variant="body2">Last N Months:</Typography>
      <BpdRadioGroup
        options={MONTH_TIMEFRAME_OPTIONS}
        optionType="button"
        buttonStyle="solid"
        value={timeframe}
        onChange={onChangeTimeframe}
      />
    </Stack>
  )
}

export default LastNMonthsFilter
