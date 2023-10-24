import { BpdTabs, BpdTabsProps } from '@bpd/bpd-web/shared/ui'
import { PerfectScrollbar } from '@bpd/vendors/perfect-scrollbar'
import { Box } from '@gic/battlefield-ui-pack'
import { Tabs as AntTabs } from 'antd'
import { map } from 'lodash'
import { FC } from 'react'
import ReactResizeDetector from 'react-resize-detector'
import { generatePath, useNavigate } from 'react-router-dom'

export interface TabsProps extends BpdTabsProps {}

const Tabs: FC<TabsProps> = (props) => {
  const { activeKey, items = [], ...rest } = props

  const navigate = useNavigate()

  const handleChangeTab = (path: string) => {
    navigate(generatePath(path))
  }

  return (
    <BpdTabs activeKey={activeKey} onChange={handleChangeTab} {...rest}>
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
                    height: document.documentElement.clientHeight - 190,
                    bgcolor: 'common.white',
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
