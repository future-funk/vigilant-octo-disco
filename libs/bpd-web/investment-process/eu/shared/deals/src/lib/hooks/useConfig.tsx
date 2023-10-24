import {
  EXPORT_OPTIONS,
  TABS,
} from '@bpd/bpd-web/investment-process/eu/shared/core'
import {
  CreateDealButtonModal,
  createModules,
  ExportButton,
} from '@bpd/bpd-web/investment-process/shared/core'
import { get, map } from 'lodash'
import { Filters, Table } from '../components'
import { DEFAULT_STATE } from '../constants'
import { UseConfig } from '@bpd/bpd-web/shared/core'
import FeatureDaw from '@bpd/investment-process/eu/feature-daw'
import { Suspense } from 'react'

const useConfig: UseConfig = () => {
  return {
    page: {
      path: 'deals/*',
      modules: createModules({ id: 'deals', defaultState: DEFAULT_STATE }),
      tabs: {
        activeKey: get(TABS.DEALS, 'key'),
        tabBarExtraContent: {
          right: <ExportButton exportOptions={EXPORT_OPTIONS} />,
        },
      },
      slots: {
        top: {
          left: <Filters />,
          right: <CreateDealButtonModal />,
          rightProps: {
            sx: {
              alignSelf: 'flex-end',
            },
          },
        },
        main: (
          <>
            <Table />
            <Suspense fallback="Loading feature daw">
              <FeatureDaw />
            </Suspense>
          </>
        ),
      },
    },
  }
}

export default useConfig
