import { FC } from 'react'
import { generatePath } from 'react-router-dom'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { Modal, Stack } from '@gic/battlefield-ui-pack'
import { BASE_URL } from '@bpd/bpd-web/shared/store'
import { ENDPOINTS } from '@bpd/mv-irr/shared/data-access'
import { useBpAuth } from '@bpd/auth-adfs-oidc'
import { getCurrentFiscalYear } from '@bpd/utils/fiscal-year'
import FileUpload from '../FileUpload'
import Notes from '../Notes'
import { MESSAGE } from '../../constants'

export interface CashflowUploadModalProps {
  onCloseModal: () => void
  fiscalYear: string
  team: string
  projId: string
}

const StyledBody = withTheme(Stack)(({ theme }) => ({
  flexDirection: 'column',
  gap: theme.spacing(2),
}))

const CashflowUploadModal: FC<CashflowUploadModalProps> = (props) => {
  const { onCloseModal, fiscalYear, team, projId } = props
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
          scope={`${projId} - FY${getCurrentFiscalYear(
            new Date(fiscalYear)
          )} CF Upload`}
          templateDownloadUrl={generatePath(
            `${BASE_URL}/${ENDPOINTS.PROJECT.CASHFLOW_TEMPLATE}`,
            { team, fiscalYear, projId }
          )}
          fileUploadUrl={generatePath(
            `${BASE_URL}/${ENDPOINTS.PROJECT.CASHFLOW_UPLOAD}`,
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

export default CashflowUploadModal
