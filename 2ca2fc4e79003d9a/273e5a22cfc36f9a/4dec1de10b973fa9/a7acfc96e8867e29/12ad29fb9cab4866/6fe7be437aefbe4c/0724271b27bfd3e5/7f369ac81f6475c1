import { FC } from 'react'
import { Col, Row, Card, Typography, Box } from '@gic/battlefield-ui-pack'
import { useAppSelector } from '@bpd/bpd-web/shared/store'
import { useOverviewQueryArgs } from '../hooks'
import { LogisticsCartoQuery, DirectorySelectors } from '../data'
import {
  ANALYTICS_TITLE,
  REVERSION_POTENTIAL_CHART,
  OCCUPANCY_CHART,
  AVERAGE_WALE,
  ANALYTICS_CHART_TYPE,
} from '../constants'
import { AnalyticsChart } from './AnalyticsCharts'
import LogisticsAnalyticsPortfolioAction from './LogisticsAnalyticsPortfolioAction'
import LogisticsAnalyticsPortfolioTotalGlaTitle from './LogisticsAnalyticsPortfolioTotalGlaTitle'

interface LogisticsAnalyticsPortfolioAnalysisProps {}

const LogisticsAnalyticsPortfolioAnalysis: FC<
  LogisticsAnalyticsPortfolioAnalysisProps
> = () => {
  const { showSelectedCards, ...queryParam } = useOverviewQueryArgs()

  const selectedAnalyticsType = useAppSelector(
    DirectorySelectors.getSelectedAnalyticsChartType
  )

  const {
    data: logisticsAnalytics = [],
    isError: logisticsAnalyticsError,
    isLoading: logisticsAnalyticsIsLoading,
  } = LogisticsCartoQuery.useGetLogisticsAnalyticsQuery({
    ...queryParam,
    tableName: 'carto.fn_app_eu_lg_get_portf_analysis',
  })

  return (
    <Card
      stretch
      divider
      disableBorder
      disableBorderWidth
      title={
        <Typography variant="subtitle1" color="text.title">
          Portfolio Analysis
        </Typography>
      }
      subtitle={
        'Charts are generated from underlying assets with property-level information.'
      }
      typographyProps={{
        subtitle: {
          variant: 'body3',
        },
      }}
      bodyStyle={{ height: '100%' }}
    >
      <Box>
        <Row>
          <Col md={12}>
            <AnalyticsChart
              type={selectedAnalyticsType}
              title={<LogisticsAnalyticsPortfolioTotalGlaTitle />}
              records={logisticsAnalytics}
              isError={logisticsAnalyticsError}
              isLoading={logisticsAnalyticsIsLoading}
              sx={{
                flexDirection: { xl: 'column', xxl: 'row' },
                alignItems: { xl: 'flex-end', xxl: 'center' },
                gap: { xl: 1, xxl: 2 },
                textAlign: { xl: 'left' },
              }}
              actions={
                <LogisticsAnalyticsPortfolioAction
                  type={selectedAnalyticsType as ANALYTICS_CHART_TYPE}
                />
              }
            />
          </Col>
          <Col md={12}>
            <AnalyticsChart
              type={REVERSION_POTENTIAL_CHART}
              title={ANALYTICS_TITLE.REVERSION_POTENTIAL_BY_COUNTRY_TITLE}
              records={logisticsAnalytics}
              isError={logisticsAnalyticsError}
              isLoading={logisticsAnalyticsIsLoading}
              sx={{
                flexDirection: { xl: 'column', xxl: 'row' },
                alignItems: { xl: 'flex-end', xxl: 'center' },
                gap: { xl: 1, xxl: 2 },
                textAlign: { xl: 'left' },
              }}
              actions={
                <LogisticsAnalyticsPortfolioAction
                  type={REVERSION_POTENTIAL_CHART}
                />
              }
            />
          </Col>
        </Row>
        <Row sx={{ marginTop: 2 }}>
          <Col md={12}>
            <AnalyticsChart
              type={OCCUPANCY_CHART}
              title={ANALYTICS_TITLE.OCCUPANCY_BY_COUNTRY_TITLE}
              records={logisticsAnalytics}
              isError={logisticsAnalyticsError}
              isLoading={logisticsAnalyticsIsLoading}
              sx={{
                flexDirection: { xl: 'column', xxl: 'row' },
                alignItems: { xl: 'flex-end', xxl: 'center' },
                gap: { xl: 1, xxl: 2 },
                textAlign: { xl: 'left' },
              }}
              actions={
                <LogisticsAnalyticsPortfolioAction type={OCCUPANCY_CHART} />
              }
            />
          </Col>
          <Col md={12}>
            <AnalyticsChart
              type={AVERAGE_WALE}
              title={ANALYTICS_TITLE.AVERAGE_WALE_N_WALB_BY_COUNTRY_TITLE}
              subtitle={'Weighted by Space. Note: Vacant Space Not-Included'}
              records={logisticsAnalytics}
              isError={logisticsAnalyticsError}
              isLoading={logisticsAnalyticsIsLoading}
              sx={{
                flexDirection: { xl: 'column', xxl: 'row' },
                alignItems: { xl: 'flex-end', xxl: 'center' },
                gap: { xl: 1, xxl: 2 },
                textAlign: { xl: 'left' },
              }}
              actions={
                <LogisticsAnalyticsPortfolioAction type={AVERAGE_WALE} />
              }
            />
          </Col>
        </Row>
      </Box>
    </Card>
  )
}

export default LogisticsAnalyticsPortfolioAnalysis
