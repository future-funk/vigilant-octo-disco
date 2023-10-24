import { FC } from 'react'
import { RadioChangeEvent } from 'antd'
import { BpdRadioGroup, Options } from '@bpd/bpd-web/shared/ui'
import { useAppSelector, useAppDispatch } from '@bpd/bpd-web/shared/store'
import { Box, Stack, Typography } from '@gic/battlefield-ui-pack'
import {
  TENANT_EXPOSURE_CHART_BY_SECTOR,
  TENANT_EXPOSURE_CHART_BY_COUNTRY,
} from '../constants'
import { DirectoryActions, DirectorySelectors } from '../data'

interface LogisticsAnalyticsTenantExposureTitleProps {}

const ACTION_OPTIONS: Options<string> = [
  {
    label: 'By Sector',
    value: TENANT_EXPOSURE_CHART_BY_SECTOR,
  },
  {
    label: 'By Country',
    value: TENANT_EXPOSURE_CHART_BY_COUNTRY,
  },
]

const LogisticsAnalyticsTenantExposureTitle: FC<
  LogisticsAnalyticsTenantExposureTitleProps
> = () => {
  const dispatch = useAppDispatch()

  const selectedTenantExposureChartType = useAppSelector(
    DirectorySelectors.getSelectedTenantExposureChartType
  )

  const handleButtonChange = (event: RadioChangeEvent) => {
    dispatch(
      DirectoryActions.setSelectedTenantExposureChartType(event.target.value)
    )
  }

  return (
    <Box width={'100%'}>
      <Stack flexDirection={'row'} justifyContent={'space-between'}>
        <Stack>
          <Typography variant="subtitle3">{'Tenant Exposure'}</Typography>
          <Typography variant="caption">
            {'GICS sector classification'}
          </Typography>
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
            value={selectedTenantExposureChartType}
            onChange={handleButtonChange}
          />
        </Stack>
      </Stack>
    </Box>
  )
}

export default LogisticsAnalyticsTenantExposureTitle
