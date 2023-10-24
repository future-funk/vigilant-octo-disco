import { FC } from 'react'
import { find, result } from 'lodash'
import { useWatch } from 'react-hook-form'
import { Typography } from '@gic/battlefield-ui-pack'
import {
  BpdInputProps,
  FieldProps,
  utilReplaceArrKey,
} from '@bpd/bpd-web/shared/ui'
import { DEAL_SECTORS_TITLE_MAP } from '../../../constants'
import { formatPercent } from '@bpd/utils/formatters'
import { useAppSpacing } from '@bpd/bpd-web/shared/theme'

export interface SectorLabelWidgetProps extends BpdInputProps, FieldProps {
  uiField: FieldProps['uiField'] & { componentProps: { name: string } }
}

const SectorLabelWidget: FC<SectorLabelWidgetProps> = ({
  input,
  uiField: {
    componentProps: { name },
  },
}) => {
  const { arrayIndices } = input

  const spacing = useAppSpacing()

  const replacedKey = utilReplaceArrKey({ path: name!, arrayIndices })

  const breakdownItem: { item: string; itemAumPct: number } = useWatch({
    name: replacedKey,
  })

  return (
    <Typography as="span" sx={{ fontSize: spacing(1.5) }}>{`${result(
      find(DEAL_SECTORS_TITLE_MAP, { value: breakdownItem.item }),
      'label',
      ''
    )}(${formatPercent(breakdownItem.itemAumPct)})`}</Typography>
  )
}

export default SectorLabelWidget
