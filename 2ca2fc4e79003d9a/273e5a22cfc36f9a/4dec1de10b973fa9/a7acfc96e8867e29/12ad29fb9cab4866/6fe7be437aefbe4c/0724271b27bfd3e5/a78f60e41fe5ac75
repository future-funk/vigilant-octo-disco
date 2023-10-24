import { RadioChangeEvent } from 'antd'
import { BpdRadioGroup, Options } from '@bpd/bpd-web/shared/ui'
import { Box, Stack } from '@gic/battlefield-ui-pack'
import { useAppSelector, useAppDispatch } from '@bpd/bpd-web/shared/store'
import {
  TOTAL_GLA_CHART,
  TOTAL_RENT_CHART,
  TOTAL_ASSETS_CHART,
} from '../constants'
import { DirectoryActions, DirectorySelectors } from '../data'

interface LogisticsAnalyticsPortfolioTotalGlaTitleProps {}

const ACTION_OPTIONS: Options<string> = [
  {
    label: 'Total GLA',
    value: TOTAL_GLA_CHART,
  },
  {
    label: 'Total Rent',
    value: TOTAL_RENT_CHART,
  },
  {
    label: 'No. of Properties',
    value: TOTAL_ASSETS_CHART,
  },
]

const LogisticsAnalyticsPortfolioTotalGlaTitle: React.FC<
  LogisticsAnalyticsPortfolioTotalGlaTitleProps
> = (props) => {
  const dispatch = useAppDispatch()

  const selectedAnalyticsType = useAppSelector(
    DirectorySelectors.getSelectedAnalyticsChartType
  )

  const handleButtonChange = (event: RadioChangeEvent) => {
    dispatch(DirectoryActions.setSelectedAnalyticsChartType(event.target.value))
  }

  return (
    <Box width={'max-content'}>
      <Stack
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 0.5,
        }}
      >
        <BpdRadioGroup
          options={ACTION_OPTIONS}
          optionType="button"
          buttonStyle="solid"
          value={selectedAnalyticsType}
          onChange={handleButtonChange}
        />
        {/* <Typography variant="subtitle3">by Country</Typography> */}
      </Stack>
    </Box>
  )
}

export default LogisticsAnalyticsPortfolioTotalGlaTitle
