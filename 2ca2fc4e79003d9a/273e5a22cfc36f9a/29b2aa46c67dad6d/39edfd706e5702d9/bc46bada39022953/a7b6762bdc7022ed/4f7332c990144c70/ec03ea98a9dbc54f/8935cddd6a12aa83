import { BpdTabs, BpdTabsProps } from '@bpd/bpd-web/shared/ui'
import { FC } from 'react'
import { generatePath, useNavigate } from 'react-router-dom'

export interface TabsProps extends BpdTabsProps {}

const Tabs: FC<TabsProps> = (props) => {
  const { items = [], ...rest } = props

  const navigate = useNavigate()

  const handleChangeTab = (path: string) => {
    navigate(generatePath(path))
  }

  return <BpdTabs items={items} onChange={handleChangeTab} {...rest} />
}

export default Tabs
