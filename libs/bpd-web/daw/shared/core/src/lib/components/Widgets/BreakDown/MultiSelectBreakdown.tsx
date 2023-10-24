import { FC } from 'react'
import { first, size } from 'lodash'
import {
  BpdMultiSelect,
  BpdMultiSelectProps,
  FieldProps,
  utilReplaceArrKey,
} from '@bpd/bpd-web/shared/ui'

import { useBreakDown, useBreakDownProps } from '../../../hooks'

export interface MultiSelectBreakdownProps
  extends BpdMultiSelectProps,
    FieldProps {
  breakDnOptions: useBreakDownProps & { multiSelectLabel?: string }
}

const MultiSelectBreakdown: FC<MultiSelectBreakdownProps> = ({
  input: { name, arrayIndices },
  uiField,
  value,
  onChange,
  breakDnOptions: {
    breakDnKey,
    minThreshold = 2,
    multiSelectLabel = 'Multiple',
  },
  ...componentProps
}) => {
  const replacedBreakDnKey = utilReplaceArrKey({
    path: breakDnKey,
    arrayIndices,
  })

  const { selectedValue, handleInternalChange } = useBreakDown({
    breakDnKey: replacedBreakDnKey,
    minThreshold,
  })

  const onInternalChange = (selectionArray: string[]) => {
    if (size(selectionArray) > 1) {
      onChange?.(multiSelectLabel)
    } else {
      onChange?.(first(selectionArray))
    }
    handleInternalChange(selectionArray)
  }

  return (
    <BpdMultiSelect
      multiSelectLabel={multiSelectLabel}
      showSelectAll={false}
      orderedSelectOnTop={true}
      {...componentProps}
      onChange={onInternalChange}
      value={selectedValue || (value === multiSelectLabel ? null : value)}
    />
  )
}

export default MultiSelectBreakdown
