import {
  formatNumber,
  formatPercent,
  formatRelativeNumber,
} from '@bpd/utils/formatters'
import { LogisticsCartoQuery } from '../data'
import useOverviewQueryArgs from './useOverviewQueryArgs'

const useGetWidgetConfig = () => {
  const { showSelectedCards, ...queryParam } = useOverviewQueryArgs()

  const {
    data: aggregatedMetricsData = [],
    isError: aggregatedMetricsError,
    isLoading: aggregatedMetricsIsLoading,
  } = LogisticsCartoQuery.useGetLogisticsAnalyticsQuery({
    tableName: 'carto.fn_app_eu_lg_get_portf_analysis',
    ...queryParam,
    whereCondition: `country = 'Total'`,
  })

  const {
    totalAssets,
    occupancy,
    wale,
    walb,
    totalGlaSqm,
    reversionPotential,
  } = aggregatedMetricsData[0] || {}

  return [
    {
      title: 'Number of Assets',
      value: formatNumber(totalAssets || 0),
      isLoading: aggregatedMetricsIsLoading,
      isError: aggregatedMetricsError,
    },
    {
      title: 'Average Occupancy',
      value: formatPercent(occupancy || 0),
      isLoading: aggregatedMetricsIsLoading,
      isError: aggregatedMetricsError,
    },
    {
      title: 'Aggregate WALE/WALB',
      value: `${formatNumber(wale || 0, 1)} / ${formatNumber(walb || 0, 1)}`,
      isLoading: aggregatedMetricsIsLoading,
      isError: aggregatedMetricsError,
    },
    {
      title: 'Total GLA (sqm)',
      value: formatRelativeNumber(totalGlaSqm || 0, 1),
      isLoading: aggregatedMetricsIsLoading,
      isError: aggregatedMetricsError,
    },
    {
      title: 'Aggregate Reversion Potential',
      value: formatPercent(reversionPotential || 0),
      isLoading: aggregatedMetricsIsLoading,
      isError: aggregatedMetricsError,
    },
  ]
}

export default useGetWidgetConfig
