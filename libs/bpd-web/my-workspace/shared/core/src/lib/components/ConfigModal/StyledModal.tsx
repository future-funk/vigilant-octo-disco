import { withTheme } from '@bpd/bpd-web/shared/theme'
import { Modal } from '@gic/battlefield-ui-pack'

const StyledModal = withTheme(Modal)(({ theme }) => ({
  '&&& .ant-modal-content': {
    backgroundColor: theme.palette.background.modal,
  },
  '&&& .ant-modal-header': {
    backgroundColor: theme.palette.background.modal,
  },
  '&&& .ant-list-footer': {
    borderTop: '1px solid rgba(0, 0, 0, 0.06)',
  },
}))

export default StyledModal
