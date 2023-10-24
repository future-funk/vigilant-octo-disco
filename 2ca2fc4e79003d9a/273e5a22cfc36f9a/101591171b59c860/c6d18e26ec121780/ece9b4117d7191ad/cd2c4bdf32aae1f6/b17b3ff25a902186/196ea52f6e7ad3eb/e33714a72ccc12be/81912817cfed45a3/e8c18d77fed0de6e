import { FC, useEffect } from 'react'
import { BpdSelect, BpdSelectProps, FieldProps } from '@bpd/bpd-web/shared/ui'
import { useWatch } from 'react-hook-form'
import { chain, map, toPath } from 'lodash'
import { SUB_SECTORS_BY_SECTOR } from '@bpd/ui/constants'

export interface SubSectorFieldWidgetProps extends BpdSelectProps, FieldProps {}

const SubSectorFieldWidget: FC<SubSectorFieldWidgetProps> = ({
  input: { arrayIndices, name },
  uiField,
  disabled,
  onChange,
  ...componentProps
}) => {
  const paths = toPath(name)

  const sector = useWatch({
    name: chain(paths.join('.'))
      .replace(/\.(\d+)\./g, '[$1].')
      .replace(/\.(\d+)$/, '[$1]')
      .replace(/\.subSector$/, '.sector')
      .value(),
  })

  const items = map(SUB_SECTORS_BY_SECTOR[sector], (subSector) => ({
    key: subSector,
    label: subSector,
    value: subSector,
  }))

  useEffect(() => {
    onChange?.(null, [])
  }, [disabled])

  return <BpdSelect {...componentProps} {...{ items, disabled, onChange }} />
}

export default SubSectorFieldWidget
