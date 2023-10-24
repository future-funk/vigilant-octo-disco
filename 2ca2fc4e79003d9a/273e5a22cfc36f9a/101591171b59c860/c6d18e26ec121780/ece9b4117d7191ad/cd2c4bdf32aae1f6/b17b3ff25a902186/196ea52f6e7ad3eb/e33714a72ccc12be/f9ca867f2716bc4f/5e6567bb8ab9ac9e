import { FC, useEffect } from 'react'
import { BpdSelect, BpdSelectProps, FieldProps } from '@bpd/bpd-web/shared/ui'
import { useWatch } from 'react-hook-form'
import { chain, map, toPath } from 'lodash'
import { CITY_LIST_BY_COUNTY } from '@bpd/ui/constants'

export interface CityFieldWidgetProps extends BpdSelectProps, FieldProps {}

const CityFieldWidget: FC<CityFieldWidgetProps> = ({
  input: { arrayIndices, name },
  uiField,
  disabled,
  onChange,
  ...componentProps
}) => {
  const paths = toPath(name)

  const country = useWatch({
    name: chain(paths.join('.'))
      .replace(/\.(\d+)\./g, '[$1].')
      .replace(/\.(\d+)$/, '[$1]')
      .replace(/\.city$/, '.country')
      .value(),
  }) as string

  const items = map(CITY_LIST_BY_COUNTY[country], (city) => ({
    key: city,
    label: city,
    value: city,
  }))

  useEffect(() => {
    onChange?.(null, [])
  }, [disabled])

  return <BpdSelect {...componentProps} {...{ items, disabled, onChange }} />
}

export default CityFieldWidget
