import { generatePath } from 'react-router-dom'
import { DownloadOutlined } from '@ant-design/icons'
import { BpdIcon, BpdLink } from '@bpd/bpd-web/shared/ui'
import { ENDPOINTS } from '@bpd/mv-irr/shared/data-access'
import { withToast } from '@bpd/vendors/react-hot-toast'
import { useDownload } from '@bpd/bpd-web/shared/hooks'
import {
  BASE_URL,
  UiSelectors,
  useAppSelector,
} from '@bpd/bpd-web/shared/store'
import { getCurrentFiscalYear } from '@bpd/utils/fiscal-year'
import { MvIrrSelectors } from '../data'

interface DownloadCashFlowsProps {}

const DownloadCashFlows: React.FC<DownloadCashFlowsProps> = () => {
  const team = useAppSelector(UiSelectors.getTeam)

  const { fiscalYear } = useAppSelector(MvIrrSelectors.getFilters)

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
    const filename = `FY${getCurrentFiscalYear(
      new Date(fiscalYear)
    )} IRR Cashflows.xlsx`
    handleExport({
      messages: { loading: 'Downloading', success: 'Download successful' },
      action: () =>
        download({
          filename,
          url: generatePath(
            `${BASE_URL}/${ENDPOINTS.MVIRR.CASHFLOW_DOWNLOAD}`,
            { team, fiscalYear }
          ),
        }),
    })
  }

  return (
    <BpdLink
      startIcon={<BpdIcon mr={0.5} icon={<DownloadOutlined />} />}
      title="Download All Cashflows"
      onClick={handleClickDownload}
      disabled={isFetchingDownload}
    ></BpdLink>
  )
}

export default DownloadCashFlows
