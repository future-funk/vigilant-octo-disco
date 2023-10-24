import { FC } from 'react'
import { map } from 'lodash'
import { Stack } from '@gic/battlefield-ui-pack'
import LogisticsAnalyticsWidget from './LogisticsAnalyticsWidget'
import { useGetWidgetConfig } from '../hooks'

const LogisticsAnalyticsAggregatedMetrics: FC = () => {
  const widgetConfig = useGetWidgetConfig()

  return (
    <Stack
      flexDirection={{ xl: 'row', sm: 'column', xs: 'column' }}
      gap={{ sm: 1 }}
      sx={{ marginTop: 3, marginBottom: 1 }}
    >
      {map(widgetConfig, (config) => (
        <LogisticsAnalyticsWidget
          key={`logistics-analytics-aggregated-metrics-${config.title}`}
          title={config.title}
          value={config.value}
          loading={config.isLoading}
          error={config.isError}
        />
      ))}
    </Stack>
  )
}

export default LogisticsAnalyticsAggregatedMetrics
