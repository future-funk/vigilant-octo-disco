import { ExportButton } from '@bpd/bpd-web/investment-process/shared/core'
import { createModules } from '@bpd/bpd-web/investment-process/shared/core'
import {
  EXPORT_OPTIONS,
  TABS,
} from '@bpd/bpd-web/investment-process/us/shared/core'
import { get } from 'lodash'
import { Filters, Table } from '../components'
import { DEFAULT_STATE } from '../constants'
import { UseConfig } from '@bpd/bpd-web/shared/core'

const useConfig: UseConfig = () => {
  return {
    page: {
      path: 'projects',
      modules: createModules({ id: 'projects', defaultState: DEFAULT_STATE }),
      tabs: {
        activeKey: get(TABS.PROJECTS, 'key'),
        tabBarExtraContent: {
          right: <ExportButton exportOptions={EXPORT_OPTIONS} />,
        },
      },
      slots: {
        top: { left: <Filters /> },
        main: <Table />,
      },
    },
  }
}

export default useConfig
