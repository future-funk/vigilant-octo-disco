import { createModules } from '@bpd/bpd-web/investment-process/shared/core'
import { UseConfig } from '@bpd/bpd-web/shared/core'
import { TABS } from '@bpd/bpd-web/investment-process/us/shared/core'
import { get } from 'lodash'
import { Layout } from '../components'
import { DEFAULT_STATE } from '../constants'

const useConfig: UseConfig = () => {
  return {
    page: {
      path: 'people',
      modules: createModules({ id: 'people', defaultState: DEFAULT_STATE }),
      tabs: { activeKey: get(TABS.PEOPLE, 'key') },
      slots: {
        main: <Layout />,
      },
    },
  }
}

export default useConfig
