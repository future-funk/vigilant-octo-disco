import { eq, filter } from 'lodash'
import { useAppSelector, useAppDispatch } from '@bpd/bpd-web/shared/store'
import { Stack } from '@gic/battlefield-ui-pack'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { BpdFilters, BpdFilterConfig } from '@bpd/bpd-web/shared/ui'
import { useGetBaseFilterItems } from '../hooks'
import { DirectorySelectors, DirectoryActions } from '../data'

const StyledFiltersContainer = withTheme(Stack)({
  cursor: 'pointer',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  gap: '10px',
  alignItems: 'center',
  '& Button': {
    marginTop: 23,
    height: 28,
  },
})

const DirectoryDrawerFilters = () => {
  const dispatch = useAppDispatch()

  const filters = useAppSelector(DirectorySelectors.getSelectedDirectoryFilters)

  const {
    developmentStageFilter,
    dealStatusFilter,
    warehouseTypeFilter,
    teamFilter,
    partnerFilter,
    dealsFilter,
    cityFilter,
    directoryFilterMore,
  } = useGetBaseFilterItems()

  const handleChange = (config: BpdFilterConfig) => {
    const filtered = filter(
      filters,
      (activeFilter) => !eq(activeFilter.field, config.field)
    )

    dispatch(
      DirectoryActions.setSelectedDirectoryFilters([
        ...filtered,
        ...(config.value ? [config] : []),
      ])
    )
  }

  return (
    <StyledFiltersContainer>
      <BpdFilters
        active={filters}
        configs={[
          developmentStageFilter,
          dealStatusFilter,
          warehouseTypeFilter,
          teamFilter,
          partnerFilter,
          dealsFilter,
          cityFilter,
          directoryFilterMore,
        ]}
        onChange={handleChange}
      />
    </StyledFiltersContainer>
  )
}

export default DirectoryDrawerFilters
