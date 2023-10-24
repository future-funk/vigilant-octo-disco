import {
  CATEGORIES,
  Table as CoreTable,
  useGetDeals,
} from '@bpd/bpd-web/investment-process/shared/core'
import { COLUMN_DEFS } from '../constants'
import {
  DEFAULT_COLUMN_DEFS,
  DEFAULT_SIDE_BAR_DEFS,
} from '../constants/COLUMN_DEFS'
import { STAGES } from '@bpd/bpd-web/shared/core'

const Table = () => {
  return (
    <CoreTable
      columnDefs={COLUMN_DEFS}
      sideBar={DEFAULT_SIDE_BAR_DEFS}
      defaultColDef={DEFAULT_COLUMN_DEFS}
      dataSource={{
        useQuery: useGetDeals,
        args: {
          filter: {
            server: [
              {
                field: 'status',
                value: [STAGES.OWNED],
              },
              {
                field: 'category',
                value: [CATEGORIES.DEAL],
              },
            ],
          },
        },
      }}
    />
  )
}

export default Table
