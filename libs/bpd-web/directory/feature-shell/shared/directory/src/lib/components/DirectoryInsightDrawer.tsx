import { Stack, Typography } from '@gic/battlefield-ui-pack'
import { useAppSelector, UiSelectors } from '@bpd/bpd-web/shared/store'
import { MapSelectors } from '@bpd/vendors/carto'
import { PerfectScrollbar } from '@bpd/vendors/perfect-scrollbar'
import { withTheme, useAppPalette } from '@bpd/bpd-web/shared/theme'
import { DirectoryQueries } from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'
import DirectoryInsightTopWidget from './DirectoryInsightTopWidget'
import DirectoryInsightChart from './DirectoryInsightChart'
import DirectoryInsightLTEWidget from './DirectoryInsightLTEWidget'
import { useGetSelectedFilterValues } from '../hooks'
import {
  metricQueryGenerator,
  topItemsQueryGenerator,
  chartQueryGenerator,
} from '../utils'
import { INSIGHT_TITLES, TYPE } from '../constants'

const InsightContainer = withTheme(Stack)({
  borderRadius: '4px',
  width: '100%',
  direction: 'row',
  height: '100%',
  display: 'flex',
})

const DirectoryInsightDrawer = () => {
  const palette = useAppPalette()

  const appTeam = useAppSelector(UiSelectors.getTeam)
  const isDrawerExpanded = useAppSelector(UiSelectors.getIsDashboardExpanded)

  const currentViewport = useAppSelector(
    (state) => state?.carto?.viewport || ''
  )

  const { selectedFilterValues } = useGetSelectedFilterValues()

  const {
    data: mvCapRate = [],
    isLoading: isMvCapRateLoading,
    isError: isMvCapRateError,
  } = DirectoryQueries.useGetMarketWeightedAverage({
    subQuery: metricQueryGenerator({
      selectedFilterValues: selectedFilterValues,
      viewport: currentViewport,
      team: appTeam,
      type: TYPE.MARKET_AVG_CAP_RATE,
    }),
  })
  const { value: mvCapRateValue, dealcount: mvCapRateDealCount } =
    mvCapRate[0] || {}

  const {
    data: mvPSF = [],
    isLoading: isMvPSFLoading,
    isError: isMvPSFError,
  } = DirectoryQueries.useGetMarketWeightedAverage({
    subQuery: metricQueryGenerator({
      selectedFilterValues: selectedFilterValues,
      viewport: currentViewport,
      team: appTeam,
      type: TYPE.MARKET_AVG_PSF,
    }),
  })

  const {
    value: mvPSFValue,
    dealcount: mvPSFDealCount,
    currency: mvPSFCurrency,
  } = mvPSF[0] || {}

  const {
    data: mvPSM = [],
    isLoading: isMvPSMLoading,
    isError: isMvPSMError,
  } = DirectoryQueries.useGetMarketWeightedAverage({
    subQuery: metricQueryGenerator({
      selectedFilterValues: selectedFilterValues,
      viewport: currentViewport,
      team: appTeam,
      type: TYPE.MARKET_AVG_PSM,
    }),
  })

  /////////////////////

  const {
    value: mvPSMValue,
    dealcount: mvPSMDealCount,
    currency: mvPSMCurrency,
  } = mvPSM[0] || {}

  const {
    data: TopBuyers = [],
    isLoading: isTopBuyersLoading,
    isError: isTopBuyersError,
  } = DirectoryQueries.useGetTopInsights({
    sqlQuery: topItemsQueryGenerator({
      selectedFilterValues: selectedFilterValues,
      viewport: currentViewport,
      team: appTeam,
      field: 'deal_trade_close_buyer',
    }),
  })
  const {
    data: TopSellers = [],
    isLoading: isTopSellersLoading,
    isError: isTopSellersError,
  } = DirectoryQueries.useGetTopInsights({
    sqlQuery: topItemsQueryGenerator({
      selectedFilterValues: selectedFilterValues,
      viewport: currentViewport,
      team: appTeam,
      field: 'deal_seller',
    }),
  })
  const {
    data: TopSectors = [],
    isLoading: isTopSectorsLoading,
    isError: isTopSectorsError,
  } = DirectoryQueries.useGetTopInsights({
    sqlQuery: topItemsQueryGenerator({
      selectedFilterValues: selectedFilterValues,
      viewport: currentViewport,
      team: appTeam,
      field: 'proj_sector',
    }),
  })

  //////////////////////////////

  const {
    data: dealSizeChartData,
    isLoading: isDealSizeLoading,
    isError: isDealSizeError,
  } = DirectoryQueries.useGetInsightCharts({
    subQuery: chartQueryGenerator({
      type: TYPE.CHART_DEAL_SIZE,
      team: appTeam,
      viewport: currentViewport,
      selectedFilterValues: selectedFilterValues,
    }),
  })
  const {
    data: PSFChartData,
    isLoading: isPSFLoading,
    isError: isPSFError,
  } = DirectoryQueries.useGetInsightCharts({
    subQuery: chartQueryGenerator({
      type: appTeam === 'us' ? TYPE.CHART_PSF : TYPE.CHART_PSM,
      team: appTeam,
      viewport: currentViewport,
      selectedFilterValues: selectedFilterValues,
    }),
  })
  const {
    data: capRateChartData,
    isLoading: isCapRateLoading,
    isError: isCapRateError,
  } = DirectoryQueries.useGetInsightCharts({
    subQuery: chartQueryGenerator({
      type: TYPE.CHART_CAP_RATE,
      team: appTeam,
      viewport: currentViewport,
      selectedFilterValues: selectedFilterValues,
    }),
  })
  const {
    data: dealDateChartData,
    isLoading: isDealDateLoading,
    isError: isDealDateError,
  } = DirectoryQueries.useGetInsightCharts({
    subQuery: chartQueryGenerator({
      type: TYPE.CHART_DEAL_DATE,
      team: appTeam,
      viewport: currentViewport,
      selectedFilterValues: selectedFilterValues,
    }),
  })

  return (
    <InsightContainer
      mt={2}
      sx={{ border: `1px solid ${palette.background.glossary}` }}
    >
      <PerfectScrollbar>
        <Typography
          variant="subtitle1"
          sx={{ color: 'text.primary', padding: '16px' }}
        >
          LTE Market Weighted Average
        </Typography>

        <Stack
          flexDirection={{ xl: 'row', sm: 'column', xs: 'column' }}
          gap={{ sm: 3 }}
        >
          <DirectoryInsightLTEWidget
            title={INSIGHT_TITLES.INSIGHT_CAP_RATE}
            type="percent"
            value={mvCapRateValue}
            dealsCount={mvCapRateDealCount}
            loading={isMvCapRateLoading}
            error={isMvCapRateError}
          />
          <DirectoryInsightLTEWidget
            title={INSIGHT_TITLES.INSIGHT_PSF}
            type="currency"
            value={mvPSFValue}
            currency={mvPSFCurrency}
            dealsCount={mvPSFDealCount}
            loading={isMvPSFLoading}
            error={isMvPSFError}
            sx={{
              borderLeft: `1px solid ${palette.null.border}`,
              borderRight: `1px solid ${palette.null.border}`,
            }}
          />
          <DirectoryInsightLTEWidget
            title={INSIGHT_TITLES.INSIGHT_PSM}
            type="currency"
            value={mvPSMValue}
            currency={mvPSMCurrency}
            dealsCount={mvPSMDealCount}
            loading={isMvPSMLoading}
            error={isMvPSMError}
          />
        </Stack>

        <Stack
          flexDirection={{ xxl: 'row', sm: 'column', xs: 'column' }}
          mx={1}
          my={4}
        >
          <DirectoryInsightTopWidget
            title={INSIGHT_TITLES.TOP_BUYERS}
            rows={TopBuyers}
            isError={isTopBuyersError}
            isLoading={isTopBuyersLoading}
          />
          <DirectoryInsightTopWidget
            title={INSIGHT_TITLES.TOP_SELLERS}
            rows={TopSellers}
            isError={isTopSellersError}
            isLoading={isTopSellersLoading}
          />
          <DirectoryInsightTopWidget
            title={INSIGHT_TITLES.TOP_SECTORS}
            rows={TopSectors}
            isError={isTopSectorsError}
            isLoading={isTopSectorsLoading}
          />
        </Stack>

        <Stack>
          <Stack flexDirection={{ xl: 'row', sm: 'column', xs: 'column' }}>
            <Stack
              direction="column"
              width={{ xl: '50%', sm: '100%', xs: '100%' }}
            >
              <DirectoryInsightChart
                title={INSIGHT_TITLES.INSIGHT_DEAL_SIZE}
                type={TYPE.CHART_DEAL_SIZE}
                team={appTeam}
                records={dealSizeChartData || []}
                isError={isDealSizeError}
                isLoading={isDealSizeLoading}
                isReflow={isDrawerExpanded}
              />
            </Stack>
            <Stack
              direction="column"
              width={{ xl: '50%', sm: '100%', xs: '100%' }}
            >
              <DirectoryInsightChart
                title={appTeam === 'us' ? "PSF ('00)" : "PSM ('000)"}
                type={appTeam === 'us' ? TYPE.CHART_PSF : TYPE.CHART_PSM}
                team={appTeam}
                records={PSFChartData || []}
                isError={isPSFError}
                isLoading={isPSFLoading}
                isReflow={isDrawerExpanded}
              />
            </Stack>
          </Stack>
          <Stack flexDirection={{ xl: 'row', sm: 'column', xs: 'column' }}>
            <Stack
              direction="column"
              width={{ xl: '50%', sm: '100%', xs: '100%' }}
            >
              <DirectoryInsightChart
                title={INSIGHT_TITLES.INSIGHT_CAP_RATE}
                type={TYPE.CHART_CAP_RATE}
                team={appTeam}
                records={capRateChartData || []}
                isError={isCapRateError}
                isLoading={isCapRateLoading}
                isReflow={isDrawerExpanded}
              />
            </Stack>
            <Stack
              direction="column"
              width={{ xl: '50%', sm: '100%', xs: '100%' }}
            >
              <DirectoryInsightChart
                title={INSIGHT_TITLES.INSIGHT_DEAL_DATE}
                type={TYPE.CHART_DEAL_DATE}
                team={appTeam}
                records={dealDateChartData || []}
                isError={isDealDateError}
                isLoading={isDealDateLoading}
                isReflow={isDrawerExpanded}
              />
            </Stack>
          </Stack>
        </Stack>
      </PerfectScrollbar>
    </InsightContainer>
  )
}

export default DirectoryInsightDrawer
