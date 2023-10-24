import { FC } from 'react'
import { BpdSuspense } from '@bpd/bpd-web/shared/ui'
import { Chart } from '@bpd/vendors/highcharts'
import { Box, Stack, Typography } from '@gic/battlefield-ui-pack'
import { GetOverviewByDimensionResult } from '@bpd/market-transactions/shared/data-access'
import { MESSAGES, TREEMAP_COLOR_MAP } from '../constants'
import { useGetOverviewChartOptions } from '../hooks'

export interface OverviewChartProps {
  chartData: GetOverviewByDimensionResult
  isError: boolean
  isFetching: boolean
}

const OverviewChart: FC<OverviewChartProps> = (props) => {
  const { isError, isFetching, chartData } = props

  const chartOptions = useGetOverviewChartOptions(chartData)

  return (
    <BpdSuspense error={isError} loading={isFetching}>
      <Stack direction="row" alignItems="center" flexWrap="wrap" pl="10px">
        <Typography sx={{ fontSize: 12, padding: '0 12px' }}>
          YoY, % - {MESSAGES.YOY_PERCENTAGE}
        </Typography>
        <Stack direction="row">
          {Object.values(TREEMAP_COLOR_MAP).map((color) => (
            <Box
              key={color.label}
              color="#ffffff"
              fontSize={12}
              width={{ xs: 30, md: 60 }}
              py={'2px'}
              textAlign={'center'}
              style={{ backgroundColor: color.value }}
            >
              {color.label}
            </Box>
          ))}
        </Stack>
      </Stack>

      {!!chartOptions && (
        <Chart
          containerSx={{
            minHeight: 'unset',
          }}
          key="overviewChart"
          error={isError}
          loading={isFetching}
          options={chartOptions}
        />
      )}
    </BpdSuspense>
  )
}

export default OverviewChart
