import { FC } from 'react'
import { BpdInput, BpdInputProps, FieldProps } from '@bpd/bpd-web/shared/ui'
import { DEAL_SECTORS_TITLE_MAP } from '../../../constants'
import { find, result } from 'lodash'

export interface SectorInputTextWidgetProps extends BpdInputProps, FieldProps {}

const SectorInputTextWidget: FC<SectorInputTextWidgetProps> = ({
  input,
  uiField,
  value,
  ...componentProps
}) => {
  return (
    <BpdInput
      {...componentProps}
      value={result(find(DEAL_SECTORS_TITLE_MAP, { value }), 'label', '')}
    />
  )
}

export default SectorInputTextWidget
