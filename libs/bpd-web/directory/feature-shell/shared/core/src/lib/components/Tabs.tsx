import { useGetConfigFromLocation } from '@bpd/bpd-web/shared/data-access'
import { BpdTabs, BpdTabsProps } from '@bpd/bpd-web/shared/ui'
import { FC } from 'react'
import { generatePath, useNavigate } from 'react-router-dom'

export interface TabsProps {
  config: Record<string, BpdTabsProps>
}

const Tabs: FC<TabsProps> = (props) => {
  const { config } = props

  const navigate = useNavigate()

  const tab = useGetConfigFromLocation({ config })

  const handleChangeTab = (path: string) => navigate(generatePath(path))

  return (
    <BpdTabs items={tab?.items ?? []} onChange={handleChangeTab} {...tab} />
  )
}

export default Tabs
