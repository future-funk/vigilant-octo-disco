import { ROUTES } from '@bpd/bpd-web/shared/config'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { BpdModal } from '@bpd/bpd-web/shared/ui'
import { isNil } from 'lodash'
import { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getResearchById } from '../../utils/getResearchById'
import ResearchContentEntry from './ResearchContentEntry'

const StyledModel = withTheme(BpdModal)({
  height: '400px',
  width: 'auto !important',
  '&&& .ant-modal-body': {
    padding: '16px 24px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  '&&& .ant-modal-close-x': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '&&& .ant-modal-content': {
    backgroundColor: 'background.modal',
  },
  '&&& .ant-modal-header': {
    backgroundColor: 'background.modal',
  },
})

const ResearchModal: FC = () => {
  const navigate = useNavigate()

  const { id: selectedResearchId } = useParams()
  const selectedResearch = getResearchById(selectedResearchId)

  const { executive_summary } = selectedResearch || {}

  const handleCancel = () => {
    navigate(ROUTES.KNOWLEDGE.ESG_ADE_PORTAL.RESEARCH)
  }

  if (isNil(selectedResearch)) {
    return null
  }

  return (
    <StyledModel
      visible
      title={'Executive Summary'}
      onCancel={handleCancel}
      disableFooter
      sx={{ maxWidth: { xl: '60%', sm: '700px' } }}
    >
      <ResearchContentEntry {...{ title: '', values: executive_summary }} />
    </StyledModel>
  )
}

export default ResearchModal
