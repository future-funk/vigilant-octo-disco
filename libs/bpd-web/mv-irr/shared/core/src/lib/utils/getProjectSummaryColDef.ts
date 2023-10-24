import {
  CustomCellFormatingTypes,
  getFyHeader,
  getLastFyHeader,
} from '../utils'
import { AgGridProps } from '@bpd/vendors/ag-grid'

import { getFiscalYearDates } from '@bpd/utils/fiscal-year'

const getGridColDef = ({
  previousFy,
  currentFy,
}: {
  previousFy: string
  currentFy: string
}): AgGridProps['columnDefs'] => [
  {
    headerName: 'Project Info',
    children: [
      {
        headerName: 'Strategy',
        field: 'strategy',
        pinned: 'left',
        width: 120,
        autoHeight: true,
        tooltipField: 'strategy',
      },
      {
        headerName: 'Project Id',
        field: 'projId',
        pinned: 'left',
        width: 100,
      },
      {
        headerName: 'Project Name',
        field: 'projName',
        width: 150,
        pinned: 'left',
        cellRenderer: 'projectNameRenderer',
        autoHeight: false,
        wrapText: false,
        suppressMenu: false,
        menuTabs: ['filterMenuTab'],
      },
      {
        headerName: 'Vehicle',
        field: 'invtVehicle',
        pinned: 'left',
        width: 120,
      },
      {
        headerName: 'Country',
        field: 'country',
        pinned: 'left',
        width: 120,
        autoHeight: true,
      },
      {
        headerName: 'Currency',
        field: 'currency',
        pinned: 'left',
        width: 80,
      },
      {
        headerName: 'Sector',
        field: 'sector',
        pinned: 'left',
        width: 120,
        autoHeight: true,
      },
    ],
  },
  {
    headerName: getLastFyHeader(previousFy),
    children: [
      {
        headerName: '1Y IRR',
        field: 'lfyIrr',
        width: 80,
        cellStyle: { justifyContent: 'flex-end' },
        ...CustomCellFormatingTypes.percentage2Dp,
      },
    ],
  },

  {
    headerName: getFyHeader(currentFy),
    children: [
      {
        headerName: '1Y IRR (XIRR)',
        field: 'irrX',
        ...CustomCellFormatingTypes.percentage2Dp,
        cellStyle: { justifyContent: 'flex-end' },
        width: 120,
      },

      {
        headerName: `1Y IRR (Official)`,
        field: 'irr',
        ...CustomCellFormatingTypes.percentage2Dp,
        cellStyle: { justifyContent: 'flex-end' },
        width: 120,
      },

      {
        headerName: 'Return from Appreciation (XIRR) (%)',
        field: 'aprXPercent',
        width: 180,
        ...CustomCellFormatingTypes.percentage2Dp,
        cellStyle: { justifyContent: 'flex-end' },
      },

      {
        headerName: 'Return from Income (XIRR) (%)',
        field: 'incXPercent',
        width: 150,
        ...CustomCellFormatingTypes.percentage2Dp,
        cellStyle: { justifyContent: 'flex-end' },
      },

      {
        headerName: 'Return from Portfolio Expenses (XIRR) (%)',
        field: 'expXPercent',
        ...CustomCellFormatingTypes.percentage2Dp,
        cellStyle: { justifyContent: 'flex-end' },
        width: 160,
      },

      {
        headerName: 'Return from Appreciation (Official) (%)',
        field: 'aprPercent',
        width: 190,
        ...CustomCellFormatingTypes.percentage2Dp,
        cellStyle: { justifyContent: 'flex-end' },
      },

      {
        headerName: 'Return from Income (Official) (%)',
        field: 'incPercent',
        width: 160,
        ...CustomCellFormatingTypes.percentage2Dp,
        cellStyle: { justifyContent: 'flex-end' },
      },

      {
        headerName: 'Return from Portfolio Expenses (Official) (%)',
        field: 'expPercent',
        ...CustomCellFormatingTypes.percentage2Dp,
        cellStyle: { justifyContent: 'flex-end' },
        width: 170,
      },

      {
        headerName: `Starting MV ($)`,
        field: 'bmv',
        ...CustomCellFormatingTypes.number,
        cellStyle: { justifyContent: 'flex-end' },
        width: 120,
      },
      {
        headerName: '+ Capital Calls ($)',
        field: 'cc',
        ...CustomCellFormatingTypes.number,
        cellStyle: { justifyContent: 'flex-end' },
        width: 140,
      },
      {
        headerName: '- Return of Capital ($)',
        field: 'roc',
        ...CustomCellFormatingTypes.number,
        cellStyle: { justifyContent: 'flex-end' },
        width: 160,
      },
      {
        headerName: '+ Appreciation ($)',
        field: 'apr',
        ...CustomCellFormatingTypes.number,
        cellStyle: { justifyContent: 'flex-end' },
        width: 140,
      },
      {
        headerName: `Ending MV ($)`,
        field: 'emv',
        ...CustomCellFormatingTypes.number,
        cellStyle: { justifyContent: 'flex-end' },
        width: 120,
      },
      {
        headerName: '+ Income from Operations ($)',
        field: 'ifo',
        ...CustomCellFormatingTypes.number,
        cellStyle: { justifyContent: 'flex-end' },
        width: 200,
        suppressSizeToFit: true,
      },
      {
        headerName: '- Portfolio Expenses ($)',
        field: 'pe',
        ...CustomCellFormatingTypes.number,
        cellStyle: { justifyContent: 'flex-end' },
        width: 170,
      },
    ],
  },
  {
    headerName: 'Staff',
    children: [
      {
        headerName: 'Team Leader',
        width: 70,
        pinned: 'right',
        cellRenderer: 'renderTeamLeadCell',
        autoHeight: true,
      },
      {
        headerName: 'Primary Asset Manager',
        width: 100,
        pinned: 'right',
        autoHeight: true,
        cellRenderer: 'renderPrimaryAssetMgrCell',
      },
      {
        headerName: 'Secondary Asset Manager',
        width: 110,
        pinned: 'right',
        autoHeight: true,
        cellRenderer: 'renderSecondaryAssetMgrCell',
      },
    ],
  },
  {
    headerName: '',
    children: [
      {
        headerName: 'Action Log',
        field: 'history',
        width: 70,
        pinned: 'right',
        cellRenderer: 'renderActionLogCell',
        cellStyle: { justifyContent: 'flex-end' },
      },
    ],
  },
]

const getProjectSummaryColDef = (fyDate: string): AgGridProps['columnDefs'] => {
  const { previousFy, currentFy } = getFiscalYearDates(fyDate, 'YY')
  return getGridColDef({ previousFy, currentFy })
}

export default getProjectSummaryColDef
