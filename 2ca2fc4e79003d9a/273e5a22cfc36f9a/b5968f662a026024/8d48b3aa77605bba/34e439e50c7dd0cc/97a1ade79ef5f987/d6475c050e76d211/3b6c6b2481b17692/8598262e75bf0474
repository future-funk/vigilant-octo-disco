import { FC, ReactNode } from 'react'
import {
  BpdMultiSelect,
  BpdMultiSelectProps,
  BpdSelect,
  BpdInputNumberProps,
  SelectItemInterface,
} from '@bpd/bpd-web/shared/ui'

export enum FilterType {
  SingleSelect = 'singleSelect',
  MultiSelect = 'multiSelect',
}

export interface FilterItem {
  key: string
  type: FilterType
  label: ReactNode
  value?: string[] | number | string
  componentProps?: Omit<BpdMultiSelectProps, 'value'> | BpdInputNumberProps
}

export interface FilterComponentProps extends FilterItem {
  filterKey: string
  handleChange: (key: string, value: string[] | number | string) => void
}

const FilterComponent: FC<FilterComponentProps> = (props) => {
  const {
    filterKey: key,
    type,
    label,
    value,
    componentProps,
    handleChange,
  } = props

  switch (type) {
    case FilterType.SingleSelect:
      return (
        <BpdSelect
          {...(componentProps as BpdMultiSelectProps)}
          label={label as string}
          items={(componentProps as unknown as BpdMultiSelectProps)?.items?.map(
            (item) =>
              ({
                label: item,
                value: item,
              } as SelectItemInterface)
          )}
          key={key}
          value={value}
          onChange={(value) => handleChange(key, value)}
          sx={{ minWidth: '200px' }}
        />
      )
    case FilterType.MultiSelect:
      return (
        <BpdMultiSelect
          {...(componentProps as BpdMultiSelectProps)}
          label={label}
          items={(componentProps as unknown as BpdMultiSelectProps)?.items}
          key={key}
          value={value as string[]}
          onChange={(value) => handleChange(key, value)}
        />
      )
    default:
      return null
  }
}

export default FilterComponent
