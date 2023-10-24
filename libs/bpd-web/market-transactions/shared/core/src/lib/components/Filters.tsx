import { FC } from 'react'
import { get } from 'lodash'
import { Stack } from '@gic/battlefield-ui-pack'
import { BpdFilterControl, BpdFilterControlItem } from '@bpd/bpd-web/shared/ui'

export type FilterItems = BpdFilterControlItem[]

export interface FiltersProps {
  options?: FilterItems
  handleChange?: (key: string, value: string[] | number | string) => void
  filters: Record<string, string | string[]>
}

const Filters: FC<FiltersProps> = (props) => {
  const { options = [], handleChange, filters } = props

  return (
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
  )
}

export default Filters
