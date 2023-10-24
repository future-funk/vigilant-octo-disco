import { BpdCurrencySymbolWidgetProps } from '@bpd/bpd-web/shared/ui'
import { FC } from 'react'

export type WithCurrencySymbolOptions = {
  component: FC<BpdCurrencySymbolWidgetProps>
} & { currencyField: string }

const withCurrencySymbol =
  (options: WithCurrencySymbolOptions) =>
  (props: BpdCurrencySymbolWidgetProps) => {
    const { component: WrapperComponent, currencyField } = options

    return <WrapperComponent {...{ ...props, currencyField }} />
  }

export default withCurrencySymbol
