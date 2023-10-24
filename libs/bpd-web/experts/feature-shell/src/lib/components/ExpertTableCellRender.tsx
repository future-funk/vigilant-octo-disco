import { FC } from 'react'
import { map, size } from 'lodash'
import { useAppDispatch, useAppSelector } from '@bpd/bpd-web/shared/store'
import { Stack, Avatar, Typography } from '@gic/battlefield-ui-pack'
import { BpdPopover } from '@bpd/bpd-web/shared/ui'
import { useAppPalette } from '@bpd/bpd-web/shared/theme'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import {
  ExpertType,
  SectorExpert,
} from '@bpd/bpd-web/experts/shared/data-access'
import { ExpertActions, ExpertSelectors } from '../data'
import { getAvatarUrl } from '../utils'
import ExpertPopover from './ExpertPopover'

export interface ExpertTableCellRenderProps {
  experts: ExpertType[]
  viewBy: string
  sector: string
}

const StyledCellTypography = withTheme(Typography)({
  fontWeight: 400,
  cursor: 'pointer',
})

const MAX_CELL_WIDTH = 240

export const ExpertTableCellRender: FC<ExpertTableCellRenderProps> = (
  props
) => {
  const { experts, viewBy, sector } = props

  const selectedExpertId =
    useAppSelector(ExpertSelectors.getSelectedExpertId) || null

  const dispatch = useAppDispatch()
  const palette = useAppPalette()

  const handleSelectedExpert = (expertId: string | null) => {
    dispatch(ExpertActions.setSelectedExpertId(expertId || null))
  }

  const handleHoveredExpert = (expert: SectorExpert) => {
    dispatch(ExpertActions.setHoveredExpert(expert))
  }

  return (
    <Stack sx={{ maxWidth: MAX_CELL_WIDTH }}>
      {map(experts, (expert: ExpertType) => (
        <BpdPopover
          key={`${expert.ntid}-${viewBy}-${sector}`}
          zIndex={10}
          content={<ExpertPopover {...{ ...expert, sector, viewBy }} />}
          overlayInnerStyle={{ borderRadius: '4px' }}
          autoAdjustOverflow
        >
          <Stack
            flexDirection={'row'}
            alignItems={'center'}
            className={
              selectedExpertId === expert.ntid
                ? 'selected-sub-cell'
                : 'sub-cell'
            }
            onMouseEnter={() =>
              handleHoveredExpert({ ...expert, sector, viewBy })
            }
            onClick={() =>
              handleSelectedExpert(
                expert.ntid !== selectedExpertId ? expert.ntid : null
              )
            }
          >
            <Avatar
              size={32}
              sx={{ border: `1px solid ${palette.null.border}` }}
              src={getAvatarUrl(expert.ntid)}
            />
            <StyledCellTypography
              variant="subtitle2"
              sx={{
                textOverflow: 'ellipsis',
                maxWidth: '125px',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }}
            >
              {expert?.name || '-'}
            </StyledCellTypography>
            <StyledCellTypography variant="subtitle2">{`(${
              expert?.deals && size(expert?.deals)
            })`}</StyledCellTypography>
          </Stack>
        </BpdPopover>
      ))}
    </Stack>
  )
}

export default ExpertTableCellRender
