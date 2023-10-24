import { eq, filter } from 'lodash'
import { useAppSelector, useAppDispatch } from '@bpd/bpd-web/shared/store'
import { Stack } from '@gic/battlefield-ui-pack'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { BpdFilters, BpdFilterConfig } from '@bpd/bpd-web/shared/ui'
import { EsgPortalSelectors, EsgPortalActions } from '../data'
import {
  regionFilter,
  sectorFilter,
  stormSergeRiskRatingFilter,
  hurricaneRiskRatingFilter,
  inlandFloodRiskRatingFilter,
  wildfireRiskRatingFilter,
  greenCertBucketFilter,
  filterMore,
} from '../configs'

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

const FilterBar = () => {
  const dispatch = useAppDispatch()

  const filters = useAppSelector(EsgPortalSelectors.getSelectedFilters)

  const handleChange = (config: BpdFilterConfig) => {
    const filtered = filter(
      filters,
      (activeFilter) => !eq(activeFilter.field, config.field)
    )

    dispatch(
      EsgPortalActions.setSelectedFilters([
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
          regionFilter,
          sectorFilter,
          stormSergeRiskRatingFilter,
          hurricaneRiskRatingFilter,
          inlandFloodRiskRatingFilter,
          wildfireRiskRatingFilter,
          greenCertBucketFilter,
          filterMore,
        ]}
        onChange={handleChange}
      />
    </StyledFiltersContainer>
  )
}

export default FilterBar
