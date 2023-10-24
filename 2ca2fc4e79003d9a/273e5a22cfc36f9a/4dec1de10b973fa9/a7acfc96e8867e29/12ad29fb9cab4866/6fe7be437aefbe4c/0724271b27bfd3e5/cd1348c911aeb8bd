import { FC, ReactElement } from 'react'
import { BpdLink } from '@bpd/bpd-web/shared/ui'
import { DownloadOutlined } from '@ant-design/icons'

export interface DownloadButtonProps {
    title?: string,
    startIcon?: ReactElement
    downloadTitle?: string
    downloadUrl: string
}

const DownloadButton: FC<DownloadButtonProps> = (props) => {
  const { title, startIcon, downloadTitle, downloadUrl } = props  

  return (
    <BpdLink
      title={title ?? 'Download'}
      startIcon={startIcon ?? <DownloadOutlined />}
      href={downloadUrl}
      download={`${downloadTitle ?? 'data'}.csv`}
      style={{ textDecoration: 'none' }}
    />
  )
}

export default DownloadButton
