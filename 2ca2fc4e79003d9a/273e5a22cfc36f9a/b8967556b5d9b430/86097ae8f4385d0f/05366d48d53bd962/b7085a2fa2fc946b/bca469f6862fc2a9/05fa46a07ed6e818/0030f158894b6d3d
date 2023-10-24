import { AgGridProps } from '@bpd/vendors/ag-grid'
import { ICellRendererParams } from 'ag-grid-community'
import { SourceCellRenderer } from '../components/CellRenderers'
import { CustomCellFormatingTypes } from './gridUtils'

const getCashFlowColDef = (ccy: string): AgGridProps['columnDefs'] => [
  {
    headerName: 'Date',
    field: 'txnDt',
    ...CustomCellFormatingTypes.date,
  },

  {
    headerName: 'Source',
    field: 'source',
    cellRenderer: (params: ICellRendererParams) =>
      SourceCellRenderer({ params }),
  },

  {
    headerName: `CF for IRR (${ccy})`,
    field: 'total',
    ...CustomCellFormatingTypes.number,
    cellStyle: { justifyContent: 'flex-end' },
  },

  {
    headerName: `Appreciation (${ccy})`,
    field: 'apr',
    ...CustomCellFormatingTypes.number,
    cellStyle: { justifyContent: 'flex-end' },
  },

  {
    headerName: `Capital Calls (${ccy})`,
    field: 'cc',
    ...CustomCellFormatingTypes.number,
    cellStyle: { justifyContent: 'flex-end' },
  },

  {
    headerName: `Return of Capital (${ccy})`,
    field: 'roc',
    ...CustomCellFormatingTypes.number,
    cellStyle: { justifyContent: 'flex-end' },
  },

  {
    headerName: `Income from Operations (${ccy})`,
    field: 'ifo',
    ...CustomCellFormatingTypes.number,
    cellStyle: { justifyContent: 'flex-end' },
    width: 120,
  },

  {
    headerName: `Portfolio Expenses (${ccy})`,
    field: 'pe',
    ...CustomCellFormatingTypes.number,
    cellStyle: { justifyContent: 'flex-end' },
  },

  {
    headerName: `Valuation (${ccy})`,
    field: 'val',
    ...CustomCellFormatingTypes.number,
    cellStyle: { justifyContent: 'flex-end' },
  },
]

export default getCashFlowColDef
