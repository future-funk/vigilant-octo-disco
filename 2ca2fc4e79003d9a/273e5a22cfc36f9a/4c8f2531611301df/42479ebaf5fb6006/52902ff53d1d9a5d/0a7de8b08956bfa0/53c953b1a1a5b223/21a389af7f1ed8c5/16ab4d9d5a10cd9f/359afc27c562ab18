import {
  CommentaryModal,
  getPercent,
  getStaffingCommitmentFromParamsByStaffRole,
  getStaffNameByRoleFromParams,
  PastActivityModal,
  StaffingCellRenderer,
} from '@bpd/bpd-web/investment-process/shared/core'
import { DealDto } from '@bpd/bpd-web/investment-process/shared/data-access'
import {
  getAccountingCellStyle,
  getAccountingNumber,
  getDate,
} from '@bpd/bpd-web/shared/core'
import { BpdNameCellRenderer } from '@bpd/bpd-web/shared/ui'
import { ColumnDefs } from '@bpd/vendors/ag-grid'
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

export const SHARED_COLUMN_DEFS: ColumnDefs = [
  {
    headerName: 'Deal',
    children: [
      // ICM
      {
        headerName: 'ICM',
        field: 'isIcmReportDeal',
        enableRowGroup: false,
        suppressColumnsToolPanel: true,
        width: 70,
        pinned: 'left',
      },
      // Name
      {
        headerName: 'Name',
        field: 'name',
        autoHeight: true,
        enableRowGroup: false,
        suppressColumnsToolPanel: true,
        width: 160,
        pinned: 'left',
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
      // Deal Stage
      {
        headerName: 'Deal Stage',
        field: 'status',
        autoHeight: true,
        width: 110,
        pinned: 'left',
      },
      // Sector
      {
        headerName: 'Sector',
        field: 'sector',
        autoHeight: true,
        width: 105,
        pinned: 'left',
      },
      // Description
      {
        headerName: 'Description',
        field: 'description',
        hide: true,
        autoHeight: true,
        filter: false,
        sortable: false,
        width: 350,
        pinned: 'left',
      },
    ],
  },
  {
    headerName: 'Staffing',
    children: [
      // Team
      {
        headerName: 'Team',
        enableRowGroup: false,
        pinned: 'left',
        width: 140,
        autoHeight: true,
        suppressColumnsToolPanel: true,
        cellRenderer: StaffingCellRenderer,
      },
      // Total Commitment Hours
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
      // Date Added
      {
        headerName: 'Date Added',
        field: 'vintageDt',
        hide: true,
        width: 110,
        filter: 'agDateColumnFilter',
        valueGetter: (params: ValueGetterParams) =>
          getDate(params?.data?.vintageDt),
      },
      // Sub Sector
      {
        headerName: 'Sub Sector',
        field: 'subSector',
        hide: true,
        width: 110,
      },
      // Approval Status
      {
        headerName: 'Approval Status',
        field: 'approvalStatus',
        width: 130,
      },
      // Deal Code
      {
        headerName: 'Deal Code',
        field: 'dealCode',
        hide: true,
        width: 130,
      },
      // Deal ID
      {
        headerName: 'Deal ID',
        field: 'id',
        hide: true,
        width: 130,
      },
      // Country
      {
        headerName: 'Country',
        field: 'country',
      },
      // Currency
      {
        headerName: 'Currency',
        field: 'currency',
        width: 100,
      },
      // Deal Type
      {
        headerName: 'Deal Type',
        field: 'requestType',
      },
      // Investment Type
      {
        headerName: 'Investment Type',
        field: 'investmentType',
        width: 140,
      },
      // Strategy
      {
        headerName: 'Project ID',
        field: 'projectCodes',
        width: 105,
      },
      // Master Project
      {
        headerName: 'Master Project',
        field: 'masterProjectCodes',
        width: 130,
      },
      // Core/Non-Core
      {
        headerName: 'Core/Non-Core',
        field: 'dqmDebtType',
        width: 130,
      },
      // Discretion/Ability to Scale
      {
        headerName: 'Discretion/Ability to Scale',
        field: 'discretionAbilityScale',
        hide: true,
        width: 170,
      },
      // Investment Vehicle
      {
        headerName: 'Investment Vehicle',
        field: 'investmentVehicle',
        hide: true,
        width: 130,
      },
      // Deal Name in other System
      {
        headerName: 'Deal Name in other System',
        field: 'joinDealName',
        hide: true,
        width: 175,
      },
      // Department
      {
        headerName: 'Department',
        field: 'department',
        hide: true,
        width: 175,
      },
      // Join Deal with other Dept
      {
        headerName: 'Joint Deal with other Dept',
        field: 'isJointDeal',
        hide: true,
        width: 175,
      },
      // Deal Closing Date
      {
        headerName: 'Deal Closing Date',
        field: 'dealClosingDate',
        hide: true,
        width: 130,
        filter: 'agDateColumnFilter',
      },
    ],
  },
  {
    headerName: 'Counterparties',
    children: [
      // Seller
      {
        headerName: 'Seller',
        field: 'sellers',
        width: 150,
      },
      // Broker / Banker
      {
        headerName: 'Broker / Banker',
        field: 'brokers',
        width: 150,
      },
      // GIC GP/Operating Partner
      {
        headerName: 'GIC GP/Operating Partner',
        field: 'generalPartners',
        width: 200,
      },
    ],
  },
  {
    headerName: 'Underwriting',
    children: [
      // GIC Price ($)
      {
        headerName: 'GIC Price ($)',
        field: 'gicPrice',
        filter: 'agNumberColumnFilter',
        valueGetter: (params: ValueGetterParams) =>
          getAccountingNumber(params?.data?.gicPrice),
        cellStyle: getAccountingCellStyle,
      },
      // GIC Cap Rate (%)
      {
        headerName: 'GIC Cap Rate (%)',
        field: 'gicCapRate',
        filter: 'agNumberColumnFilter',
        width: 150,
        valueGetter: (params: ValueGetterParams) =>
          getPercent(params?.data?.gicCapRate),
        cellStyle: getAccountingCellStyle,
      },
      // GIC Interest (%)
      {
        headerName: 'GIC Interest (%)',
        field: 'gicInterest',
        filter: 'agNumberColumnFilter',
        width: 160,
        valueGetter: (params: ValueGetterParams) =>
          getPercent(params?.data?.gicInterest),
        cellStyle: getAccountingCellStyle,
      },
      // Hurdle Rate (%)
      {
        headerName: 'Hurdle Rate (%)',
        field: 'riskHurdleRate',
        filter: 'agNumberColumnFilter',
        width: 130,
        valueGetter: (params: ValueGetterParams) =>
          getPercent(params?.data?.riskHurdleRate),
        cellStyle: getAccountingCellStyle,
      },
      // Net Equity IRR (LCL) (%)
      {
        headerName: 'Net Equity IRR (LCL) (%)',
        field: 'netEquityIrr',
        filter: 'agNumberColumnFilter',
        width: 150,
        valueGetter: (params: ValueGetterParams) =>
          getPercent(params?.data?.netEquityIrr),
        cellStyle: getAccountingCellStyle,
      },
      // Net Equity Commitment ($)
      {
        headerName: 'Net Equity Commitment ($)',
        field: 'nec',
        filter: 'agNumberColumnFilter',
        width: 260,
        valueGetter: (params: ValueGetterParams) =>
          getAccountingNumber(params?.data?.nec),
        cellStyle: getAccountingCellStyle,
      },
      // Net Equity Commitment (USD)
      {
        headerName: 'Net Equity Commitment (USD)',
        field: 'necUsd',
        hide: true,
        filter: 'agNumberColumnFilter',
        width: 260,
        valueGetter: (params: ValueGetterParams) =>
          getAccountingNumber(params?.data?.nectUsd),
        cellStyle: getAccountingCellStyle,
      },
      // Total Investment Cost ($)
      {
        headerName: 'Total Investment Cost ($)',
        field: 'tic',
        hide: true,
        filter: 'agNumberColumnFilter',
        width: 200,
        valueGetter: (params: ValueGetterParams) =>
          getAccountingNumber(params?.data?.tic),
        cellStyle: getAccountingCellStyle,
      },
      // Total Investment Cost (USD)
      {
        headerName: 'Total Investment Cost (USD)',
        field: 'ticUsd',
        hide: true,
        filter: 'agNumberColumnFilter',
        width: 260,
        valueGetter: (params: ValueGetterParams) =>
          getAccountingNumber(params?.data?.ticUsd),
        cellStyle: getAccountingCellStyle,
      },
    ],
  },
  {
    headerName: 'Staffing',
    children: [
      // Commitment (Deal Lead)
      {
        headerName: 'Commitment (Deal Lead)',
        enableRowGroup: false,
        width: 190,
        valueGetter: (params: ValueGetterParams) =>
          getStaffingCommitmentFromParamsByStaffRole(params, 'teamlead'),
        cellStyle: getAccountingCellStyle,
      },
      // Deal Lead
      {
        headerName: 'Deal Lead',
        width: 150,
        valueGetter: (params: ValueGetterParams) =>
          getStaffNameByRoleFromParams(params, 'teamlead'),
      },
      // Commitment (Staff#1)
      {
        headerName: 'Commitment (Staff#1)',
        enableRowGroup: false,
        width: 180,
        valueGetter: (params: ValueGetterParams) =>
          getStaffingCommitmentFromParamsByStaffRole(params, 'staff1'),
        cellStyle: getAccountingCellStyle,
      },
      // Staff#1
      {
        headerName: 'Staff#1',
        width: 150,
        valueGetter: (params: ValueGetterParams) =>
          getStaffNameByRoleFromParams(params, 'staff1'),
      },
      // Commitment (Staff#2)
      {
        headerName: 'Commitment (Staff#2',
        enableRowGroup: false,
        width: 180,
        valueGetter: (params: ValueGetterParams) =>
          getStaffingCommitmentFromParamsByStaffRole(params, 'staff2'),
        cellStyle: getAccountingCellStyle,
      },
      // Staff#2
      {
        headerName: 'Staff#2',
        width: 150,
        valueGetter: (params: ValueGetterParams) =>
          getStaffNameByRoleFromParams(params, 'staff2'),
      },
      // Commitment (Staff#3)
      {
        headerName: 'Commitment (Staff#3)',
        enableRowGroup: false,
        width: 180,
        valueGetter: (params: ValueGetterParams) =>
          getStaffingCommitmentFromParamsByStaffRole(params, 'staff3'),
        cellStyle: getAccountingCellStyle,
      },
      // Staff#3
      {
        headerName: 'Staff#3',
        width: 150,
        valueGetter: (params: ValueGetterParams) =>
          getStaffNameByRoleFromParams(params, 'staff3'),
      },
      // Commitment (Staff#4)
      {
        headerName: 'Commitment (Staff#4)',
        enableRowGroup: false,
        width: 180,
        valueGetter: (params: ValueGetterParams) =>
          getStaffingCommitmentFromParamsByStaffRole(params, 'staff4'),
        cellStyle: getAccountingCellStyle,
      },
      // Staff#4
      {
        headerName: 'Staff#4',
        width: 150,
        valueGetter: (params: ValueGetterParams) =>
          getStaffNameByRoleFromParams(params, 'staff4'),
      },
      // Commitment (Staff#5)
      {
        headerName: 'Commitment (Staff#5)',
        enableRowGroup: false,
        width: 180,
        valueGetter: (params: ValueGetterParams) =>
          getStaffingCommitmentFromParamsByStaffRole(params, 'staff5'),
        cellStyle: getAccountingCellStyle,
      },
      // Staff#5
      {
        headerName: 'Staff#5',
        width: 150,
        valueGetter: (params: ValueGetterParams) =>
          getStaffNameByRoleFromParams(params, 'staff5'),
      },
    ],
  },
  {
    headerName: 'Others',
    children: [
      // General Commentary
      {
        headerName: 'General Commentary',
        field: 'comment',
        autoHeight: true,
        width: 250,
        filter: false,
        sortable: false,
        pinned: 'right',
        cellRenderer: CommentaryModal,
      },
      // Last Updated
      {
        headerName: 'Last Updated',
        field: 'lastUpdateDt',
        width: 120,
        filter: 'agDateColumnFilter',
        pinned: 'right',
        cellRenderer: PastActivityModal,
      },
      // Created By
      {
        headerName: 'Created By',
        field: 'createdUserName',
        hide: true,
        width: 140,
        pinned: 'right',
      },
      // Created At
      {
        headerName: 'Created At',
        field: 'createdDt',
        hide: true,
        width: 140,
        filter: 'agDateColumnFilter',
        pinned: 'right',
        valueGetter: (params: ValueGetterParams) =>
          getDate(params?.data?.createdDt),
      },
    ],
  },
]

export const SHARED_DEFAULT_COLUMN_DEFS: ColDef = {
  flex: 0,
  width: 120,
  editable: false,
  suppressMenu: true,
  sortable: true,
  resizable: true,
  filter: true,
  wrapText: true,
}
