import {
  BpdInputNumberPercentage,
  BpdInputNumberProps,
  FieldProps,
  utilReplaceArrKey,
} from '@bpd/bpd-web/shared/ui'
import { Stack } from '@gic/battlefield-ui-pack'
import { FC } from 'react'
import BreakdownDeleteButton from './BreakdownDeleteButton'

export interface BreakdownInputNumberPercentageProps
  extends BpdInputNumberProps,
    FieldProps {
  breakdownField: string
}

const BreakdownInputNumberPercentage: FC<
  BreakdownInputNumberPercentageProps
> = ({
  input: { name, arrayIndices },
  uiField,
  disabled,
  breakdownField,
  ...componentProps
}) => {
  return (
    <Stack flexDirection={'row'} spacing={1} alignItems="center">
      <BpdInputNumberPercentage {...componentProps} {...{ disabled }} />
      <BreakdownDeleteButton
        {...{
          disabled,
          breakdownField: utilReplaceArrKey({
            path: breakdownField,
            arrayIndices,
          }),
          fieldKey: name,
        }}
      />
    </Stack>
  )
}

export default BreakdownInputNumberPercentage
