import { FC } from 'react'
import { generatePath } from 'react-router-dom'
import { Modal, Stack } from '@gic/battlefield-ui-pack'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { ENDPOINTS } from '@bpd/mv-irr/shared/data-access'
import { BASE_URL } from '@bpd/bpd-web/shared/store'
import { useBpAuth } from '@bpd/auth-adfs-oidc'
import { MESSAGE } from '../constants'
import FileUpload from './FileUpload'
import Notes from './Notes'

export interface MvUploadModalProps {
  onCloseModal: () => void
  fiscalYear: string
  team: string
}

const StyledBody = withTheme(Stack)(({ theme }) => ({
  flexDirection: 'column',
  gap: theme.spacing(2),
}))

const MvUploadModal: FC<MvUploadModalProps> = (props) => {
  const { onCloseModal, fiscalYear, team } = props
  const { token = '' } = useBpAuth()

  return (
    <Modal
      visible
      destroyOnClose
      disableFooter
      width={500}
      bodyStyle={{ minHeight: 500 }}
      title="Upload Market Values"
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
          scope="mv"
          templateDownloadUrl={generatePath(
            `${BASE_URL}/${ENDPOINTS.MVIRR.MV_TEMPLATE}`,
            { team, fiscalYear }
          )}
          fileUploadUrl={generatePath(
            `${BASE_URL}/${ENDPOINTS.MVIRR.MV_UPLOAD}`,
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

export default MvUploadModal
