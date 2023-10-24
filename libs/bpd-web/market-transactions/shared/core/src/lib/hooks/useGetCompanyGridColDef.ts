import { AgGridProps, utils as AgGridUtils } from '@bpd/vendors/ag-grid'
import { CellStyleFunc } from 'ag-grid-community'

const { CellFormattingTypes } = AgGridUtils

const getLongTextCellStyle: CellStyleFunc = () => {
  return {
    whiteSpace: 'normal',
    height: 'auto',
    wordBreak: 'break-word',
  }
}

const useGetCompanyGridColDef = (): AgGridProps['columnDefs'] => {
  return [
    {
      headerName: 'Company Name',
      field: 'companyName',
      pinned: 'left',
      width: 250,
      cellStyle: getLongTextCellStyle,
    },
    {
      headerName: 'Company Country',
      field: 'companyCountry',
      pinned: 'left',
      width: 200,
      cellStyle: getLongTextCellStyle,
    },
    {
      headerName: 'Buyer Total (USD)',
      field: 'buyTotalPriceUsd',
      ...CellFormattingTypes.number,
      minWidth: 160,
      cellStyle: { justifyContent: 'flex-end' },
    },
    {
      headerName: '#Deals (Buy)',
      field: 'buyTxnCount',
      ...CellFormattingTypes.number,
      minWidth: 110,
      cellStyle: { justifyContent: 'flex-end' },
    },
    {
      headerName: 'Seller Total (USD)',
      field: 'sellTotalPriceUsd',
      ...CellFormattingTypes.number,
      minWidth: 160,
      cellStyle: { justifyContent: 'flex-end' },
    },
    {
      headerName: '#Deals (Sell)',
      field: 'sellTxnCount',
      ...CellFormattingTypes.number,
      minWidth: 110,
      cellStyle: { justifyContent: 'flex-end' },
    },
    {
      headerName: 'Net Total (USD)',
      field: 'netTotalPriceUsd',
      ...CellFormattingTypes.number,
      minWidth: 160,
      cellStyle: { justifyContent: 'flex-end' },
    },
    {
      headerName: '#Deal (Net)',
      field: 'netTxnCount',
      minWidth: 160,
      ...CellFormattingTypes.number,
      cellStyle: { justifyContent: 'flex-end' },
    },
  ]
}

export default useGetCompanyGridColDef
