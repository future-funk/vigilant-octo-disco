import { BpdButton } from '@bpd/bpd-web/shared/ui'
import { Row } from 'antd'
import { FC } from 'react'

interface FooterProps {
  isLoading: boolean
  handleSaveConfig: () => void
}

const Footer: FC<FooterProps> = (props) => {
  const { isLoading, handleSaveConfig } = props

  return (
    <Row justify="end">
      <BpdButton title="Save" loading={isLoading} onClick={handleSaveConfig} />
    </Row>
  )
}

export default Footer
