import { useAppTheme } from '@bpd/bpd-web/shared/theme'
import { Box, Stack, Typography, withTheme } from '@gic/battlefield-ui-pack'
import dayjs from 'dayjs'
import { get } from 'lodash'
import { FC, ReactElement, ReactNode } from 'react'
import {
  BpdMultiSelect,
  BpdMultiSelectProps,
  BpdSelect,
  SelectItemInterface,
  BpdInputNumberProps,
  BpdInputNumber,
} from '@bpd/bpd-web/shared/ui'

export enum FilterType {
  SingleSelect = 'singleSelect',
  MultiSelect = 'multiSelect',
  NumberInput = 'numberInput',
  Custom = 'custom',
}

export interface FilterItem {
  key: string
  type: FilterType
  label: ReactNode
  value?: string[] | number | string
  componentProps?: Omit<BpdMultiSelectProps, 'value'> | BpdInputNumberProps
  customComponent?: ReactElement
}

/** Helper function to render vertically divided component used in reduce. */
const renderHorizontalRow = (output: ReactElement, element: ReactElement) => (
  <>
    {output}
    {element}
  </>
)

export interface FilterComponentProps extends FilterItem {
  filterKey: string
  handleChange: (key: string, value: string[] | number | string) => void
}

/**
 * React component to switch which filter component to render based on type given.
 *
 * @param props FilterComponentProps
 */
const FilterComponent: FC<FilterComponentProps> = (props) => {
  const {
    filterKey: key,
    type,
    label,
    value,
    componentProps,
    customComponent,
    handleChange,
  } = props

  const { typography, palette } = useAppTheme()

  switch (type) {
    /* Text */
    case FilterType.SingleSelect:
      return (
        <BpdSelect
          {...(componentProps as BpdMultiSelectProps)}
          label={label as string}
          items={(componentProps as unknown as BpdMultiSelectProps)?.items?.map(
            (item) =>
              ({
                key: item,
                label: item,
                value: item,
              } as SelectItemInterface)
          )}
          key={key}
          value={value}
          onChange={(value) => handleChange(key, value)}
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
    case FilterType.NumberInput:
      return (
        <BpdInputNumber
          {...{
            sx: { width: '100%' },
            ...(componentProps as BpdInputNumberProps),
            label,
            value: value as unknown as number,
            onChange: (value) => handleChange(key, value),
          }}
        />
      )
    case FilterType.Custom:
      return customComponent ?? null

    default:
      return null
  }
}

export default FilterComponent
