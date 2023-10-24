import { Stack } from '@gic/battlefield-ui-pack'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { BpdFilters, BpdFilterConfig } from '@bpd/bpd-web/shared/ui'
import { useAppSelector, useAppDispatch } from '@bpd/bpd-web/shared/store'
import { eq } from 'lodash'

import {
  typeFilter,
  sectorFilter,
  valuationFilter,
  capRateFilter,
  acqVintageDateFilter,
  directoryFilterMore,
} from '../configs'
import {
  DirectoryActions,
  DirectorySelectors,
} from '../data/stores/directorySlice'
import SearchController from './SearchController'

const { setSelectedDirectoryFilters } = DirectoryActions
const { getSelectedDirectoryFilters } = DirectorySelectors

const StyledFiltersContainer = withTheme(Stack)({
  cursor: 'pointer',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  gap: '10px',
  alignItems: 'center',
})

const DrawerFilters = () => {
  const dispatch = useAppDispatch()
  const filters = useAppSelector(getSelectedDirectoryFilters)

  const getValuationFormat = (value: string) => {
    return value && parseInt(value, 10) * 1000000
  }

  const getCapRateFormat = (value: string) => {
    return value && parseFloat(value) / 100
  }

  const handleFilterClick = (config: BpdFilterConfig) => {
    const { field } = config
    const { value: filterValues } = config

    const filtered = filters?.filter(
      (activeFilter: BpdFilterConfig) => !eq(activeFilter.field, field)
    )

    if (field.includes('Valuation')) {
      config = { ...config, value: getValuationFormat(filterValues) }
    }

    if (field.includes('CapRate')) {
      config = { ...config, value: getCapRateFormat(filterValues) }
    }

    if (field === 'acq_vintage_dt') {
      config = {
        ...config,
        value: filterValues.date,
      }
    }

    dispatch(
      setSelectedDirectoryFilters([
        ...(filtered || []),
        ...(filterValues ? [config] : []),
      ])
    )
  }

  return (
    <StyledFiltersContainer>
      <Stack width={400}>
        <SearchController label='Search Location' placeholder="Enter location or address" />
      </Stack>

      <BpdFilters
        active={filters || []}
        configs={[
          typeFilter,
          sectorFilter,
          valuationFilter,
          capRateFilter,
          acqVintageDateFilter,
          directoryFilterMore,
        ]}
        onChange={handleFilterClick}
      />
    </StyledFiltersContainer>
  )
}

export default DrawerFilters
