import { AgGridProps } from '@bpd/vendors/ag-grid'
import {
  CustomCellFormatingTypes,
  getFormatValueByField,
  getNameByField,
} from '../utils'

const getProjectHistoryColDef = (): AgGridProps['columnDefs'] => [
  {
    headerName: 'Last action',
    field: 'lastUpdateInd',
    pinned: 'left',
  },
  {
    headerName: 'Field',
    field: 'field',
    pinned: 'left',
    cellRenderer: getNameByField,
    width: 150,
  },

  {
    headerName: 'Old Value',
    field: 'oldVal',
    cellRenderer: getFormatValueByField,
    width: 200,
  },
  {
    headerName: 'New Value',
    field: 'newVal',
    cellRenderer: getFormatValueByField,
    width: 200,
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
    width: 140,
  },
]

export default getProjectHistoryColDef
