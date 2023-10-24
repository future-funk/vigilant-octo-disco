import { get } from 'lodash'
import {
  CreateDealButtonModal,
  ExportButton,
} from '@bpd/bpd-web/investment-process/shared/core'
import { createModules } from '@bpd/bpd-web/investment-process/shared/core'
import {
  EXPORT_OPTIONS,
  TABS,
} from '@bpd/bpd-web/investment-process/eu/shared/core'
import { Filters, Table } from '../components'
import { DEFAULT_STATE } from '../constants'
import { UseConfig } from '@bpd/bpd-web/shared/core'
import FeatureDaw from '@bpd/investment-process/eu/feature-daw'
import { Suspense } from 'react'

const useConfig: UseConfig = () => {
  return {
    page: {
      path: 'tracker/*',
      modules: createModules({ id: 'tracker', defaultState: DEFAULT_STATE }),
      tabs: {
        activeKey: get(TABS.TRACKER, 'key'),
        tabBarExtraContent: {
          right: <ExportButton exportOptions={EXPORT_OPTIONS} />,
        },
      },
      slots: {
        top: {
          left: <Filters />,
          right: (
            <CreateDealButtonModal
              title="Create New Project"
              category="project"
            />
          ),
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
