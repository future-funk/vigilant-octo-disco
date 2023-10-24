import { BpdTabs, BpdTabsProps } from '@bpd/bpd-web/shared/ui'
import { Tabs as AntTabs } from 'antd'
import { Box } from '@gic/battlefield-ui-pack'
import { FC } from 'react'
import { generatePath, useNavigate } from 'react-router-dom'
import { PerfectScrollbar } from '@bpd/vendors/perfect-scrollbar'
import ReactResizeDetector from 'react-resize-detector'
import { map } from 'lodash'

export interface TabsProps extends BpdTabsProps {}

const Tabs: FC<TabsProps> = (props) => {
  const { items = [], ...rest } = props

  const navigate = useNavigate()

  const handleChangeTab = (path: string) => {
    navigate(generatePath(path))
  }

  return (
    <BpdTabs items={items} onChange={handleChangeTab} {...rest}>
      {map(items, (item) => {
        return (
          <AntTabs.TabPane
            key={item.key}
            tab={item.tab}
            style={{ marginTop: 8 }}
          >
            <ReactResizeDetector handleWidth handleHeight>
              {() => (
                <Box
                  sx={{
                    height: document.documentElement.clientHeight - 140,
                  }}
                >
                  <PerfectScrollbar>
                    <Box sx={{ overflow: 'hidden' }}>{item.children}</Box>
                  </PerfectScrollbar>
                </Box>
              )}
            </ReactResizeDetector>
          </AntTabs.TabPane>
        )
      })}
    </BpdTabs>
  )
}

export default Tabs
