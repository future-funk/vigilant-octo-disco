import { ROUTES } from '@bpd/bpd-web/shared/config'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { BpdModal } from '@bpd/bpd-web/shared/ui'
import { CaseStudyListItem } from '@bpd/esg-ade-portal/shared/data-access'
import { isNil } from 'lodash'
import { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getCaseStudyById } from '../../utils'
import ContentEntry from '../ContentEntry'

const StyledModal = withTheme(BpdModal)({
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

  const { id: selectedCaseStudyId } = useParams()

  const selectedCaseStudy = getCaseStudyById(
    selectedCaseStudyId
  ) as CaseStudyListItem
  const { name, summary, angle, action, involvement } = selectedCaseStudy || {}

  const handleCancel = () => {
    navigate(ROUTES.KNOWLEDGE.ESG_ADE_PORTAL.CASE_STUDY)
  }

  if (isNil(selectedCaseStudy)) {
    return null
  }

  return (
    <StyledModal
      visible
      title={name}
      onCancel={handleCancel}
      disableFooter
      sx={{ maxWidth: { xl: '60%', sm: '700px' } }}
    >
      <ContentEntry
        {...{ title: 'Description of Investment', values: [summary] }}
      />
      <ContentEntry {...{ title: 'Sustainability Angle', values: angle }} />
      <ContentEntry
        {...{
          title:
            'How were sustainability and climate change risks taken into consideration in the investment process?',
          values: action,
        }}
      />
      <ContentEntry
        {...{
          title:
            'How has GIC’s involvement (and sustainability approach) created value for the company?',
          values: involvement,
        }}
      />
    </StyledModal>
  )
}

export default ResearchModal
