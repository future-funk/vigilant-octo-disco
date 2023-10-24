import { FC } from 'react'
import { Chip, Stack, Typography } from '@gic/battlefield-ui-pack'
import { RadioChangeEvent } from 'antd'
import { ProjectSummary } from '@bpd/mv-irr/shared/data-access'
import {
  BpdLink,
  BpdRadioGroup,
  BpdVerticalDivider,
} from '@bpd/bpd-web/shared/ui'
import { BLUEPRINT_ENDPOINTS } from '@bpd/bpd-web/shared/store'
import { CURRENCY } from '../../constants'
import { chain } from 'lodash'
import { DatabaseOutlined, SyncOutlined } from '@ant-design/icons'
import { useAppTheme } from '@bpd/bpd-web/shared/theme'

interface ProjectTitleProps {
  selectedProject: ProjectSummary
  activeCurrency: string
  handleChangeCurrency: (e: RadioChangeEvent) => void
  refreshProject: () => void
}

const ProjectTitle: FC<ProjectTitleProps> = (props) => {
  const { palette } = useAppTheme()
  const {
    selectedProject: { projId, projName },
    activeCurrency,
    handleChangeCurrency,
    refreshProject,
  } = props

  const REKI_LINK = `${BLUEPRINT_ENDPOINTS.REKI_URL}/home/p/${projId}/factsheet`

  return (
    <Stack flex={1} direction="row">
      <Stack direction="row" spacing={3} flex={1} alignItems="flex-end">
        <Chip
          title={projId}
          size={'medium'}
          variant="outlined"
          sx={{
            color: palette.chip.purple.text,
            borderColor: palette.chip.purple.border,
            background: palette.chip.purple.background,
            '& .battlefield-typography-root': {
              fontSize: 16,
            },
          }}
        />

        <Typography variant="h3">{projName}</Typography>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
        spacing={2}
        mr={3}
        sx={{ fontSize: 14, fontWeight: 400 }}
      >
        <BpdRadioGroup
          options={chain(CURRENCY)
            .values()
            .map((currrency) => ({ label: currrency, value: currrency }))
            .value()}
          optionType="button"
          buttonStyle="solid"
          value={activeCurrency}
          onChange={handleChangeCurrency}
        />
        <BpdVerticalDivider />
        <BpdLink
          href={REKI_LINK}
          target="_blank"
          title="Open REKI"
          startIcon={<DatabaseOutlined />}
        />

        <BpdVerticalDivider />

        <BpdLink
          title="Refresh"
          startIcon={<SyncOutlined />}
          onClick={() => refreshProject()}
        />
      </Stack>
    </Stack>
  )
}
export default ProjectTitle
