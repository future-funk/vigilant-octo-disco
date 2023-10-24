import { FC } from 'react'
import { generatePath } from 'react-router-dom'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { Modal, Stack } from '@gic/battlefield-ui-pack'
import { BASE_URL } from '@bpd/bpd-web/shared/store'
import { ENDPOINTS } from '@bpd/mv-irr/shared/data-access'
import { useBpAuth } from '@bpd/auth-adfs-oidc'
import FileUpload from './FileUpload'
import Notes from './Notes'
import { MESSAGE } from '../constants'

export interface CfUploadModalProps {
  onCloseModal: () => void
  fiscalYear: string
  team: string
}

const StyledBody = withTheme(Stack)(({ theme }) => ({
  flexDirection: 'column',
  gap: theme.spacing(2),
}))

const CfUploadModal: FC<CfUploadModalProps> = (props) => {
  const { onCloseModal, fiscalYear, team } = props
  const { token = '' } = useBpAuth()
  return (
    <Modal
      visible
      destroyOnClose
      disableFooter
      width={500}
      bodyStyle={{ minHeight: 500 }}
      title="Upload Cash Flows"
      onCancel={onCloseModal}
    >
      <StyledBody>
        <Notes
          list={[
            MESSAGE.UPLOAD_FY_NOTE,
            MESSAGE.UPLOAD_CF_NOTE,
            MESSAGE.UPLOAD_REFRESH_NOTE,
          ]}
        />

        <FileUpload
          scope="cf"
          templateDownloadUrl={generatePath(
            `${BASE_URL}/${ENDPOINTS.MVIRR.CASHFLOW_TEMPLATE}`,
            { team, fiscalYear }
          )}
          fileUploadUrl={generatePath(
            `${BASE_URL}/${ENDPOINTS.MVIRR.CASHFLOW_UPLOAD}`,
            { team, fiscalYear }
          )}
          token={token}
          onCloseModal={onCloseModal}
          onUploadSuccess={null}
        />
      </StyledBody>
    </Modal>
  )
}

export default CfUploadModal
