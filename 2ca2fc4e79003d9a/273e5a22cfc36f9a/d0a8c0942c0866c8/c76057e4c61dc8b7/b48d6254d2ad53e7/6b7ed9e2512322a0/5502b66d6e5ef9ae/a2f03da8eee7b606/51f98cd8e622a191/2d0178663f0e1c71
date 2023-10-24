import { useAppSelector } from '@bpd/bpd-web/shared/store'
import { Company } from '@bpd/market-transactions/shared/data-access'
import { Stack, Typography } from '@gic/battlefield-ui-pack'
import { RadioChangeEvent } from 'antd'
import { size } from 'lodash'
import pluralize from 'pluralize'
import { FC } from 'react'
import { MarketTransactionsSelectors } from '../../data'
import LastNMonthsFilter from '../LastNMonthsFilter'
import SubTags from './SubTags'

interface DecompTitleProps {
  selectedRow: Company
  timeframe: number
  onChangeTimeframe: (event: RadioChangeEvent) => void
}

const DecompTitle: FC<DecompTitleProps> = (props) => {
  const { selectedRow, timeframe, onChangeTimeframe } = props

  const filters = useAppSelector(MarketTransactionsSelectors.getFilters)
  const { countries, sectors } = filters || {}

  const numCountry = size(countries)
  const numSector = size(sectors)

  return (
    <Stack spacing={0.5}>
      <Stack>
        <Stack direction="row" spacing={1}>
          <Typography variant="subtitle1">{selectedRow.companyName}</Typography>
          <Typography variant="body2" color="null.main">
            {selectedRow.companyCountry}
          </Typography>
        </Stack>
        <Typography variant="body3" color="null.main">
          (Data presented is derived from {numCountry}{' '}
          {pluralize('country', numCountry)} and {numSector}{' '}
          {pluralize('sector', numSector)}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <SubTags {...{ selectedRow }} />
        <LastNMonthsFilter
          {...{ isVertical: true, timeframe, onChangeTimeframe }}
        />
      </Stack>
    </Stack>
  )
}
export default DecompTitle
