import { FC } from 'react'
import { size } from 'lodash'
import pluralize from 'pluralize'
import { Stack, Typography } from '@gic/battlefield-ui-pack'
import {
  FlagOutlined,
  FileDoneOutlined,
  BankOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { useAppDispatch } from '@bpd/bpd-web/shared/store'
import { SectorExpert } from '@bpd/bpd-web/experts/shared/data-access'
import { BpdHorizontalDivider, BpdLink, BpdIcon } from '@bpd/bpd-web/shared/ui'
import { ExpertActions } from '../data'

export interface ExpertPopoverProps extends SectorExpert {}

const StyledPopoverWrapper = withTheme(Stack)({
  flexDirection: 'row',
  gap: '10px',
  alignItems: 'center',
})

const ExpertPopover: FC<ExpertPopoverProps> = (props) => {
  const { name, title, division, sector, viewBy, deals } = props

  const dispatch = useAppDispatch()

  const handleSeeMore = () => {
    dispatch(ExpertActions.setIsDealModalOpen(true))
  }

  return (
    <Stack p={2} sx={{ gap: '8px' }}>
      <Stack>
        <Typography variant="subtitle2" sx={{ paddingBottom: '4px' }}>
          {name}
        </Typography>
        <Stack>
          <Typography variant="body2">{title}</Typography>
          <Typography variant="body2" sx={{ color: 'null.main' }}>
            {division}
          </Typography>
        </Stack>
      </Stack>
      <BpdHorizontalDivider />
      <StyledPopoverWrapper>
        <BankOutlined />
        <Typography variant="body2" sx={{ color: 'null.main' }}>
          {sector}
        </Typography>
      </StyledPopoverWrapper>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ gap: '30px' }}
      >
        <StyledPopoverWrapper>
          <FlagOutlined />
          <Typography variant="body2" sx={{ color: 'null.main' }}>
            {viewBy}
          </Typography>
        </StyledPopoverWrapper>
        <StyledPopoverWrapper>
          {size(deals) > 0 && (
            <BpdLink
              title={pluralize('Deal', size(deals), true)}
              onClick={handleSeeMore}
              startIcon={<BpdIcon icon={<FileDoneOutlined />} />}
              endIcon={<BpdIcon icon={<ArrowRightOutlined />} />}
              sx={{
                gap: '4px',
              }}
            />
          )}
        </StyledPopoverWrapper>
      </Stack>
    </Stack>
  )
}

export default ExpertPopover
