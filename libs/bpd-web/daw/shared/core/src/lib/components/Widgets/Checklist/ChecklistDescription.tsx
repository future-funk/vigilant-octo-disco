import { FC } from 'react'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { Typography } from '@gic/battlefield-ui-pack'
import { parseString } from '@bpd/vendors/html-react-parser'
import { FieldProps } from '@bpd/bpd-web/shared/ui'

export interface ChecklistDescription extends FieldProps {
  value: string
}

const StyledTypography = withTheme(Typography)(({ theme }) => ({
  '& p': {
    margin: 0,
  },
  '& a': {
    color: theme.palette.text.link,
  },
}))

const ChecklistDescription: FC<ChecklistDescription> = ({
  value,
  input,
  uiField,
}) => {
  return (
    <StyledTypography variant="custom" sx={{ color: 'text.secondary' }}>
      {parseString(value)}
    </StyledTypography>
  )
}

export default ChecklistDescription
