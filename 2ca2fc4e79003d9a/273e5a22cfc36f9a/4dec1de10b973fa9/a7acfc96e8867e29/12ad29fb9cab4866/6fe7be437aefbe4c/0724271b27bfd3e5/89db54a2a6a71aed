import { FC } from 'react'
import { Card, Typography, Stack } from '@gic/battlefield-ui-pack'
import { TenantExposureChart, TenancyWALEProfile } from './AnalyticsCharts'

interface LogisticsAnalyticsTenantExposureProps {}

const LogisticsAnalyticsTenantExposure: FC<
  LogisticsAnalyticsTenantExposureProps
> = () => {
  return (
    <Stack mt={2}>
      <Card
        stretch
        divider
        disableBorder
        disableBorderWidth
        title={
          <Typography variant="subtitle1" color="text.title">
            Tenant Analysis
          </Typography>
        }
        subtitle={
          'Charts are generated from underlying assets with lease-level information.'
        }
        typographyProps={{
          subtitle: {
            variant: 'body3',
          },
        }}
        bodyStyle={{ height: '100%' }}
      >
        <Stack style={{ gap: '50px' }}>
          <TenantExposureChart />
          <TenancyWALEProfile />
        </Stack>
      </Card>
    </Stack>
  )
}

export default LogisticsAnalyticsTenantExposure
