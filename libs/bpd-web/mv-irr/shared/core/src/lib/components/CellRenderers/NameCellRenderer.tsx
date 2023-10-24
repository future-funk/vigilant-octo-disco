import { BpdLink } from '@bpd/bpd-web/shared/ui'
import { Stack } from '@gic/battlefield-ui-pack'
import { ICellRendererParams } from 'ag-grid-community'

const NameCellRenderer = (props: {
  params: ICellRendererParams
  handleProjModal: (data: Record<string, any>) => void
}) => {
  const { params, handleProjModal } = props
  const { data, value } = params

  if (data && value) {
    return (
      <Stack
        sx={{
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          '& , & > a ,&  p': {
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          },
        }}
      >
        <BpdLink title={value} onClick={() => handleProjModal(data)} />
      </Stack>
    )
  }
  return null
}

export default NameCellRenderer
