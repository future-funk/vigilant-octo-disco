import { QuestionCircleOutlined } from '@ant-design/icons'
import { BpdIcon } from '@bpd/bpd-web/shared/ui'
import { Stack, Tooltip, Typography } from '@gic/battlefield-ui-pack'
import { FC } from 'react'
import DealStaffingTooltip from './DealStaffingTooltip'

export interface DealStaffingHeaderProps {}

const DealStaffingHeader: FC<DealStaffingHeaderProps> = () => {
  return (
    <Stack flexDirection="row" sx={{ gap: 0.5 }} alignItems="center">
      <Typography
        variant="overlineAlt"
        sx={{ my: 0.75 }}
        color="text.subHeading"
      >
        Staffing
      </Typography>
      <Tooltip
        color="white"
        overlayInnerStyle={{
          padding: '16px',
          width: '495px',
        }}
        title={<DealStaffingTooltip />}
      >
        <BpdIcon
          sx={{ color: 'text.link' }}
          icon={<QuestionCircleOutlined />}
        />
      </Tooltip>
      <Typography
        variant="body3"
        sx={{
          textTransform: 'none',
          lineHeight: 20 / 12,
          color: 'text.subHeading',
        }}
      >
        (Members will be notified of deal creation)
      </Typography>
    </Stack>
  )
}

export default DealStaffingHeader
