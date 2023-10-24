import { withTheme } from '@bpd/bpd-web/shared/theme'
import { BpdIcon } from '@bpd/bpd-web/shared/ui'
import { Typography, TypographyProps } from '@gic/battlefield-ui-pack'
import { FC, ReactElement } from 'react'

export interface WorkspaceTitleProps extends TypographyProps {
  title: string
  icon: ReactElement
}

const StyledBpdIcon = withTheme(BpdIcon)(({ theme }) => {
  return {
    height: '35px',
    width: '35px',
    marginRight: '8px',
    background: theme.palette.primary.background,
    fontSize: '24px',
    color: theme.palette.primary.main,
    borderRadius: '50%',
  }
})

export const WorkspaceTitle: FC<WorkspaceTitleProps> = (props) => {
  const { title, icon } = props
  return (
    <Typography variant="subtitle1" startIcon={<StyledBpdIcon icon={icon} />}>
      {title}
    </Typography>
  )
}

export default WorkspaceTitle
