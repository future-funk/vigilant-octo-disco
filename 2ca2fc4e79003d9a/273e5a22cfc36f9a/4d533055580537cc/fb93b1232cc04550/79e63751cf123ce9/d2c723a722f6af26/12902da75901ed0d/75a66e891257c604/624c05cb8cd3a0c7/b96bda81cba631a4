import { TableauIcon } from '@bpd/bpd-web/shared/public'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { BpdIcon, BpdTypographyCardTitle } from '@bpd/bpd-web/shared/ui'
import { Stack } from '@gic/battlefield-ui-pack'
import { AnalyticsApp } from '../../types'

const StyledStack = withTheme(Stack)(({ theme }) => ({
  borderRadius: '4px',
  '&:hover': {
    border: `1px solid ${theme.palette.primary.hover}`,
    boxShadow: `0px 0px 4px 0px ${theme.palette.primary.hover}`,
    cursor: 'pointer',
  },
}))

const AnalyticsAppCard = (props: AnalyticsApp) => {
  const { href, title } = props

  return (
    <a href={href} target="_blank" rel="noreferrer">
      <StyledStack
        bgcolor="common.white"
        alignItems="center"
        direction="row"
        sx={{ p: 3 }}
        spacing={2}
        height={70}
      >
        <BpdIcon icon={<TableauIcon />} sx={{ width: 28, height: 28 }} />
        <BpdTypographyCardTitle variant="subtitle1">
          {title}
        </BpdTypographyCardTitle>
      </StyledStack>
    </a>
  )
}

export default AnalyticsAppCard
