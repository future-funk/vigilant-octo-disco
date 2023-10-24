import { FC } from 'react'
import { first, size } from 'lodash'
import {
  BpdMultiSelect,
  BpdRuleConfig,
  utilReplaceArrKey,
} from '@bpd/bpd-web/shared/ui'
import { SECTORS } from '@bpd/ui/constants'

import { useBreakDown } from '../../../hooks'
import { MultiSelectBreakdownProps } from './MultiSelectBreakdown'
import MixedUseSectorHeader from './MixedUseHeader'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'
import DealAsyncTooltipHeader from '../../DealAsyncTooltipHeader'

const SectorMultiSelectBreakdown: FC<MultiSelectBreakdownProps> = ({
  input: { name, arrayIndices, hasError },
  uiField,
  value,
  onChange,
  breakDnOptions: { breakDnKey },
  disabled,
  ...componentProps
}) => {
  const replacedBreakDnKey = utilReplaceArrKey({
    path: breakDnKey,
    arrayIndices,
  })

  const { selectedValue, handleInternalChange } = useBreakDown({
    breakDnKey: replacedBreakDnKey,
  })

  const handleMixedUseChange = (e: CheckboxChangeEvent) => {
    onChange?.(!e.target.checked ? SECTORS.DIVERSIFIED : SECTORS.MIXED_USE)
  }

  const onInternalChange = (selectionArray: string[]) => {
    if (size(selectionArray) > 1) {
      onChange?.(
        value === SECTORS.MIXED_USE ? SECTORS.MIXED_USE : SECTORS.DIVERSIFIED
      )
    } else {
      onChange?.(first(selectionArray))
    }
    handleInternalChange(selectionArray)
  }

  const multiSelectLabel = size(selectedValue) > 1 ? (value as string) : ''

  return (
    <BpdMultiSelect
      sx={
        hasError
          ? {
              '&&&& .ant-select-selector': {
                borderColor: 'error.main',
              },
            }
          : {}
      }
      multiSelectLabel={multiSelectLabel}
      showSelectAll={false}
      orderedSelectOnTop={true}
      disabled={disabled}
      {...componentProps}
      label={
        <DealAsyncTooltipHeader
          header={
            <MixedUseSectorHeader
              disabled={disabled}
              isVisible={size(selectedValue) > 1}
              value={value === SECTORS.MIXED_USE}
              onChange={handleMixedUseChange}
              arrayIndices={arrayIndices!}
              required={
                uiField?.rule?.validationRule?.required as BpdRuleConfig[]
              }
            />
          }
          uiField={uiField}
        />
      }
      onChange={onInternalChange}
      value={selectedValue || (value === multiSelectLabel ? null : value)}
    />
  )
}

export default SectorMultiSelectBreakdown
