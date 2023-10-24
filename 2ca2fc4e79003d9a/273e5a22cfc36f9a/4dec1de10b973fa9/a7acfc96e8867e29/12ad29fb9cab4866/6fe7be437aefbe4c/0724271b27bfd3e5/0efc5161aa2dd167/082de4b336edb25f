import { FC } from 'react'
import { get } from 'lodash'
import { Stack } from '@gic/battlefield-ui-pack'
import { BpdFilterControl, BpdFilterControlItem } from '@bpd/bpd-web/shared/ui'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { SearchController } from '@bpd/bpd-web/directory/feature-shell/shared/directory'
import { EU_ADDRESS_RESTRICT_TO } from '@bpd/bpd-web/shared/core'

export type FilterItems = BpdFilterControlItem[]

const StyledFiltersContainer = withTheme(Stack)({
  cursor: 'pointer',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  gap: '10px',
  alignItems: 'center',
})

export interface FiltersProps {
  options?: FilterItems
  handleChange?: (key: string, value: string[] | number | string) => void
  filters: Record<string, string | string[]>
}

const Filters: FC<FiltersProps> = (props) => {
  const { options = [], handleChange, filters } = props

  return (
    <StyledFiltersContainer>
      <Stack width={290}>
        <SearchController
          label="Search Location"
          placeholder="Enter location or address"
          addressRestrictTo={EU_ADDRESS_RESTRICT_TO}
        />
      </Stack>
      <Stack alignItems="center" direction="row" spacing={1}>
        {options.map(({ key, ...rest }) => (
          <BpdFilterControl
            {...{
              ...rest,
              key,
              filterKey: key,
              handleChange,
              value: get(filters, key),
            }}
          />
        ))}
      </Stack>
    </StyledFiltersContainer>
  )
}

export default Filters
