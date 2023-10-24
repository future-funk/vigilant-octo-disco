import { FC, useState, useMemo, useEffect } from 'react'
import { Card, Stack, Typography } from '@gic/battlefield-ui-pack'
import { MvIrrQueries } from '@bpd/mv-irr/shared/data-access'
import { BpdButton } from '@bpd/bpd-web/shared/ui'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { TextArea } from '@gic/battlefield-ui-pack'
import { formatDateToLocalZone } from '@bpd/utils/formatters'
import { withToast } from '@bpd/vendors/react-hot-toast'

interface ProjectCommentProps {
  fiscalYear: string
  team: string
  projId: string
}

const StyledTextArea = withTheme(TextArea)(({ theme }) => {
  return {
    borderRadius: '4px',
    minHeight: '75px !important',
  }
})

const MAX_LENGTH = 4000
const ProjectComment: FC<ProjectCommentProps> = (props) => {
  const { projId, team, fiscalYear } = props
  const [comment, setComment] = useState('')

  const projectCommentParams = useMemo(
    () => ({
      projId,
      fiscalYear,
      team,
    }),
    [projId, team, fiscalYear]
  )

  const { data } = MvIrrQueries.useGetProjectComment(projectCommentParams)

  const [putComment, { isLoading }] = MvIrrQueries.usePutProjectComment()

  useEffect(() => {
    setComment(data?.comment || '')
  }, [data?.comment])

  const updateInfo = useMemo(() => {
    const { lastUpdateUserName, lastUpdateDt } = data || {}
    if (lastUpdateUserName && lastUpdateDt) {
      const last_Update_Dt = formatDateToLocalZone(
        lastUpdateDt,
        'DD MMM YYYY hh:mm A'
      )

      return `Last updated by ${lastUpdateUserName} - ${last_Update_Dt}`
    }
    return null
  }, [data?.lastUpdateUserName, data?.lastUpdateDt])

  const handleSaveComment = () => {
    withToast({
      action: async () => {
        await putComment({
          url: { projId, fiscalYear, team },
          body: { comment },
        })
      },
      loading: 'Updating comment',
      success: 'Comment has been successfully updated',
    })
  }

  return (
    <Card
      wrapperSx={{ mt: 2 }}
      title="Commentary"
      // @ts-expect-error battlefield needs to update the subtitle to accept ReactElement
      subtitle={<Typography variant="body3">{updateInfo}</Typography>}
      stretch
      divider
      size="small"
      sx={{
        '& .battlefield-card-header  > .MuiBox-root > .MuiBox-root': {
          alignItems: 'flex-end',
        },
      }}
      leftActions={
        <Stack direction="row" spacing={2} alignItems={'center'}>
          <Typography variant="body3">
            {comment.length}/{MAX_LENGTH}
          </Typography>
          <BpdButton
            variant="contained"
            title="Save Commentary"
            color="primary"
            disabled={data?.comment === comment}
            onClick={handleSaveComment}
            loading={isLoading}
          />
        </Stack>
      }
    >
      <StyledTextArea
        maxLength={MAX_LENGTH}
        rows={3}
        placeholder="Enter commentary here..."
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      />
    </Card>
  )
}

export default ProjectComment
