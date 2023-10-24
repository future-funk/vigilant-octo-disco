import {
  CommentaryModal,
  PastActivityModal,
  WorkloadCellRenderer,
  getPercent,
  getStaffNameByRoleFromParams,
  getStaffWorkloadPercentFromParamsByStaffRole,
} from '@bpd/bpd-web/investment-process/shared/core'
import { DealDto } from '@bpd/bpd-web/investment-process/shared/data-access'
import {
  getAccountingCellStyle,
  getAccountingNumber,
  getDate,
} from '@bpd/bpd-web/shared/core'
import { BpdNameCellRenderer } from '@bpd/bpd-web/shared/ui'
import { ColumnDefs } from '@bpd/vendors/ag-grid'
import { Typography } from '@gic/battlefield-ui-pack'
import {
  ColDef,
  ICellRendererParams,
  SideBarDef,
  ValueGetterParams,
} from 'ag-grid-community'

export const SHARED_DEFAULT_SIDE_BAR_DEFS: SideBarDef = {
  toolPanels: [
    {
      id: 'columns',
      labelDefault: 'Columns',
      labelKey: 'columns',
      iconKey: 'columns',
      toolPanel: 'agColumnsToolPanel',
      toolPanelParams: {
        suppressRowGroups: true,
        suppressValues: true,
        suppressPivots: true,
        suppressPivotMode: true,
        suppressSideButtons: true,
        suppressColumnFilter: true,
        suppressColumnSelectAll: true,
        suppressColumnExpandAll: true,
      },
    },
    {
      id: 'filters',
      labelDefault: 'Filters',
      labelKey: 'filters',
      iconKey: 'filter',
      toolPanel: 'agFiltersToolPanel',
    },
  ],
}

/**
 * Shared column definitions for deals and project tabs.
 */
export const SHARED_COLUMN_DEFS: ColumnDefs = [
  {
    headerName: 'Deal',
    children: [
      {
        headerName: 'Team',
        field: 'subTeam',
        hide: false,
        pinned: 'left',
        enableRowGroup: true,
        width: 75,
      },
      {
        headerName: 'Name',
        field: 'name',
        hide: false,
        pinned: 'left',
        autoHeight: true,
        enableRowGroup: false,
        width: 130,
        cellRenderer: BpdNameCellRenderer,
        cellRendererParams: (params: ICellRendererParams) => {
          const { data }: { data: DealDto } = params
          const { name, createdDt } = data

          return {
            title: name,
            date: getDate(createdDt),
          }
        },
      },
      {
        headerName: 'Date Added',
        field: 'vintageDt',
        hide: true,
        pinned: 'left',
        enableRowGroup: true,
        width: 110,
        filter: 'agDateColumnFilter',
        valueGetter: (params: ValueGetterParams) =>
          getDate(params?.data?.vintageDt),
      },
      {
        headerName: 'Description',
        field: 'description',
        hide: false,
        pinned: 'left',
        autoHeight: true,
        filter: false,
        sortable: false,
        width: 250,
      },
      {
        headerName: 'Intensity',
        field: 'intensity',
        hide: false,
        pinned: 'left',
        enableRowGroup: true,
        width: 90,
      },
      {
        headerName: 'Workload',
        field: 'teamListPerc',
        hide: false,
        pinned: 'left',
        enableRowGroup: false,
        autoHeight: true,
        suppressColumnsToolPanel: true,
        width: 140,
        cellRenderer: WorkloadCellRenderer,
      },
      {
        headerName: 'Total Commitment Hours',
        field: 'totalCommitmentHours',
        hide: true,
        pinned: 'left',
        enableRowGroup: false,
        filter: 'agNumberColumnFilter',
        width: 190,
      },
    ],
  },
  {
    headerName: 'Deal',
    children: [
      {
        headerName: 'Approval Status',
        field: 'approvalStatus',
        hide: false,
        pinned: null,
        autoHeight: true,
        enableRowGroup: true,
      },
      {
        headerName: 'Deal Code',
        field: 'dealCode',
        hide: true,
        pinned: null,
        enableRowGroup: true,
        width: 130,
      },
      {
        headerName: 'Deal ID',
        field: 'id',
        hide: true,
        pinned: null,
        enableRowGroup: true,
        width: 130,
      },
      {
        headerName: 'Deal Stage',
        field: 'status',
        hide: false,
        pinned: null,
        autoHeight: true,
        enableRowGroup: true,
        width: 110,
      },
      {
        headerName: 'Sector',
        field: 'sector',
        hide: false,
        pinned: null,
        autoHeight: true,
        enableRowGroup: true,
        width: 110,
        cellRenderer: (params: ICellRendererParams) => {
          const { data }: { data: DealDto } = params
          const { sector } = data
          return sector ? (
            <Typography variant="subtitle3">{sector}</Typography>
          ) : (
            ''
          )
        },
      },
      {
        headerName: 'Sub Sector',
        field: 'subSector',
        hide: true,
        pinned: null,
        enableRowGroup: true,
        width: 110,
      },
      {
        headerName: 'Country',
        field: 'country',
        hide: false,
        pinned: null,
        enableRowGroup: true,
      },
      {
        headerName: 'Deal Type',
        field: 'requestType',
        hide: false,
        pinned: null,
        enableRowGroup: true,
        width: 120,
      },
      {
        headerName: 'Investment Theme',
        field: 'investmentTheme',
        hide: false,
        pinned: null,
        enableRowGroup: true,
        width: 150,
      },
      {
        headerName: 'Strategy',
        field: 'strategy',
        hide: false,
        pinned: null,
        enableRowGroup: true,
        width: 110,
      },
      {
        headerName: 'Investment Type',
        field: 'investmentType',
        hide: false,
        pinned: null,
        enableRowGroup: true,
        width: 140,
      },
      {
        headerName: '% Probability of Success',
        field: 'successProbability',
        hide: false,
        pinned: null,
        enableRowGroup: true,
        width: 170,
        cellStyle: getAccountingCellStyle,
      },
      {
        headerName: 'Project Id',
        field: 'projectCodes',
        hide: true,
        width: 105,
      },
      {
        headerName: 'Master Project',
        field: 'masterProjectCodes',
        hide: true,
        pinned: null,
        enableRowGroup: true,
        width: 130,
      },
      {
        headerName: 'Core/Non-Core',
        field: 'dqmDebtType',
        hide: false,
        enableRowGroup: true,
        width: 130,
      },
      {
        headerName: 'Currency',
        field: 'currency',
        hide: true,
        pinned: null,
        enableRowGroup: true,
        width: 100,
      },
      {
        headerName: 'Discretion/Ability to Scale',
        field: 'discretionAbilityScale',
        hide: true,
        enableRowGroup: true,
        width: 170,
      },
      {
        headerName: 'Investment Vehicle',
        field: 'investmentVehicle',
        hide: true,
        enableRowGroup: true,
        width: 130,
      },
      {
        headerName: 'Deal Name in other System',
        field: 'jointDealName',
        hide: true,
        enableRowGroup: true,
        width: 175,
      },
      {
        headerName: 'Department',
        field: 'department',
        hide: true,
        enableRowGroup: true,
        width: 110,
      },
      {
        headerName: 'Joint Deal with other Dept',
        field: 'isJointDeal',
        hide: true,
        enableRowGroup: true,
        width: 175,
      },
      {
        headerName: 'Deal Closing Date',
        field: 'dealClosingDate',
        hide: true,
        enableRowGroup: true,
        width: 130,
        filter: 'agDateColumnFilter',
        valueGetter: (params: ValueGetterParams) =>
          getDate(params?.data?.dealClosingDate),
      },
    ],
  },
  {
    headerName: 'Counterparties',
    children: [
      {
        headerName: 'Seller',
        field: 'sellers',
        hide: false,
        pinned: null,
        enableRowGroup: true,
      },
      {
        headerName: 'Broker / Banker',
        field: 'brokers',
        hide: false,
        pinned: null,
        enableRowGroup: true,
        width: 130,
      },
      {
        headerName: 'GIC GP/Operating Partner',
        field: 'generalPartners',
        hide: false,
        pinned: null,
        enableRowGroup: true,
        width: 200,
      },
    ],
  },
  {
    headerName: 'Underwriting',
    children: [
      {
        headerName: 'Currency',
        field: 'currency',
        hide: false,
        pinned: null,
        enableRowGroup: true,
        width: 100,
      },
      {
        headerName: 'GIC Cap Rate (%)',
        field: 'gicCapRate',
        hide: false,
        pinned: null,
        filter: 'agNumberColumnFilter',
        width: 140,
        valueGetter: (params: ValueGetterParams) =>
          getPercent(params?.data?.gicCapRate),
        cellStyle: getAccountingCellStyle,
      },
      {
        headerName: 'GIC Interest (%)',
        field: 'gicInterest',
        hide: false,
        pinned: null,
        filter: 'agNumberColumnFilter',
        width: 130,
        valueGetter: (params: ValueGetterParams) =>
          getPercent(params?.data?.gicInterest),
        cellStyle: getAccountingCellStyle,
      },
      {
        headerName: 'Total Investment Cost (LCY)',
        field: 'tic',
        hide: false,
        pinned: null,
        filter: 'agNumberColumnFilter',
        width: 200,
        valueGetter: (params: ValueGetterParams) =>
          getAccountingNumber(params?.data?.tic),
        cellStyle: getAccountingCellStyle,
      },
      {
        headerName: 'Total Investment Cost (USD)',
        field: 'ticUsd',
        hide: false,
        pinned: null,
        filter: 'agNumberColumnFilter',
        width: 200,
        valueGetter: (params: ValueGetterParams) =>
          getAccountingNumber(params?.data?.ticUsd),
        cellStyle: getAccountingCellStyle,
      },
      {
        headerName: 'Net Equity Commitment (LCY)',
        field: 'nec',
        hide: false,
        pinned: null,
        filter: 'agNumberColumnFilter',
        width: 200,
        valueGetter: (params: ValueGetterParams) =>
          getAccountingNumber(params?.data?.nec),
        cellStyle: getAccountingCellStyle,
      },
      {
        headerName: 'Net Equity Commitment (USD)',
        field: 'necUsd',
        hide: true,
        pinned: null,
        filter: 'agNumberColumnFilter',
        width: 200,
        valueGetter: (params: ValueGetterParams) =>
          getAccountingNumber(params?.data?.necUsd),
        cellStyle: getAccountingCellStyle,
      },
      {
        headerName: 'Net Equity Commitment (EUR)',
        field: 'necEur',
        hide: true,
        pinned: null,
        filter: 'agNumberColumnFilter',
        width: 230,
        valueGetter: (params: ValueGetterParams) =>
          getAccountingNumber(params?.data?.necEur),
        cellStyle: getAccountingCellStyle,
      },
      {
        headerName: 'Risk-Adj Hurdle Rate (LCL) (%)',
        field: 'riskHurdleRate',
        hide: false,
        pinned: null,
        filter: 'agNumberColumnFilter',
        width: 200,
        valueGetter: (params: ValueGetterParams) =>
          getPercent(params?.data?.riskHurdleRate),
        cellStyle: getAccountingCellStyle,
      },
      {
        headerName: 'Net Equity IRR (LCL) (%)',
        field: 'netEquityIrr',
        hide: false,
        pinned: null,
        filter: 'agNumberColumnFilter',
        width: 200,
        valueGetter: (params: ValueGetterParams) =>
          getPercent(params?.data?.netEquityIrr),
        cellStyle: getAccountingCellStyle,
      },
      {
        headerName: 'GIC Price ($)',
        field: 'gicPrice',
        hide: true,
        pinned: null,
        filter: 'agNumberColumnFilter',
        valueGetter: (params: ValueGetterParams) =>
          getAccountingNumber(params?.data?.gicPrice),
        cellStyle: getAccountingCellStyle,
      },
    ],
  },
  {
    headerName: 'Staffing',
    children: [
      {
        headerName: 'Work Load (Deal Lead) (%)',
        hide: true,
        pinned: null,
        enableRowGroup: false,
        width: 190,
        valueGetter: (params: ValueGetterParams) =>
          getStaffWorkloadPercentFromParamsByStaffRole(params, 'teamlead'),
        cellStyle: getAccountingCellStyle,
      },
      {
        headerName: 'Deal Lead',
        hide: true,
        pinned: null,
        enableRowGroup: true,
        width: 150,
        valueGetter: (params: ValueGetterParams) =>
          getStaffNameByRoleFromParams(params, 'teamlead'),
      },
      {
        headerName: 'Work Load (Staff#1) (%)',
        hide: true,
        pinned: null,
        enableRowGroup: false,
        width: 180,
        valueGetter: (params: ValueGetterParams) =>
          getStaffWorkloadPercentFromParamsByStaffRole(params, 'staff1'),
        cellStyle: getAccountingCellStyle,
      },
      {
        headerName: 'Staff#1',
        hide: true,
        pinned: null,
        enableRowGroup: true,
        width: 150,
        valueGetter: (params: ValueGetterParams) =>
          getStaffNameByRoleFromParams(params, 'staff1'),
      },
      {
        headerName: 'Work Load (Staff#2) (%)',
        hide: true,
        pinned: null,
        enableRowGroup: false,
        width: 180,
        valueGetter: (params: ValueGetterParams) =>
          getStaffWorkloadPercentFromParamsByStaffRole(params, 'staff2'),
        cellStyle: getAccountingCellStyle,
      },
      {
        headerName: 'Staff#2',
        hide: true,
        pinned: null,
        enableRowGroup: true,
        width: 150,
        valueGetter: (params: ValueGetterParams) =>
          getStaffNameByRoleFromParams(params, 'staff2'),
      },
      {
        headerName: 'Work Load (Staff#3) (%)',
        hide: true,
        pinned: null,
        enableRowGroup: false,
        width: 180,
        valueGetter: (params: ValueGetterParams) =>
          getStaffWorkloadPercentFromParamsByStaffRole(params, 'staff3'),
        cellStyle: getAccountingCellStyle,
      },
      {
        headerName: 'Staff#3',
        hide: true,
        pinned: null,
        enableRowGroup: true,
        width: 150,
        valueGetter: (params: ValueGetterParams) =>
          getStaffNameByRoleFromParams(params, 'staff3'),
      },
      {
        headerName: 'Work Load (Staff#4) (%)',
        hide: true,
        pinned: null,
        enableRowGroup: false,
        width: 180,
        valueGetter: (params: ValueGetterParams) =>
          getStaffWorkloadPercentFromParamsByStaffRole(params, 'staff4'),
        cellStyle: getAccountingCellStyle,
      },
      {
        headerName: 'Staff#4',
        hide: true,
        pinned: null,
        enableRowGroup: true,
        width: 150,
        valueGetter: (params: ValueGetterParams) =>
          getStaffNameByRoleFromParams(params, 'staff4'),
      },
      {
        headerName: 'Work Load (Staff#5) (%)',
        hide: true,
        pinned: null,
        enableRowGroup: false,
        width: 180,
        valueGetter: (params: ValueGetterParams) =>
          getStaffWorkloadPercentFromParamsByStaffRole(params, 'staff5'),
        cellStyle: getAccountingCellStyle,
      },
      {
        headerName: 'Staff#5',
        hide: true,
        pinned: null,
        enableRowGroup: true,
        width: 150,
        valueGetter: (params: ValueGetterParams) =>
          getStaffNameByRoleFromParams(params, 'staff5'),
      },
      {
        headerName: 'Work Load (Staff#6) (%)',
        hide: true,
        pinned: null,
        enableRowGroup: false,
        width: 180,
        valueGetter: (params: ValueGetterParams) =>
          getStaffWorkloadPercentFromParamsByStaffRole(params, 'staff6'),
        cellStyle: getAccountingCellStyle,
      },
      {
        headerName: 'Staff#6',
        hide: true,
        pinned: null,
        enableRowGroup: true,
        width: 150,
        valueGetter: (params: ValueGetterParams) =>
          getStaffNameByRoleFromParams(params, 'staff6'),
      },
      {
        headerName: 'Work Load (Staff#7) (%)',
        hide: true,
        pinned: null,
        enableRowGroup: false,
        width: 180,
        valueGetter: (params: ValueGetterParams) =>
          getStaffWorkloadPercentFromParamsByStaffRole(params, 'staff7'),
        cellStyle: getAccountingCellStyle,
      },
      {
        headerName: 'Staff#7',
        hide: true,
        pinned: null,
        enableRowGroup: true,
        width: 150,
        valueGetter: (params: ValueGetterParams) =>
          getStaffNameByRoleFromParams(params, 'staff7'),
      },
      {
        headerName: 'Work Load (Staff#8) (%)',
        hide: true,
        pinned: null,
        enableRowGroup: false,
        width: 180,
        valueGetter: (params: ValueGetterParams) =>
          getStaffWorkloadPercentFromParamsByStaffRole(params, 'staff8'),
        cellStyle: getAccountingCellStyle,
      },
      {
        headerName: 'Staff#8',
        hide: true,
        pinned: null,
        enableRowGroup: true,
        width: 150,
        valueGetter: (params: ValueGetterParams) =>
          getStaffNameByRoleFromParams(params, 'staff8'),
      },
    ],
  },
  {
    headerName: 'Others',
    children: [
      {
        headerName: 'Status',
        field: 'comment',
        hide: false,
        pinned: 'right',
        autoHeight: true,
        filter: false,
        sortable: false,
        width: 250,
        cellRenderer: CommentaryModal,
      },
      {
        headerName: 'Last Updated',
        field: 'lastUpdateDt',
        hide: false,
        pinned: 'right',
        width: 120,
        filter: 'agDateColumnFilter',
        cellRenderer: PastActivityModal,
      },
    ],
  },
]

export const SHARED_DEFAULT_COLUMN_DEFS: ColDef = {
  width: 120,
  editable: false,
  flex: 0,
  suppressMenu: true,
  sortable: true,
  resizable: true,
  filter: true,
  wrapText: true,
  autoHeight: true,
}
