import { DeleteOutlined } from '@ant-design/icons'
import { useAppPalette, useAppSpacing } from '@bpd/bpd-web/shared/theme'
import { Icon } from '@gic/battlefield-ui-pack'
import {
  chain,
  has,
  join,
  set,
  split,
  parseInt,
  reject,
  size,
  filter,
  first,
} from 'lodash'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

export interface BreakdownDeleteButtonProps {
  fieldKey: string
  disabled?: boolean
  breakdownField: string
}
const extractBreakdownKey = (path: string) => {
  const match = path.match(/(.*)\[(\d+)\]\.(.*)/)
  const [_, breakdownKey, breakdownIndex] = match ?? []
  return { breakdownKey, breakdownIndex: parseInt(breakdownIndex) }
}

const BreakdownDeleteButton: FC<BreakdownDeleteButtonProps> = ({
  fieldKey,
  disabled,
  breakdownField,
}) => {
  const palette = useAppPalette()
  const spacing = useAppSpacing()

  const { getValues, resetField, setValue } = useFormContext()

  const handleClick = () => {
    if (disabled) return
    const { breakdownKey, breakdownIndex } = extractBreakdownKey(fieldKey)
    const currentValue = [...getValues(breakdownKey)]
    const newValue = chain(currentValue)
      .map((obj, i) =>
        i === breakdownIndex
          ? has(obj, 'id')
            ? set(obj, 'isDeleted', true)
            : null
          : obj
      )
      .compact()
      .value()

    const newItems = reject(newValue, { isDeleted: true })
    if (size(newItems) > 1) {
      resetField(breakdownKey, { defaultValue: newValue })
    } else {
      resetField(breakdownKey, {
        defaultValue: filter(newValue, { isDeleted: true }),
      }) //keep only BE saved items
      setValue(breakdownField, first(newItems)?.item ?? '')
    }
  }
  return (
    <Icon
      icon={DeleteOutlined}
      sx={{
        fontSize: spacing(1.75),
        color: disabled ? palette.text.disabled : palette.primary.main,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
      onClick={handleClick}
    />
  )
}

export default BreakdownDeleteButton
