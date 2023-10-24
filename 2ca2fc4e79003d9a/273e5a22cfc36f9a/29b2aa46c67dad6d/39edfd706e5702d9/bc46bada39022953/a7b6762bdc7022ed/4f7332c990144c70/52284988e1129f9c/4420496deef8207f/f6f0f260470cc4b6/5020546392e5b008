import { utils as AgGridUtils, ColumnDefs } from '@bpd/vendors/ag-grid'

const getSectorExposureTableConfig = (): ColumnDefs => [
  {
    headerName: 'Sectors',
    field: 'sector',
  },
  {
    headerName: 'Top 25 MSA(USD)',
    field: 'top25MsaAssetNmvUsd',
    cellStyle: { justifyContent: 'flex-end' },
    ...AgGridUtils.CellFormattingTypes.million,
  },
  {
    headerName: 'Top 25 MSA(%)',
    field: 'top25MsaPercent',
    cellStyle: { justifyContent: 'flex-end' },
    ...AgGridUtils.CellFormattingTypes.percentage1Dp,
  },
  {
    headerName: 'Primary Market USD',
    field: 'primaryMarketAssetNmvUsd',
    cellStyle: { justifyContent: 'flex-end' },
    ...AgGridUtils.CellFormattingTypes.million,
  },
  {
    headerName: 'Primary Market(%)',
    field: 'primaryMarketPercent',
    cellStyle: { justifyContent: 'flex-end' },
    ...AgGridUtils.CellFormattingTypes.percentage1Dp,
  },
]
export default getSectorExposureTableConfig
