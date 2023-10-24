import { FC } from 'react'
import { Box, Row, Col } from '@gic/battlefield-ui-pack'
import { useAppSelector } from '@bpd/bpd-web/shared/store'
import { useOverviewQueryArgs } from '../../hooks'
import { LogisticsCartoQuery, DirectorySelectors } from '../../data'
import { AnalyticsChart } from '.'
import { ANALYTICS_CHART_TYPE } from '../../constants'
import LogisticsAnalyticsTenancyWALEProfileTitle from '../LogisticsAnalyticsTenancyWALEProfileTitle'
import LogisticsAnalyticsPortfolioAction from '../LogisticsAnalyticsPortfolioAction'

const TenancyWALEProfile: FC = () => {
  const { showSelectedCards, ...queryParam } = useOverviewQueryArgs()

  const selectedTenancyChartType = useAppSelector(
    DirectorySelectors.getSelectedTenancyChartType
  )

  const {
    data: tenancyWALEProfiles = [],
    isError,
    isLoading,
  } = LogisticsCartoQuery.useGetLogisticsAnalyticsQuery({
    ...queryParam,
    tableName: 'carto.fn_app_eu_lg_get_tenancy_wale_profile',
  })

  return (
    <Box>
      <Row>
        <Col md={24}>
          <AnalyticsChart
            type={selectedTenancyChartType}
            title={<LogisticsAnalyticsTenancyWALEProfileTitle />}
            records={tenancyWALEProfiles}
            isError={isError}
            isLoading={isLoading}
            sx={{ justifyContent: 'flex-end' }}
            actions={
              <LogisticsAnalyticsPortfolioAction
                type={selectedTenancyChartType as ANALYTICS_CHART_TYPE}
              />
            }
          />
        </Col>
      </Row>
    </Box>
  )
}

export default TenancyWALEProfile
