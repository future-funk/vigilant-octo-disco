import {
  BpdFilterControl,
  BpdFilterControlType,
  BpdRadioGroup,
  BpdVerticalDivider,
} from '@bpd/bpd-web/shared/ui'
import { Stack, Typography } from '@gic/battlefield-ui-pack'
import { Space } from 'antd'
import { FC, useEffect, useState } from 'react'
import { DEFAULT_TOP_SALES, SALES_TYPE_OPTIONS } from '../constants'
import { useRadioState } from '../hooks'
import { TopSalesParams } from '../types'
import LastNMonthsFilter from './LastNMonthsFilter'

interface TopSalesMetricsProps {
  setTopSalesParams: (value: TopSalesParams) => void
}

const TopSalesMetrics: FC<TopSalesMetricsProps> = (props) => {
  const { setTopSalesParams } = props
  const [topN, setTopN] = useState<number>(DEFAULT_TOP_SALES.topN)

  const { value: salesType, onChange: onChangeSalesType } = useRadioState(
    DEFAULT_TOP_SALES.salesType
  )

  const { value: timeframe, onChange: onChangeTimeframe } = useRadioState(
    DEFAULT_TOP_SALES.timeframe
  )

  useEffect(() => {
    setTopSalesParams({ topN, salesType, timeframe })
  }, [topN, salesType, timeframe])

  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent={'space-between'}
      alignItems={'center'}
      p={0.5}
      height={28}
    >
      <Space>
        <Typography variant="body2">Top N: </Typography>
        <BpdFilterControl
          filterKey="topN"
          key="topN"
          componentProps={{ items: [20, 50, 100, 200] }}
          type={BpdFilterControlType.SingleSelect}
          handleChange={(key, value: number) => setTopN(value)}
          value={topN}
          style={{ minWidth: 80 }}
        />
      </Space>
      <Space>
        <BpdRadioGroup
          options={SALES_TYPE_OPTIONS}
          optionType="button"
          buttonStyle="solid"
          value={salesType}
          onChange={onChangeSalesType}
        />
        <BpdVerticalDivider />
        <LastNMonthsFilter {...{ timeframe, onChangeTimeframe }} />
      </Space>
    </Stack>
  )
}

export default TopSalesMetrics
