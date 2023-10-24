import { FC } from 'react'
import { Stack } from '@gic/battlefield-ui-pack'
import { BpdLink } from '@bpd/bpd-web/shared/ui'
import { DownloadOutlined } from '@ant-design/icons'

interface InvtSocActionBarProps {
  handleClickExport: () => void
}

const InvtSocActionBar: FC<InvtSocActionBarProps> = (props) => {
  const { handleClickExport } = props

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <BpdLink
        title="Download"
        startIcon={<DownloadOutlined />}
        onClick={handleClickExport}
        sx={{ height: 28 }}
      />
    </Stack>
  )
}

export default InvtSocActionBar
