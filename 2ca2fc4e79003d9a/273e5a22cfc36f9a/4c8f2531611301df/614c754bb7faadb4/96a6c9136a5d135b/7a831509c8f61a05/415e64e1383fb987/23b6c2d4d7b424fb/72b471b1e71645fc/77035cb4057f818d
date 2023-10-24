import {
  CATEGORIES,
  Table as CoreTable,
  useGetDeals,
} from '@bpd/bpd-web/investment-process/shared/core'
import {
  COLUMN_DEFS,
  DEFAULT_COLUMN_DEFS,
  DEFAULT_SIDE_BAR_DEFS,
} from '../constants'

const Table = () => {
  return (
    <CoreTable
      columnDefs={COLUMN_DEFS}
      defaultColDef={DEFAULT_COLUMN_DEFS}
      sideBar={DEFAULT_SIDE_BAR_DEFS}
      dataSource={{
        useQuery: useGetDeals,
        args: {
          filter: {
            server: [
              { field: 'category', value: [CATEGORIES.DEAL] },
              { field: 'status', get: 'status' },
            ],
            client: [
              {
                field: 'normalizedStaffs',
                get: 'normalizedStaffs',
                type: 'INCLUDE',
              },
              { field: 'subTeam', get: 'subTeam' },
            ],
          },
        },
      }}
    />
  )
}

export default Table
