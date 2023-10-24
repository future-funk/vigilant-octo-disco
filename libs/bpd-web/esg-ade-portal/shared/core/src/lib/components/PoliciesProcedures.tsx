import { withTheme } from '@bpd/bpd-web/shared/theme'
import { Stack } from '@gic/battlefield-ui-pack'

const StyledPoliciesProceduresWrapper = withTheme(Stack)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-center',
  flexWrap: 'wrap',
  gap: 5,
  overflow: 'hidden',
  height: 'calc(100vh - 134px)',
})

const StyledIframeWrapper = withTheme(Stack)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-center',
})

const PoliciesProcedures = () => (
  <StyledPoliciesProceduresWrapper>
    <StyledIframeWrapper>
      <iframe
        title="Policies And Procedures"
        src="https://gicsingapore.sharepoint.com/sites/REPortal/SitePages/Pre-DQM-Due-Diligence-Processes---Sustainability.aspx"
        frameBorder="0"
        scrolling="no"
        height={document.documentElement.clientHeight - 114}
        width={document.documentElement.clientWidth}
      />
    </StyledIframeWrapper>
  </StyledPoliciesProceduresWrapper>
)

export default PoliciesProcedures
