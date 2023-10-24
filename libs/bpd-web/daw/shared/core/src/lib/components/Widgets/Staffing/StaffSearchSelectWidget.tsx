import { FC } from 'react'
import { map, trim, join, split } from 'lodash'
import {
  BpdTagSelect,
  BpdTagSelectProps,
  FieldProps,
} from '@bpd/bpd-web/shared/ui'
import { SearchOutlined } from '@ant-design/icons'
import {
  DawBlueprintApiQueries,
  SearchStaff,
} from '@bpd/daw/shared/data-access'
import { useSelectedValuesWithDeletion } from '../../../hooks'

type Staff = SearchStaff & { id?: number; isDeleted?: boolean }

export interface StaffSearchSelectWidgetProps
  extends Omit<BpdTagSelectProps, 'onChange'>,
    FieldProps {
  onChange: (values: Staff[] | null) => void
}

const encodedValue = (staff: Staff) => join([staff.name, staff.ntid], '|')

const decodedValue = (value: string) => {
  const [name, ntid] = split(value, '|')
  return {
    name,
    ntid,
  }
}

const StaffSearchSelectWidget: FC<StaffSearchSelectWidgetProps> = ({
  uiField,
  input,
  value,
  onChange,
  ...componentProps
}) => {
  const [trigger, { data, isFetching, isLoading }] =
    DawBlueprintApiQueries.useLazyGetSearchStaffs()

  const [formattedValues, handleOnChange] =
    useSelectedValuesWithDeletion<Staff>({
      values: value,
      encode: encodedValue,
      decode: decodedValue,
      onChange,
    })

  const onInternalSearch: BpdTagSelectProps['onSearch'] = (searchText) => {
    if (trim(searchText)) {
      trigger({ query: trim(searchText) }, true)
    }
  }

  return (
    <BpdTagSelect
      suffixIcon={<SearchOutlined />}
      {...componentProps}
      {...{
        options:
          isLoading || isFetching
            ? [{ label: 'Loading...', value: '', disabled: true }]
            : map(data || value || [], (staff: SearchStaff) => ({
                label: staff.name,
                value: encodedValue(staff),
                key: staff.ntid,
              })),
        onSearch: onInternalSearch,
        filterOption: () => true,
        value: formattedValues,
        onChange: handleOnChange,
      }}
    />
  )
}
export default StaffSearchSelectWidget
