import { FC } from 'react'
import { generatePath } from 'react-router-dom'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { Box, Modal, Stack } from '@gic/battlefield-ui-pack'
import { BASE_URL } from '@bpd/bpd-web/shared/store'
import { ENDPOINTS } from '@bpd/mv-irr/shared/data-access'
import { useBpAuth } from '@bpd/auth-adfs-oidc'
import FileUpload from '../FileUpload'
import Notes from '../Notes'
import { ATLAS_CF_GUIDE_LINK, MESSAGE } from '../../constants'

export interface RecategorizedUploadModalProps {
  onCloseModal: () => void
  fiscalYear: string
  team: string
  projId: string
}

const StyledBody = withTheme(Stack)(({ theme }) => ({
  flexDirection: 'column',
  gap: theme.spacing(2),
}))

const RecategorizedUploadModal: FC<RecategorizedUploadModalProps> = (props) => {
  const { onCloseModal, fiscalYear, team, projId } = props
  const { token = '' } = useBpAuth()

  const msg = (
    <Box>
      To split an ATLAS CF,{' '}
      <a href={ATLAS_CF_GUIDE_LINK} target="_blank" rel="noreferrer">
        {' '}
        follow this guide and upload new CFs instead{' '}
      </a>
    </Box>
  )

  return (
    <Modal
      visible
      destroyOnClose
      disableFooter
      width={500}
      bodyStyle={{ minHeight: 500 }}
      title="Recategorize ATLAS CFs"
      onCancel={onCloseModal}
    >
      <StyledBody>
        <Notes list={[MESSAGE.UPLOAD_CF_NOTE, msg]} />

        <FileUpload
          scope={`${projId} Recategorize ATLAS CFs Upload`}
          templateDownloadUrl={generatePath(
            `${BASE_URL}/${ENDPOINTS.PROJECT.CATEGORY_TEMPLATE}`,
            { team, fiscalYear, projId }
          )}
          fileUploadUrl={generatePath(
            `${BASE_URL}/${ENDPOINTS.PROJECT.CATEGORY_UPLOAD}`,
            { team, fiscalYear, projId }
          )}
          token={token}
          onCloseModal={onCloseModal}
          onUploadSuccess={null}
        />
      </StyledBody>
    </Modal>
  )
}

export default RecategorizedUploadModal
