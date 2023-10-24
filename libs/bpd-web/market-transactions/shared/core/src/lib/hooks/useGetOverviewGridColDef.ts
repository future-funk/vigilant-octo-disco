import { AgGridProps, utils as AgGridUtils } from '@bpd/vendors/ag-grid'
import { DIMENSION_LABEL } from '../constants'

const { CellFormattingTypes } = AgGridUtils

const customCellRenderer = (params) => {
  let style = { justifyContent: 'flex-end', color: '#4299e1' }
  if (params.value <= 0) {
    style = { ...style, color: '#f56565' }
  }
  return style
}

const useGetOverviewGridColDef = (props: {
  dimension: string
}): AgGridProps['columnDefs'] => {
  const { dimension } = props
  return [
    {
      headerName: DIMENSION_LABEL[dimension],
      field: 'dimension',
    },
    {
      headerName: 'Txn Volume ($USD, M)',
      field: 'priceUsd',
      cellStyle: {
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(190, 227, 248, 0.2)',
      },
      maxWidth: 180,
      sort: 'desc',
      ...CellFormattingTypes.millionWithoutUnit,
    },
    {
      headerName: 'YoY, ∆ ($USD, M)',
      field: 'priceYoyUsd',
      cellStyle: customCellRenderer,
      maxWidth: 130,
      ...CellFormattingTypes.millionWithoutUnit,
    },
    {
      headerName: 'YoY, %',
      field: 'priceYoyPercent',
      maxWidth: 80,
      cellStyle: customCellRenderer,
      ...CellFormattingTypes.percentage1Dp,
    },
  ]
}
export default useGetOverviewGridColDef
