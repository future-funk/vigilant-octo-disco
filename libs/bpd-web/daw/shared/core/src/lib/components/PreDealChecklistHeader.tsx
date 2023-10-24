import { QuestionCircleOutlined } from '@ant-design/icons'
import { BpdIcon } from '@bpd/bpd-web/shared/ui'
import { Stack, Tooltip, Typography } from '@gic/battlefield-ui-pack'

export interface PreDealChecklistHeaderProps {}
const PreDealChecklistHeader = () => {
  return (
    <Stack flexDirection="row" spacing={0.5} alignItems="center">
      <Typography
        variant="overlineAlt"
        sx={{ my: 0.75 }}
        color="text.subHeading"
      >
        Predeal Checklist
      </Typography>
      <Tooltip title="No Checklist Template Available">
        <BpdIcon
          sx={{ color: 'text.link' }}
          icon={<QuestionCircleOutlined />}
        />
      </Tooltip>
    </Stack>
  )
}

export default PreDealChecklistHeader
