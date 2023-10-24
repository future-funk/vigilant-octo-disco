import { AgGridProps } from '@bpd/vendors/ag-grid'
import { CustomCellFormatingTypes } from './gridUtils'

const getProjectHistoryCategoriesColDef = (): AgGridProps['columnDefs'] => [
  {
    headerName: 'Last action',
    field: 'lastUpdateInd',
    pinned: 'left',
  },
  {
    headerName: 'Txn Date',
    field: 'txnDt',
    ...CustomCellFormatingTypes.date,
    pinned: 'left',
  },
  {
    headerName: 'Category',
    field: 'category',
    pinned: 'left',
    width: 130,
  },

  {
    headerName: 'Old Value',
    field: 'oldVal',
  },
  {
    headerName: 'New Value',
    field: 'newVal',
  },
  {
    headerName: 'Last Update By',
    field: 'lastUpdateUserName',
    width: 150,
  },
  {
    headerName: 'Last Update Date',
    field: 'lastUpdateDt',
    ...CustomCellFormatingTypes.date,
    width: 130,
  },
]

export default getProjectHistoryCategoriesColDef
