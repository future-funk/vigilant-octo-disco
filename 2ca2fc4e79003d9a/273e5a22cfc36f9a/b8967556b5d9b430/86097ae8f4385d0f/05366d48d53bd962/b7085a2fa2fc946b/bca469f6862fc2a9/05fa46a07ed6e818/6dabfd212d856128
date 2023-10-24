import {
  CustomCellFormatingTypes,
  getFormatValueByField,
  getNameByField,
} from '../utils'
import { AgGridProps } from '@bpd/vendors/ag-grid'

const getProjectHistoryCashFlowColDef = (): AgGridProps['columnDefs'] => [
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
    headerName: 'Field',
    field: 'field',
    pinned: 'left',
    cellRenderer: getNameByField,
    width: 130,
  },
  {
    headerName: 'Old Value',
    field: 'oldVal',
    cellRenderer: getFormatValueByField,
  },
  {
    headerName: 'New Value',
    field: 'newVal',
    cellRenderer: getFormatValueByField,
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

export default getProjectHistoryCashFlowColDef
