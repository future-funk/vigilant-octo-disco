import {
  CustomCellFormatingTypes,
  getFyHeader,
  getLastFyHeader,
} from '../utils'
import { AgGridProps } from '@bpd/vendors/ag-grid'
import { getFiscalYearDates } from '@bpd/utils/fiscal-year'
import ProjCcySelector from '../components/ProjCcySelector'

type GridColDefParams = {
  previousFy: string
  currentFy: string
  ccList: string[]
  isLocalCurrency: boolean
}

type GetGridColDefType = (params: GridColDefParams) => AgGridProps['columnDefs']

const getGridColDef: GetGridColDefType = ({
  previousFy,
  currentFy,
  ccList,
  isLocalCurrency,
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
        width: 240,
        headerComponentParams: { ccList, isLocalCurrency },
        headerComponent: ProjCcySelector,
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
        ...CustomCellFormatingTypes.percentage2Dp,
        minWidth: 160,
        cellStyle: { justifyContent: 'flex-end' },
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

export const getPortfolioSummaryColDef = (
  fyDate: string,
  ccList: string[],
  isLocalCurrency: boolean
): AgGridProps['columnDefs'] => {
  const { previousFy, currentFy } = getFiscalYearDates(fyDate, 'YY')
  return getGridColDef({ previousFy, currentFy, ccList, isLocalCurrency })
}

export default getPortfolioSummaryColDef
