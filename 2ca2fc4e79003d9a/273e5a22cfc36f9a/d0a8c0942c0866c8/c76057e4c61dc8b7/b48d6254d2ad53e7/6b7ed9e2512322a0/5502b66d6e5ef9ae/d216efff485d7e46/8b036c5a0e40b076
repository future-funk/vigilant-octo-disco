import { utils as AgGridUtils, ColumnDefs } from '@bpd/vendors/ag-grid'
import { VIEW_TYPE_MAP } from '../constants'

const { CellFormattingTypes } = AgGridUtils

const cellStyleRenderer = (params) => {
  let style = { justifyContent: 'flex-end', color: '#4299e1' }
  if (params.value <= 0) {
    style = { ...style, color: '#f56565' }
  }
  return style
}

const useGetCompanyDecompGridColDef = (props: {
  dimension: string
  viewType: string
}): ColumnDefs => {
  const { dimension, viewType } = props
  const { header, priceField, percentField } = VIEW_TYPE_MAP[viewType]

  return [
    {
      headerName: dimension,
      field: 'dimension',
    },
    {
      headerName: `${header} ($USD, M)`,
      field: priceField,
      cellStyle: { justifyContent: 'flex-end' },
      sort: 'desc',
      minWidth: 165,
      ...CellFormattingTypes.millionWithoutUnit,
    },
    {
      headerName: `${header} (%)`,
      field: percentField,
      maxWidth: 105,
      ...CellFormattingTypes.percentage1Dp,
      cellStyle: cellStyleRenderer,
    },
  ]
}
export default useGetCompanyDecompGridColDef
