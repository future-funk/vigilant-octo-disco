import { createModules } from '@bpd/bpd-web/investment-process/shared/core'
import { UseConfig } from '@bpd/bpd-web/shared/core'
import { TABS } from '@bpd/bpd-web/investment-process/eu/shared/core'
import { get } from 'lodash'
import { InvestmentMemo } from '../components'

const useConfig: UseConfig = () => {
  return {
    page: {
      path: 'investment-memo',
      modules: createModules({
        id: 'investment-memo',
        defaultState: { filters: {} },
      }),
      tabs: {
        activeKey: get(TABS.INVESTMENT_MEMO, 'key'),
      },
      slots: {
        main: <InvestmentMemo />,
      },
    },
  }
}

export default useConfig
