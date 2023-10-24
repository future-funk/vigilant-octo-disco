import { Team } from '@bpd/bpd-web/shared/data-access'
import { useAppDispatch, useAppSelector } from '@bpd/bpd-web/shared/store'
import {
  BpdMultiSelect,
  BpdMultiSelectProps,
  BpdSpinner,
  SelectItemInterface,
} from '@bpd/bpd-web/shared/ui'
import { Stack } from '@gic/battlefield-ui-pack'
import { get } from 'lodash'
import React, { ReactNode } from 'react'
import { InvestmentProcessActions, InvestmentProcessSelectors } from '../data'
import StyledBpdSelect from './BpdSelect.styles'

export interface FilterOption
  extends Pick<BpdMultiSelectProps, 'label' | 'items'> {
  key: string
  value?: string[]
  type?: 'SINGLE' | 'MULTI'
  team?: Team
  placeholder?: string
}

export type FilterOptions = FilterOption[]

export interface FiltersProps {
  search?: ReactNode
  options?: FilterOptions
}

export type FilterState = Record<string, string[]>

const Filters: React.FC<FiltersProps> = (props) => {
  const { options = [], search } = props

  const dispatch = useAppDispatch()

  const filters = useAppSelector(InvestmentProcessSelectors.getFilters)
  const isFetching = useAppSelector(InvestmentProcessSelectors.getIsFetching)

  const handleChange = (key: string, value: string[]) => {
    dispatch(InvestmentProcessActions.setFilters({ ...filters, [key]: value }))
  }

  return (
    <Stack alignItems="flex-end" direction="row" spacing={1}>
      {search}
      {options.map(({ key, type, items = [], label, ...rest }) => {
        return type === 'SINGLE' ? (
          <StyledBpdSelect
            {...rest}
            label={label as string}
            items={items.map(
              (item) =>
                ({
                  key: item,
                  label: item,
                  value: item,
                } as SelectItemInterface)
            )}
            key={key}
            value={get(filters, key)}
            onChange={(value) => handleChange(key, value)}
          />
        ) : (
          <BpdMultiSelect
            {...rest}
            label={label}
            items={items}
            key={key}
            value={get(filters, key)}
            onChange={(value) => handleChange(key, value)}
          />
        )
      })}
      {isFetching && <BpdSpinner />}
    </Stack>
  )
}

export default Filters
