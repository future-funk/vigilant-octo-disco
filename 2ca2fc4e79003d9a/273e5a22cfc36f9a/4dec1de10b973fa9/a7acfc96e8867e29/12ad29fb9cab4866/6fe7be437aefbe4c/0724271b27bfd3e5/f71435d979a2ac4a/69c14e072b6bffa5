import { FC, ReactElement } from 'react'
import { Box, Stack, Typography, StackProps } from '@gic/battlefield-ui-pack'
import { Chart } from '@bpd/vendors/highcharts'
import { BpdSuspense } from '@bpd/bpd-web/shared/ui'
import { AnalyticsResponseDto } from '../../data'
import getAnalyticsChartConfig from './getAnalyticsChartConfig'
import { reject } from 'lodash'

export interface AnalyticsChartProps extends Pick<StackProps, 'sx'> {
  title?: string | ReactElement
  subtitle?: string
  type: string
  records: AnalyticsResponseDto[]
  isError?: boolean
  isLoading?: boolean
  actions?: ReactElement
}
const AnalyticsChart: FC<AnalyticsChartProps> = (props) => {
  const { title, subtitle, records, type, isError, isLoading, actions, sx } =
    props

  const chartOptions = getAnalyticsChartConfig({ title: '', type, records })

  return (
    <BpdSuspense
      error={isError}
      loading={isLoading}
      empty={!isLoading && !reject(records || [], { country: 'Total' })?.length}
    >
      <Box>
        <Stack
          sx={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            minHeight: 35,
            ...sx,
          }}
        >
          <Stack width={'100%'}>
            {typeof title === 'string' ? (
              <Typography variant="subtitle3">{title}</Typography>
            ) : (
              title
            )}
            <Typography variant="caption">{subtitle}</Typography>
          </Stack>
          <Stack direction="row" alignItems="flex-start" spacing={1}>
            {actions}
          </Stack>
        </Stack>
        <Chart options={{ ...chartOptions }} loading={isLoading} />
      </Box>
    </BpdSuspense>
  )
}

export default AnalyticsChart
