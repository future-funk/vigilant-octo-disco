import { FC } from 'react'
import { BASE_URL } from '@bpd/bpd-web/shared/store'
import { Stack } from '@gic/battlefield-ui-pack'
import { DownloadOutlined } from '@ant-design/icons'
import { BpdLink } from '@bpd/bpd-web/shared/ui'
import { withToast } from '@bpd/vendors/react-hot-toast'
import { useDownload } from '../hooks'
import { EXPORT_EXCEL_URL } from '../constants'


interface DownloadButtonProps {
  directoryIds: string
}

const DownloadButton: FC<DownloadButtonProps> = (props) => {
  const { directoryIds } = props
  const [download, { isFetching }] = useDownload()

  const handleExport = async (props: {
    action: () => Promise<unknown>
    messages: { loading: string; success: string }
  }) => {
    const { action, messages } = props
    const { loading, success } = messages

    withToast({ action, loading, success })
  }

  const handleClickDownload = () => {
    const queryParams = directoryIds
    if (!queryParams) return

    handleExport({
      messages: { loading: 'Downloading', success: 'Download successful' },
      action: () =>
        download({
          filename: 'cn_logistics',
          url: `${BASE_URL}${EXPORT_EXCEL_URL}?ids=${queryParams}`,
        }),
    })
  }

  return (
    <Stack direction="row" spacing={2} alignItems="center" px={1}>
      <BpdLink
        title="Download"
        startIcon={<DownloadOutlined />}
        onClick={() => handleClickDownload()}
        disabled={isFetching}
      />
    </Stack>
  )
}

export default DownloadButton
