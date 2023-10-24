import { HistoryOutlined } from '@ant-design/icons'
import { BpdIcon } from '@bpd/bpd-web/shared/ui'
import { ICellRendererParams } from 'ag-grid-community'

const HistoryCellRenderer = (props: {
  params: ICellRendererParams
  handleHistoryModal: (data: Record<string, any>) => void
}) => {
  const { params, handleHistoryModal } = props
  const { data } = params

  if (data) {
    return (
      <BpdIcon
        icon={<HistoryOutlined />}
        onClick={() => handleHistoryModal(data)}
      />
    )
  }
  return null
}

export default HistoryCellRenderer
