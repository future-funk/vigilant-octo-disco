import { MutationReturn } from '@bpd/bpd-web/shared/data-access'
import { useState } from 'react'
import { useBpAuth } from '@bpd/auth-adfs-oidc'

export interface DownloadProps {
  filename: string
  url: string
}

const createLink = (url: string, filename: string) => {
  const a = document.createElement('a')
  a.style.display = 'none'
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  return a
}

const download = async (props: { filename: string; response: Response }) => {
  const { filename, response } = props
  const blob = await response.blob()
  const url = window.URL.createObjectURL(blob)
  createLink(url, filename).click()
  window.URL.revokeObjectURL(url)
}

//ToDo: Need to change this to axios to get more options
const useDownload = (): [
  (props: DownloadProps) => Promise<void>,
  MutationReturn
] => {
  const { token = '' } = useBpAuth()

  const [isError, setIsError] = useState(false)
  const [isFetching, setIsFetching] = useState(false)

  const trigger = async (props: DownloadProps) => {
    const { filename, url } = props
    setIsFetching(true)

    const headers = { Authorization: `Bearer ${token}` }
    const response = await fetch(url, { headers })

    if (response.status >= 300) {
      setIsError(true)
      setIsFetching(false)
      throw Error('Download failed')
    } else {
      download({ filename, response })
      setIsFetching(false)
    }
  }

  return [trigger, { isError, isFetching }]
}

export default useDownload
