import { createModules } from '@bpd/bpd-web/investment-process/shared/core'
import { TABS } from '@bpd/bpd-web/investment-process/eu/shared/core'
import { get } from 'lodash'
import { Layout } from '../components'
import { DEFAULT_STATE } from '../constants'
import { UseConfig } from '@bpd/bpd-web/shared/core'

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
