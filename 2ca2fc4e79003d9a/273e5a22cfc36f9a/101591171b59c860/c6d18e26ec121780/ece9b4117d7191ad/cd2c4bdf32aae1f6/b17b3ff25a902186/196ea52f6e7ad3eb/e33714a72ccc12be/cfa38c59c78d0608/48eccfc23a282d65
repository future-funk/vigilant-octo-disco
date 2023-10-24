import { FC } from 'react'
import { FieldProps, Widgets } from '@bpd/bpd-web/shared/ui'
import { useAppSelector } from '@bpd/bpd-web/shared/store'
import { DawUiSelectors } from '@bpd/daw/shared/data-access'
import { CURRENCY_MAPPING_BY_TEM } from '@bpd/ui/constants'
import { compact, includes, map } from 'lodash'

export interface CurrencyAutoCompleteWidgetProps
  extends Widgets.BpdAutoCompleteWidgetProps,
    FieldProps {}

const CurrencyAutoCompleteWidget: FC<CurrencyAutoCompleteWidgetProps> = ({
  input,
  value,
  ...componentProps
}) => {
  const team = useAppSelector(DawUiSelectors.getTeam)

  const topCurrencies = compact([
    value,
    ...(team ? map(CURRENCY_MAPPING_BY_TEM[team], 'label') : []),
  ])

  const filterSort: CurrencyAutoCompleteWidgetProps['filterSort'] = (
    currency1,
    currency2
  ) => {
    const isCurrency1Top = includes(topCurrencies, currency1.value)
    const isCurrency2Top = includes(topCurrencies, currency2.value)

    return isCurrency1Top === isCurrency2Top ? 0 : isCurrency1Top ? -1 : 1
  }

  return (
    <Widgets.BpdAutoCompleteWidget
      {...componentProps}
      value={value}
      filterSort={filterSort}
    />
  )
}

export default CurrencyAutoCompleteWidget
