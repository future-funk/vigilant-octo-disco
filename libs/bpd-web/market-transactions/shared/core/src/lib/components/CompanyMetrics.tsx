import {
  BpdFilterControlType,
  BpdVerticalDivider,
} from '@bpd/bpd-web/shared/ui'
import { formatNumber } from '@bpd/utils/formatters'
import { useGrid } from '@bpd/vendors/ag-grid'
import { Stack, Typography } from '@gic/battlefield-ui-pack'
import { compact, isEmpty } from 'lodash'
import { FC, useEffect, useState } from 'react'
import { DEFAULT_COMPANY } from '../constants'
import { useRadioState } from '../hooks'
import { CompanyParams } from '../types'
import Filters from './Filters'
import LastNMonthsFilter from './LastNMonthsFilter'

interface CompanyMetricsProps {
  companyCountries: string[]
  setCompanyParams: (value: CompanyParams) => void
}

type GridContextType = {
  displayedRowCount: number
}

const CompanyMetrics: FC<CompanyMetricsProps> = (props) => {
  const { setCompanyParams, companyCountries } = props
  const { context } = useGrid()

  const { displayedRowCount } = (context as GridContextType) || {}

  const [selectedCompanyCountries, setSelectedCompanyCountries] = useState<
    string[]
  >([])
  const { value: timeframe, onChange: onChangeTimeframe } = useRadioState(
    DEFAULT_COMPANY.timeframe
  )

  useEffect(() => {
    setSelectedCompanyCountries(companyCountries)
  }, [companyCountries])

  useEffect(() => {
    setCompanyParams({ selectedCompanyCountries, timeframe })
  }, [selectedCompanyCountries, timeframe])

  if (isEmpty(companyCountries)) return null
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent={'space-between'}
      alignItems={'flex-end'}
      p={0.5}
      height={28}
    >
      <Typography variant="body2">
        {displayedRowCount
          ? `Results: ${formatNumber(displayedRowCount)}`
          : null}
      </Typography>
      <Stack direction="row" spacing={2} alignItems={'center'}>
        <LastNMonthsFilter {...{ timeframe, onChangeTimeframe }} />
        <BpdVerticalDivider />
        <Typography variant="body2">Company Country:</Typography>
        <Filters
          handleChange={(key, value: string[]) =>
            setSelectedCompanyCountries(value)
          }
          filters={{ selectedCompanyCountries }}
          options={[
            {
              key: 'selectedCompanyCountries',
              label: '',
              type: BpdFilterControlType.MultiSelect,
              componentProps: {
                items: compact(companyCountries),
              },
            },
          ]}
        />
      </Stack>
    </Stack>
  )
}

export default CompanyMetrics
