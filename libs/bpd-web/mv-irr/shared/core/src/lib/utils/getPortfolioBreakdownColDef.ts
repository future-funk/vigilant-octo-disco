
import { BREAKDOWN_ATTRIBUTES } from '../constants'
import { CustomCellFormatingTypes, getFyHeader, getLastFyHeader } from '../utils'
import { AgGridProps } from '@bpd/vendors/ag-grid'
import { getFiscalYearDates } from '@bpd/utils/fiscal-year'

type GridColDefParams = {
  previousFy: string
  currentFy: string
  activeAttribute: string
}

type GetGridColDefType = (params: GridColDefParams) => AgGridProps['columnDefs']

const getGridColDef: GetGridColDefType = ({
  previousFy,
  currentFy,
  activeAttribute,
}) => [
  {
    headerName: '',
    children: [
      {
        headerName: 'Strategy',
        field: 'strategy',
        pinned: 'left',
        width: 140,
      },
      {
        headerName: 'Currency',
        field: 'currency',
        pinned: 'left',
        width: 90,
      },
      {
        headerName: BREAKDOWN_ATTRIBUTES[activeAttribute],
        field: activeAttribute,
        pinned: 'left',
        width: 150,
      },
    ],
  },

  {
    headerName: getLastFyHeader(previousFy),
    children: [
      {
        headerName: '1Y IRR',
        field: 'lfyIrr',
        minWidth: 80,
        cellStyle: { justifyContent: 'flex-end' },
        ...CustomCellFormatingTypes.percentage2Dp,
      },
    ],
  },

  {
    headerName: getFyHeader(currentFy),
    children: [
      {
        headerName: '1Y IRR',
        field: 'irr',
        minWidth: 80,
        cellStyle: { justifyContent: 'flex-end' },
        ...CustomCellFormatingTypes.percentage2Dp,
      },
      {
        headerName: 'Return from Appreciation (%)',
        field: 'aprPercent',
        minWidth: 130,
        cellStyle: { justifyContent: 'flex-end' },
        ...CustomCellFormatingTypes.percentage2Dp,
        suppressSizeToFit: true,
      },
      {
        headerName: 'Return from Income (%)',
        field: 'incPercent',
        minWidth: 115,
        cellStyle: { justifyContent: 'flex-end' },
        ...CustomCellFormatingTypes.percentage2Dp,
        suppressSizeToFit: true,
      },
      {
        headerName: 'Return from Portfolio Expenses (%)',
        field: 'expPercent',
        cellStyle: { justifyContent: 'flex-end' },
        ...CustomCellFormatingTypes.percentage2Dp,
        minWidth: 160,
        suppressSizeToFit: true,
      },
      {
        headerName: `Starting MV ($)`,
        field: 'bmv',
        ...CustomCellFormatingTypes.number,
        cellStyle: { justifyContent: 'flex-end' },
        minWidth: 140,
        suppressSizeToFit: true,
      },
      {
        headerName: '+ Capital Calls ($)',
        field: 'cc',
        ...CustomCellFormatingTypes.number,
        cellStyle: { justifyContent: 'flex-end' },
        minWidth: 140,
        suppressSizeToFit: true,
      },
      {
        headerName: '- Return of Capital ($)',
        field: 'roc',
        ...CustomCellFormatingTypes.number,
        cellStyle: { justifyContent: 'flex-end' },
        minWidth: 160,
        suppressSizeToFit: true,
      },
      {
        headerName: '+ Appreciation ($)',
        field: 'apr',
        ...CustomCellFormatingTypes.number,
        cellStyle: { justifyContent: 'flex-end' },
        minWidth: 140,
      },
      {
        headerName: `Ending MV ($)`,
        field: 'emv',
        ...CustomCellFormatingTypes.number,
        cellStyle: { justifyContent: 'flex-end' },
        minWidth: 120,
        suppressSizeToFit: true,
      },
      {
        headerName: '+ Income from Operations ($)',
        field: 'ifo',
        ...CustomCellFormatingTypes.number,
        cellStyle: { justifyContent: 'flex-end' },
        minWidth: 140,
        suppressSizeToFit: true,
      },
      {
        headerName: '- Portfolio Expenses ($)',
        field: 'pe',
        ...CustomCellFormatingTypes.number,
        cellStyle: { justifyContent: 'flex-end' },
        minWidth: 130,
        suppressSizeToFit: true,
      },
    ],
  },
]

export const getPortfolioBreakdownColDef = (
  fyDate: string,
  activeAttribute: string
): AgGridProps['columnDefs'] => {
  const { previousFy, currentFy } = getFiscalYearDates(fyDate, 'YY')
  return getGridColDef({ previousFy, currentFy, activeAttribute })
}

export default getPortfolioBreakdownColDef
