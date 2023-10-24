import { utils as AgGridUtils, ColumnDefs } from '@bpd/vendors/ag-grid'

const geMsaExposureTableConfig = (): ColumnDefs => [
  {
    headerName: 'MSA',
    field: 'msaShortName',
  },
  {
    headerName: 'NMV(USD)',
    field: 'assetNmvUsd',
    cellStyle: { justifyContent: 'flex-end' },
    width: 150,
    aggFunc: 'sum',
    ...AgGridUtils.CellFormattingTypes.million,
  },
  {
    headerName: 'NMV(%)',
    field: 'percent',
    cellStyle: { justifyContent: 'flex-end' },
    width: 150,
    aggFunc: 'sum',
    ...AgGridUtils.CellFormattingTypes.percentage1Dp,
  },
]
export default geMsaExposureTableConfig
