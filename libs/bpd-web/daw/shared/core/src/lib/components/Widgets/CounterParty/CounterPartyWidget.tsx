import {
  BpdAutoCompleteProps,
  FieldProps,
  Widgets,
} from '@bpd/bpd-web/shared/ui'
import {
  DawBlueprintApiQueries,
  CounterParties,
} from '@bpd/daw/shared/data-access'
import { last, map, toPath, trim } from 'lodash'
import { FC } from 'react'

export interface CounterPartyWidgetProps
  extends BpdAutoCompleteProps,
    FieldProps {
  onChange: (value: string) => void
}

const TYPE_MAPPING_BY_FORM_KEY: Record<string, CounterParties> = {
  seller: 'sellers',
  broker: 'brokers',
  buyer: 'buyers',
  generalPartner: 'partners',
  legalRep: 'legalreps',
}

const CounterPartyWidget: FC<CounterPartyWidgetProps> = ({
  input: { name },
  value,
  onChange,
  uiField,
  ...componentProps
}) => {
  const key = last(toPath(name))!

  const type = TYPE_MAPPING_BY_FORM_KEY[key as string]

  const { data, isLoading, isFetching } =
    DawBlueprintApiQueries.useGetCounterParties({
      type,
      query: trim(value),
    })

  const handleSelectOption = (option: string) => {
    onChange?.(option)
  }

  return (
    <Widgets.BpdAutoCompleteWidget
      {...componentProps}
      {...{
        allowFreeText: true,
        options:
          isLoading || isFetching
            ? [{ label: 'Loading...', value: '', disabled: true }]
            : map(data ?? [], (counterParty: string) => ({
                label: counterParty,
                value: counterParty,
              })),
        onSelect: handleSelectOption,
        onChange,
        filterOption: () => true,
      }}
    />
  )
}

export default CounterPartyWidget
