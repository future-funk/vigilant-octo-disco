import { formatNumber } from '@bpd/utils/formatters'
import { utils as AgGridUtils, ColumnDefs } from '@bpd/vendors/ag-grid'
import { CellStyleFunc } from 'ag-grid-community'
import { UOM_PRICE_MAPPING } from '../constants'
import { getIsPortfolioSales } from '../utils'

const { CellFormattingTypes } = AgGridUtils

const getLongTextCellStyle: CellStyleFunc = () => {
  return {
    whiteSpace: 'normal',
    height: 'auto',
    minHeight: '100%',
    wordBreak: 'break-word',
    padding: '4px 12px',
  }
}

const getCommonColDef = (): ColumnDefs => {
  return [
    {
      headerName: 'Price (Local Currency)',
      field: 'priceLcy',
      ...CellFormattingTypes.number,
      minWidth: 160,
      cellStyle: { justifyContent: 'flex-end' },
    },
    {
      headerName: 'Price Per UOM (Local Currency)',
      field: 'priceLcyPuom',
      ...CellFormattingTypes.number,
      minWidth: 200,
      cellStyle: { justifyContent: 'flex-end' },
    },
    {
      headerName: 'Currency',
      field: 'currency',
      minWidth: 100,
    },
    {
      headerName: 'Country',
      field: 'country',
      minWidth: 120,
      autoHeight: true,
      cellStyle: getLongTextCellStyle,
    },
    {
      headerName: 'City',
      field: 'city',
      minWidth: 120,
      autoHeight: true,
      cellStyle: getLongTextCellStyle,
    },
    {
      headerName: 'Property Type',
      field: 'propMaintype',
      minWidth: 140,
      autoHeight: true,
    },
    {
      headerName: 'Property Subtype',
      field: 'propSubtype',
      minWidth: 140,
      autoHeight: true,
    },
    {
      headerName: 'Cap Rate',
      field: 'capRate',
      ...CellFormattingTypes.percentage1Dp,
      minWidth: 100,
      cellStyle: { justifyContent: 'flex-end' },
    },
    {
      headerName: 'Cap Rate Qualifier',
      field: 'capRateQualifier',
      minWidth: 140,
      autoHeight: true,
    },
    {
      headerName: 'Deal Qualifier',
      field: 'dealQualifier',
      minWidth: 140,
      autoHeight: true,
    },
  ]
}

const getPropertySalesColDef = (isHideTxnType = true): ColumnDefs => {
  return [
    {
      headerName: 'Name',
      field: 'propName',
      pinned: 'left',
      width: 180,
      autoHeight: true,
      cellStyle: getLongTextCellStyle,
    },
    {
      headerName: 'Address',
      field: 'address',
      minWidth: 240,
      cellStyle: getLongTextCellStyle,
      autoHeight: true,
    },
    {
      headerName: 'Transaction Type',
      field: 'txnType',
      minWidth: 140,
      cellStyle: getLongTextCellStyle,
      autoHeight: true,
      hide: isHideTxnType,
    },
    {
      headerName: 'Transaction Date',
      field: 'txnDt',
      ...CellFormattingTypes.date,
      minWidth: 140,
    },
    {
      headerName: 'NLA',
      field: 'nra',
      ...CellFormattingTypes.number,
      cellRenderer: (params) =>
        `${formatNumber(params.data.nra)} ${(
          UOM_PRICE_MAPPING[params.data.uom] || params.data.uom
        ).toLowerCase()}`,
      minWidth: 130,
      cellStyle: { justifyContent: 'flex-end' },
    },
    {
      headerName: 'Sector',
      field: 'sector',
      minWidth: 130,
      autoHeight: true,
    },
    {
      headerName: 'Price (USD)',
      field: 'priceUsd',
      ...CellFormattingTypes.number,
      minWidth: 120,
      cellStyle: { justifyContent: 'flex-end' },
    },
    {
      headerName: 'Price Per UOM (USD)',
      field: 'priceUsdPuom',
      ...CellFormattingTypes.number,
      minWidth: 160,
      cellStyle: { justifyContent: 'flex-end' },
    },
    {
      headerName: 'Buyers',
      field: 'buyers',
      minWidth: 180,
      autoHeight: true,
      cellStyle: getLongTextCellStyle,
    },
    {
      headerName: 'Sellers',
      field: 'sellers',
      minWidth: 180,
      autoHeight: true,
      cellStyle: getLongTextCellStyle,
    },
    ...getCommonColDef(),
  ]
}

const portfolioSalesColDef: ColumnDefs = [
  {
    headerName: 'Name',
    field: 'propName',
    pinned: 'left',
    width: 220,
    autoHeight: true,
    cellStyle: getLongTextCellStyle,
  },
  {
    headerName: 'Buyers',
    field: 'buyers',
    minWidth: 220,
    autoHeight: true,
    cellStyle: getLongTextCellStyle,
  },
  {
    headerName: 'Sellers',
    field: 'sellers',
    minWidth: 220,
    autoHeight: true,
    cellStyle: getLongTextCellStyle,
  },
  {
    headerName: '# Props',
    field: 'numPropInPortfolio',
    ...CellFormattingTypes.number,
    minWidth: 80,
    cellStyle: { justifyContent: 'flex-end' },
  },
  {
    headerName: 'Sector',
    field: 'sector',
    minWidth: 150,
  },
  {
    headerName: 'Price (USD)',
    field: 'priceUsd',
    ...CellFormattingTypes.number,
    minWidth: 140,
    cellStyle: { justifyContent: 'flex-end' },
  },
  ...getCommonColDef(),
]

const useGetTopSalesGridColDef = (
  salesType: string,
  isHideTxnType?: boolean
): ColumnDefs => {
  return getIsPortfolioSales(salesType)
    ? portfolioSalesColDef
    : getPropertySalesColDef(isHideTxnType)
}
export default useGetTopSalesGridColDef
