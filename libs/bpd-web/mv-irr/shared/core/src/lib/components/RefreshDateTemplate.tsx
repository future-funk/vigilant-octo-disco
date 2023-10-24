import { formatDateToLocalZone } from '@bpd/utils/formatters'
import { SxProps, Typography } from '@gic/battlefield-ui-pack'

interface RefreshDateTemplateProps {
  lastUpdatedDt: string | null
  sx?: SxProps
}

const RefreshDateTemplate = (props: RefreshDateTemplateProps) => {
  const { lastUpdatedDt, sx = {} } = props
  if (!lastUpdatedDt) {
    return null
  }
  return (
    <Typography variant="body2" sx={sx}>
      Data as of {formatDateToLocalZone(lastUpdatedDt, 'DD MMM YYYY hh:mm A')}
    </Typography>
  )
}

export default RefreshDateTemplate
