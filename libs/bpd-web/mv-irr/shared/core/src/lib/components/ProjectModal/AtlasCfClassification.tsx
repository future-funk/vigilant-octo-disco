import { DownloadOutlined } from '@ant-design/icons'
import { BpdLink } from '@bpd/bpd-web/shared/ui'
import { ENDPOINTS } from '@bpd/mv-irr/shared/data-access'
import { useDownload } from '@bpd/bpd-web/shared/hooks'
import { BASE_URL } from '@bpd/bpd-web/shared/store'
import { withToast } from '@bpd/vendors/react-hot-toast'

interface AtlasCfClassificationProps {}

const AtlasCfClassification: React.FC<AtlasCfClassificationProps> = () => {
  const [download, { isFetching: isFetchingDownload }] = useDownload()

  const handleExport = async (props: {
    action: () => Promise<unknown>
    messages: { loading: string; success: string }
  }) => {
    const { action, messages } = props
    const { loading, success } = messages

    withToast({ action, loading, success })
  }

  const handleClickDownload = () => {
    const filename = `ATLAS CF Classification.xlsx`
    handleExport({
      messages: { loading: 'Downloading', success: 'Download successful' },
      action: () =>
        download({
          filename,
          url: `${BASE_URL}/${ENDPOINTS.META.ATLAS_CF_CLASSIFICATION}`,
        }),
    })
  }

  return (
    <BpdLink
      startIcon={<DownloadOutlined />}
      title="Download ATLAS CF Classification"
      onClick={handleClickDownload}
      disabled={isFetchingDownload}
      sx={{ height: 28 }}
    ></BpdLink>
  )
}

export default AtlasCfClassification
