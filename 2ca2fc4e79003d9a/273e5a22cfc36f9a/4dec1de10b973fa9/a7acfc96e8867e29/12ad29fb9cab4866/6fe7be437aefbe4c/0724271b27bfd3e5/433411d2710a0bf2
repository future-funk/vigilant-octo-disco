import { FC } from 'react'
import { Stack } from '@gic/battlefield-ui-pack'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { PerfectScrollbar } from '@bpd/vendors/perfect-scrollbar'
import { useGetMapViewportLegends } from '../hooks'
import LogisticsAnalyticsAggregatedMetrics from './LogisticsAnalyticsAggregatedMetrics'
import LogisticsAnalyticsPortfolioAnalysis from './LogisticsAnalyticsPortfolioAnalysis'
import LogisticsAnalyticsTenantExposure from './LogisticsAnalyticsTenantExposure'

const AnalyticsContainer = withTheme(Stack)({
  borderRadius: '4px',
  width: '100%',
  direction: 'row',
  height: '100%',
  display: 'flex',
})

export interface LogisticsAnalyticsDrawerProps {}

const LogisticsAnalyticsDrawer: FC<LogisticsAnalyticsDrawerProps> = () => {

  useGetMapViewportLegends()
  
  return (
    <AnalyticsContainer>
      <PerfectScrollbar>
        <Stack>
          <LogisticsAnalyticsAggregatedMetrics />
        </Stack>
        <Stack>
          <LogisticsAnalyticsPortfolioAnalysis />
        </Stack>
        <Stack>
          <LogisticsAnalyticsTenantExposure />
        </Stack>
      </PerfectScrollbar>
    </AnalyticsContainer>
  )
}

export default LogisticsAnalyticsDrawer
