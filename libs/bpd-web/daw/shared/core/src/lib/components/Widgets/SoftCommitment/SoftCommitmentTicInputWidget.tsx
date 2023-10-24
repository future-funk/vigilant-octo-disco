import { useAppPalette } from '@bpd/bpd-web/shared/theme'
import {
  BpdInputNumberProps,
  FieldProps,
  WithBpdXEUSDInfoWidgetOptions,
  WithLoaderWidget,
} from '@bpd/bpd-web/shared/ui'
import { Typography } from '@gic/battlefield-ui-pack'
import { valueType } from 'antd/lib/statistic/utils'
import { first } from 'lodash'
import { FC, FocusEvent } from 'react'
import { useValidateScrTic } from '../../../hooks'
import { ProjCurrencySymbolWithXeUsdInfoWidget } from '../Currency'

export interface TicInputWidgetProps
  extends FieldProps,
    WithBpdXEUSDInfoWidgetOptions,
    BpdInputNumberProps {
  currencyField: string
}

const SoftCommitmentTicInputWidget: FC<TicInputWidgetProps> = ({
  value,
  input,
  onChange,
  ...props
}) => {
  const baseKey = first(input.name.split('.'))

  const [validateTicValue, isValidating, setValue] = useValidateScrTic({
    name: input.name,
    value,
  })

  const onInternaleChange = (newValue: valueType) => {
    setValue([baseKey, 'scrValidate'].join('.'), 'none')
    onChange?.(newValue)
  }
  const onInternalBlur = (e: FocusEvent<HTMLInputElement>) => {
    setValue([baseKey, 'scrValidate'].join('.'), 'validating')
    validateTicValue()
  }

  return (
    <WithLoaderWidget isLoading={isValidating}>
      <ProjCurrencySymbolWithXeUsdInfoWidget
        {...props}
        {...{
          input,
          value,
          onChange: onInternaleChange,
          onBlur: onInternalBlur,
          disabled: isValidating,
        }}
      />
      {isValidating && (
        <Typography variant="body3" sx={{ marginTop: 0.5 }}>
          Validating TIC amount...
        </Typography>
      )}
    </WithLoaderWidget>
  )
}

export default SoftCommitmentTicInputWidget
