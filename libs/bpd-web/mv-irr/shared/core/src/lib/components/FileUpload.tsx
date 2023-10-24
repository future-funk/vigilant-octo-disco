import { Button } from '@gic/battlefield-ui-pack'
import { FC } from 'react'
import { useAppTheme, withTheme } from '@bpd/bpd-web/shared/theme'
import { Stack, Typography } from '@gic/battlefield-ui-pack'
import Dragger from 'antd/lib/upload/Dragger'
import { EmptyIcon } from '@bpd/bpd-web/shared/public'
import { BpdFormActions, BpdIcon } from '@bpd/bpd-web/shared/ui'
import { DownloadOutlined } from '@ant-design/icons'
import { useDownload } from '@bpd/bpd-web/shared/hooks'
import { isEqual, isNil, noop } from 'lodash'
import toast, { ToastOptions } from 'react-hot-toast'

const StyledBody = withTheme(Stack)(({ theme }) => ({
  flexDirection: 'column',
  gap: theme.spacing(2),
}))

const StyledDragger = withTheme(Dragger)(({ theme }) => ({
  '&&& .ant-upload': {
    padding: 0,
  },
}))

const StyledButton = withTheme(Button)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  margin: '0 auto',
  gap: theme.spacing(1),
  color: theme.palette.primary.main,
  backgroundColor: 'transparent',
}))

const enum UploadStatus {
  Done = 'done',
  Error = 'error',
  Uploading = 'uploading',
}

const commonToastOption: ToastOptions = {
  position: 'top-right',
}

const displayToastFromStatus = (status?: string) => {
  if (isNil(status)) return
  switch (status) {
    case UploadStatus.Done:
      toast.success('File successfully uploaded!', commonToastOption)
      break
    case UploadStatus.Error:
      toast.error('File uploaded failed.', commonToastOption)
      break
    case UploadStatus.Uploading:
    default:
  }
}

export interface FileUploadProps {
  templateDownloadUrl: string
  fileUploadUrl: string
  token: string
  scope: string
  onUploadSuccess?: VoidFunction
  onCloseModal: () => void
}

const FileUpload: FC<FileUploadProps> = (props) => {
  const {
    templateDownloadUrl,
    fileUploadUrl,
    token,
    scope,
    onUploadSuccess = noop,
    onCloseModal,
  } = props

  const { palette } = useAppTheme()
  const [download] = useDownload()

  const handleClickDownloadTemplate = () => {
    download({
      filename: `${scope} Template.xlsx`,
      url: templateDownloadUrl,
    })
  }

  return (
    <StyledBody>
      <StyledDragger
        action={fileUploadUrl}
        accept=".xlsx"
        headers={{ Authorization: `Bearer ${token}` }}
        onChange={(props) => {
          const { file } = props ?? {}
          const { status } = file
          displayToastFromStatus(status)

          // Close modal after upload is completed
          if (isEqual(status, UploadStatus.Done)) {
            onUploadSuccess && onUploadSuccess()
            onCloseModal() //close the modal
          }
        }}
        style={{
          border: `1px dashed ${palette.primary.main}`,
          background: palette.background.drag,
          borderRadius: '4px',
        }}
      >
        <Stack
          spacing={1}
          py={4}
          px={2}
          alignItems="center"
          justifyContent="center"
        >
          <EmptyIcon />
          <Typography variant="body2" sx={{ color: palette.primary.main }}>
            Click here to upload your excel file
          </Typography>
        </Stack>
      </StyledDragger>
      <Stack alignItems="center">
        <StyledButton
          disableBorder
          icon={<BpdIcon icon={<DownloadOutlined />} />}
          onClick={handleClickDownloadTemplate}
        >
          Download Template
        </StyledButton>
        <Typography variant="body2">
          (This template includes existing entries)
        </Typography>
      </Stack>
      <BpdFormActions cancelButtonProps={{ onClick: onCloseModal }} />
    </StyledBody>
  )
}

export default FileUpload
