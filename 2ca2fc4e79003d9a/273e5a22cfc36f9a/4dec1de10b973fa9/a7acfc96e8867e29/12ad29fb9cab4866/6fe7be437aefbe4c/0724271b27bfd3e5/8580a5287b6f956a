import { FC } from 'react'
import { RadioChangeEvent } from 'antd'
import { BpdRadioGroup, Options } from '@bpd/bpd-web/shared/ui'
import { useAppSelector, useAppDispatch } from '@bpd/bpd-web/shared/store'
import { Box, Stack, Typography } from '@gic/battlefield-ui-pack'
import {
  TENANCY_WALE_PROFILE_CHART_BY_RENT,
  TENANCY_WALE_PROFILE_CHART_BY_SPACE,
  TENANCY_WALE_PROFILE_CHART_BY_PROPERTIES,
} from '../constants'
import { DirectoryActions, DirectorySelectors } from '../data'

interface LogisticsAnalyticsTenancyWALEProfileProps {}

const ACTION_OPTIONS: Options<string> = [
  {
    label: 'By Space',
    value: TENANCY_WALE_PROFILE_CHART_BY_SPACE,
  },
  {
    label: 'By Rent',
    value: TENANCY_WALE_PROFILE_CHART_BY_RENT,
  },
  {
    label: 'By No. of Leases',
    value: TENANCY_WALE_PROFILE_CHART_BY_PROPERTIES,
  },
]

const LogisticsAnalyticsTenancyWALEProfileTitle: FC<
  LogisticsAnalyticsTenancyWALEProfileProps
> = () => {
  const dispatch = useAppDispatch()

  const selectedTenancyChartType = useAppSelector(
    DirectorySelectors.getSelectedTenancyChartType
  )

  const handleButtonChange = (event: RadioChangeEvent) => {
    dispatch(DirectoryActions.setSelectedTenancyChartType(event.target.value))
  }

  return (
    <Box width={'100%'}>
      <Stack flexDirection={'row'} justifyContent={'space-between'}>
        <Stack>
          <Typography variant="subtitle3">{'WALE Profile'}</Typography>
        </Stack>
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
            value={selectedTenancyChartType}
            onChange={handleButtonChange}
          />
        </Stack>
      </Stack>
    </Box>
  )
}

export default LogisticsAnalyticsTenancyWALEProfileTitle
