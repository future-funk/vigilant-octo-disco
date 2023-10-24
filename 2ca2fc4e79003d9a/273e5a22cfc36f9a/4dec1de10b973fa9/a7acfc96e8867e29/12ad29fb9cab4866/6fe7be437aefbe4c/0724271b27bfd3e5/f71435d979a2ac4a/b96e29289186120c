import { Box, Row, Col } from '@gic/battlefield-ui-pack'
import { useAppSelector } from '@bpd/bpd-web/shared/store'
import AnalyticsChart from './AnalyticsChart'
import { ANALYTICS_CHART_TYPE } from '../../constants'
import { LogisticsCartoQuery, DirectorySelectors } from '../../data'
import { useOverviewQueryArgs } from '../../hooks'
import LogisticsAnalyticsTenantExposureTitle from '../LogisticsAnalyticsTenantExposureTitle'
import LogisticsAnalyticsPortfolioAction from '../LogisticsAnalyticsPortfolioAction'

const TenantExposureChart = () => {
  const { showSelectedCards, ...queryParam } = useOverviewQueryArgs()

  const selectedTenantExposureChartType = useAppSelector(
    DirectorySelectors.getSelectedTenantExposureChartType
  )

  const {
    data: logisticsProjectAnalytics = [],
    isError: logisticsProjectAnalyticsError,
    isLoading: logisticsProjectAnalyticsIsLoading,
  } = LogisticsCartoQuery.useGetLogisticsAnalyticsQuery({
    ...queryParam,
    tableName: 'carto.fn_app_eu_lg_get_tenancy_exposure',
  })

  return (
    <Box>
      <Row>
        <Col md={24}>
          <AnalyticsChart
            type={selectedTenantExposureChartType}
            title={<LogisticsAnalyticsTenantExposureTitle />}
            records={logisticsProjectAnalytics}
            isError={logisticsProjectAnalyticsError}
            isLoading={logisticsProjectAnalyticsIsLoading}
            // actions={<LogisticsAnalyticsPortfolioAction />}
            sx={{ justifyContent: 'space-between' }}
            actions={
              <LogisticsAnalyticsPortfolioAction
                type={selectedTenantExposureChartType as ANALYTICS_CHART_TYPE}
              />
            }
          />
        </Col>
      </Row>
    </Box>
  )
}

export default TenantExposureChart
