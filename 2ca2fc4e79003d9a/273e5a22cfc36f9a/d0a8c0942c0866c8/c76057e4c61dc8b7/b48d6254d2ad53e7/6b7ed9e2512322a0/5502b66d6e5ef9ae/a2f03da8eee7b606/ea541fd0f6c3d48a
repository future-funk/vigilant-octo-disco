import { useAppDispatch, useAppSelector } from '@bpd/bpd-web/shared/store'
import { BpdFilterControlType } from '@bpd/bpd-web/shared/ui'
import { Stack, Typography } from '@gic/battlefield-ui-pack'
import { FILTER_INFO } from '../constants'
import { MarketTransactionsActions, MarketTransactionsSelectors } from '../data'
import { useGetBaseFilterItems } from '../hooks'
import Filters from './Filters'

const FilterBar = () => {
  const dispatch = useAppDispatch()

  const filters = useAppSelector(MarketTransactionsSelectors.getFilters)

  const handleChange = (key: string, value: unknown) => {
    dispatch(MarketTransactionsActions.setFilters({ ...filters, [key]: value }))
  }

  const { regionItems, countryItems, sectorItems } = useGetBaseFilterItems()

  return (
    <Stack direction="row" flexWrap="wrap" alignItems="flex-end">
      <Filters
        filters={filters}
        handleChange={handleChange}
        options={[
          {
            key: 'regions',
            label: 'Region',
            type: BpdFilterControlType.MultiSelect,
            componentProps: { items: regionItems },
          },
          {
            key: 'countries',
            label: 'Country',
            type: BpdFilterControlType.MultiSelect,
            componentProps: { items: countryItems },
          },
          {
            key: 'sectors',
            label: 'Sector',
            type: BpdFilterControlType.MultiSelect,
            componentProps: { items: sectorItems },
          },
        ]}
      />
      <Typography variant="overline" sx={{ padding: '4px' }}>
        {FILTER_INFO}
      </Typography>
    </Stack>
  )
}

export default FilterBar
