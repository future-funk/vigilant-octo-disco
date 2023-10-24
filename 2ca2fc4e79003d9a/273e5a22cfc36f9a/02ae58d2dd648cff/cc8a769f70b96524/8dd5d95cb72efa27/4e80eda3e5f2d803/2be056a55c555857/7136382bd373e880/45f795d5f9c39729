import { find } from 'lodash'
import { Stack, Typography } from '@gic/battlefield-ui-pack'
import { useAppSelector, useAppDispatch } from '@bpd/bpd-web/shared/store'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { BpdModal } from '@bpd/bpd-web/shared/ui'
import { EsgPortalSelectors, EsgPortalActions } from '../data'
import { caseStudyList } from '../configs'

const StyledModal = withTheme(BpdModal)(({ theme }) => ({
  maxWidth: '900px',
  height: '500px',
  width: 'auto !important',
  '&&& .ant-modal-body': {
    padding: '12px 24px 24px',
  },
  '&&& .ant-modal-close-x': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '&&& .ant-modal-content': {
    backgroundColor: theme.palette.background.modal,
  },
  '&&& .ant-modal-header': {
    backgroundColor: theme.palette.background.modal,
  },
}))

const StyledHeader = withTheme(Typography)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.null.borderGold}`,
  color: theme.palette.primary.dark,
}))

const StyledSection = withTheme(Stack)({
  paddingTop: 10,
})

const CardModal = () => {
  const dispatch = useAppDispatch()

  const selectedCaseStudyId = useAppSelector(
    EsgPortalSelectors.getSelectedCaseStudyId
  )
  if (!selectedCaseStudyId) return null

  const { name, address, summary, angle, action, involvement } = find(
    caseStudyList,
    {
      id: selectedCaseStudyId,
    }
  )

  const handleModalClose = () => {
    dispatch(EsgPortalActions.setSelectedCaseStudyId(null))
  }
  return (
    <StyledModal
      visible
      destroyOnClose
      disableFooter
      title={
        <Stack>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="subtitle2">{address}</Typography>
        </Stack>
      }
      onCancel={handleModalClose}
    >
      <Stack>
        <StyledSection>
          <StyledHeader variant="h4">Description of Investment</StyledHeader>
          <Stack mt={1}>{summary}</Stack>
        </StyledSection>
        <StyledSection>
          <StyledHeader variant="h4">Sustainability Angle</StyledHeader>
          <Stack mt={1} dangerouslySetInnerHTML={{ __html: angle }} />
        </StyledSection>
        <StyledSection>
          <StyledHeader variant="h4">
            How were sustainability and climate change risks taken into
            consideration in the investment process?
          </StyledHeader>
          <Stack mt={1} dangerouslySetInnerHTML={{ __html: action }} />
        </StyledSection>
        <StyledSection>
          <StyledHeader variant="h4">
            How has GIC’s involvement (and sustainability approach) created
            value for the company?
          </StyledHeader>
          <Stack mt={1} dangerouslySetInnerHTML={{ __html: involvement }} />
        </StyledSection>
      </Stack>
    </StyledModal>
  )
}
export default CardModal
