import {
  CreateDealButtonModal,
  ExportButton,
} from '@bpd/bpd-web/investment-process/shared/core'
import { createModules } from '@bpd/bpd-web/investment-process/shared/core'
import { UseConfig } from '@bpd/bpd-web/shared/core'
import {
  EXPORT_OPTIONS,
  TABS,
} from '@bpd/bpd-web/investment-process/us/shared/core'
import { get } from 'lodash'
import { Filters, Table } from '../components'
import { DEFAULT_STATE } from '../constants'
import FeatureDaw from '@bpd/investment-process/us/feature-daw'
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
