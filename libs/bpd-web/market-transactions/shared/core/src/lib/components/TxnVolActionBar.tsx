import { DownloadOutlined } from '@ant-design/icons'
import {
  BpdLink,
  BpdRadioGroup,
  BpdVerticalDivider,
} from '@bpd/bpd-web/shared/ui'
import { Stack, Typography } from '@gic/battlefield-ui-pack'
import { RadioChangeEvent } from 'antd'
import { FC } from 'react'
import { TXN_VOL_DIMENSION_TYPE_OPTIONS } from '../constants'

interface TxnVolActionBarProps {
  dimension: string
  handleChangeDimension: (event: RadioChangeEvent) => void
  handleClickExport: () => void
}

const TxnVolActionBar: FC<TxnVolActionBarProps> = (props) => {
  const { dimension, handleChangeDimension, handleClickExport } = props

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography variant="body2">Split By :</Typography>
      <BpdRadioGroup
        options={TXN_VOL_DIMENSION_TYPE_OPTIONS}
        optionType="button"
        buttonStyle="solid"
        value={dimension}
        onChange={handleChangeDimension}
      />
      <BpdVerticalDivider />
      <BpdLink
        title="Download"
        startIcon={<DownloadOutlined />}
        onClick={handleClickExport}
        sx={{ height: 28 }}
      />
    </Stack>
  )
}

export default TxnVolActionBar
