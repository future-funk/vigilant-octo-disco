import { ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Config } from '@bpd/bpd-web/shared/core'
import { DrawerLayout } from '@bpd/bpd-web/directory/feature-shell/shared/directory'
import { createModulesConfig } from '../utils'

import { VIEW_STATE } from '../constants'
import { DirectorySlice } from '../data'
import {
  LogisticsDrawerFilter,
  CoreLogisticsDrawer,
  Map,
  DEFAULT_TAB_CONFIG,
} from '../components'
import { renderSlot } from '@bpd/ui/libs/react-slots'

interface UseConfigProps {
  slots: {
    overviewDrawer?: ReactElement
  }
}

type UseConfig = (props: UseConfigProps) => Partial<Config>

const useConfig: UseConfig = (props?: UseConfigProps) => {
  const [overview, ...rest] = DEFAULT_TAB_CONFIG.items

  const {
    slots: { overviewDrawer: overviewBody = overview.body },
  } = props ?? { slots: {} }

  return {
    page: {
      modules: createModulesConfig({
        slices: { directory: DirectorySlice },
        viewState: VIEW_STATE,
      }),
      slots: {
        left: (
          <Routes>
            <Route element={<DrawerLayout />}>
              <Route
                path=""
                element={
                  <CoreLogisticsDrawer
                    config={{
                      ...DEFAULT_TAB_CONFIG,
                      items: [
                        { ...overview, body: renderSlot(overviewBody) },
                        ...rest,
                      ],
                    }}
                  />
                }
              />
            </Route>
          </Routes>
        ),
        center: (
          <Routes>
            <Route path="" element={<Map />} />
          </Routes>
        ),
        top: (
          <Routes>
            <Route path="" element={<LogisticsDrawerFilter />} />
          </Routes>
        ),
      },
    },
  }
}

export default useConfig
