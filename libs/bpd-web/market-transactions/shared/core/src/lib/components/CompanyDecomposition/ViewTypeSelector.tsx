import { BpdRadioGroup } from '@bpd/bpd-web/shared/ui'
import { Stack, Typography } from '@gic/battlefield-ui-pack'
import { RadioChangeEvent } from 'antd'
import { FC } from 'react'
import { DECOMP_VIEW_TYPE_OPTIONS } from '../../constants'

interface ViewTypeSelectorProps {
  viewType: string
  onChangeViewType: (e: RadioChangeEvent) => void
}

const ViewTypeSelector: FC<ViewTypeSelectorProps> = (props) => {
  const { viewType, onChangeViewType } = props

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={1}
    >
      <Typography variant="body2">Summarized View By :</Typography>
      <BpdRadioGroup
        options={DECOMP_VIEW_TYPE_OPTIONS}
        optionType="button"
        buttonStyle="solid"
        value={viewType}
        onChange={onChangeViewType}
      />
    </Stack>
  )
}

export default ViewTypeSelector
