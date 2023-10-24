import { BpdHorizontalDivider, BpdLink } from '@bpd/bpd-web/shared/ui'
import { ATTACHMENT_URL } from '@bpd/esg-ade-portal/shared/data-access'
import { Typography } from '@gic/battlefield-ui-pack'
import { isArray, isEmpty, map } from 'lodash'
import { FC } from 'react'

interface AttachmentEntryProps {
  attachments: string[]
  title: string
}

const AttachmentEntry: FC<AttachmentEntryProps> = ({ attachments, title }) => {
  if (!isArray(attachments) || isEmpty(attachments)) {
    return null
  }

  return (
    <>
      <Typography variant="h4">{title}</Typography>
      {map(attachments, (attachment) => (
        <BpdLink
          href={`${ATTACHMENT_URL}/${attachment}`}
          target="_blank"
          title={attachment}
          sx={{ justifyContent: 'flex-start' }}
        />
      ))}
      <BpdHorizontalDivider />
    </>
  )
}

export default AttachmentEntry
