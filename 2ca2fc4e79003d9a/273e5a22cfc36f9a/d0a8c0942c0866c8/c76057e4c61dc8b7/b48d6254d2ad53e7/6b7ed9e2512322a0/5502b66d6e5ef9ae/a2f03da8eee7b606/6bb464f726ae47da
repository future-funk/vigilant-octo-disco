import { BpdRadioGroup, BpdVerticalDivider } from '@bpd/bpd-web/shared/ui'
import { Stack } from '@gic/battlefield-ui-pack'
import { FC, useEffect } from 'react'
import {
  DEFAULT_TXN,
  FREQUENCY_TYPE_OPTIONS,
  FREQ_MEASUREMENT_MAP,
  FREQ_TIMEFRAME_MAP,
  MEASUREMENT_VALUE,
  TIMEFRAME_OPTIONS,
} from '../constants'
import { useRadioState } from '../hooks'
import { TxnParams } from '../types'

interface TxnMetricsProps {
  setTxnParams: (value: TxnParams) => void
}

const TxnMetrics: FC<TxnMetricsProps> = (props) => {
  const { setTxnParams } = props

  const { value: frequency, onChange: onChangeFrequency } = useRadioState(
    DEFAULT_TXN.frequency
  )

  const {
    value: timeframe,
    setValue: setTimeFrame,
    onChange: onChangeTimeframe,
  } = useRadioState(DEFAULT_TXN.timeframe)

  const {
    value: measurement,
    setValue: setMeasurement,
    onChange: onChangeMeasurement,
  } = useRadioState(DEFAULT_TXN.measurement)

  useEffect(() => {
    setTimeFrame(FREQ_TIMEFRAME_MAP[frequency])
    const measurements = FREQ_MEASUREMENT_MAP[frequency].map((m) => m.value)
    if (!measurements.includes(measurement)) {
      setMeasurement(MEASUREMENT_VALUE.LEVEL)
    }
  }, [frequency])

  useEffect(() => {
    setTxnParams({ frequency, timeframe, measurement })
  }, [frequency, timeframe, measurement])

  return (
    <Stack direction="row" spacing={2} justifyContent={'flex-end'}>
      <BpdRadioGroup
        options={FREQ_MEASUREMENT_MAP[frequency]}
        optionType="button"
        buttonStyle="solid"
        value={measurement}
        onChange={onChangeMeasurement}
      />
      <BpdVerticalDivider />
      <BpdRadioGroup
        options={FREQUENCY_TYPE_OPTIONS}
        optionType="button"
        buttonStyle="solid"
        value={frequency}
        onChange={onChangeFrequency}
      />
      <BpdRadioGroup
        options={TIMEFRAME_OPTIONS}
        optionType="button"
        buttonStyle="solid"
        value={timeframe}
        onChange={onChangeTimeframe}
      />
    </Stack>
  )
}

export default TxnMetrics
