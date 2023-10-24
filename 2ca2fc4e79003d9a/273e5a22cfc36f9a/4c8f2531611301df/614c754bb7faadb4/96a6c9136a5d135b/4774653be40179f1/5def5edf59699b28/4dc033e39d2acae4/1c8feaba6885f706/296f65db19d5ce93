import {
  CommentaryModal,
  getStaffNameByRoleFromParams,
} from '@bpd/bpd-web/investment-process/shared/core'
import {
  SHARED_DEFAULT_COLUMN_DEFS,
  SHARED_DEFAULT_SIDE_BAR_DEFS,
} from '@bpd/bpd-web/investment-process/eu/shared/core'
import { PastActivityModal } from '@bpd/bpd-web/investment-process/shared/core'
import { DealDto } from '@bpd/bpd-web/investment-process/shared/data-access'
import { BpdNameCellRenderer } from '@bpd/bpd-web/shared/ui'
import { ColumnDefs } from '@bpd/vendors/ag-grid'
import {
  ColDef,
  ICellRendererParams,
  SideBarDef,
  ValueGetterParams,
} from 'ag-grid-community'
import dayjs from 'dayjs'
import { find } from 'lodash'
import { getDate } from '@bpd/bpd-web/shared/core'

export const DEFAULT_SIDE_BAR_DEFS: SideBarDef = SHARED_DEFAULT_SIDE_BAR_DEFS

const COLUMN_DEFS: ColumnDefs = [
  {
    headerName: 'Project',
    children: [
      {
        headerName: 'Name',
        field: 'name',
        hide: false,
        pinned: 'left',
        autoHeight: true,
        enableRowGroup: false,
        cellRenderer: BpdNameCellRenderer,
        cellRendererParams: (params: ICellRendererParams) => {
          const { data }: { data: DealDto } = params
          const { name, createdDt } = data
          return {
            title: name,
            date: dayjs(createdDt).format('DD MMM YYYY').toString(),
          }
        },
        width: 160,
      },
      {
        headerName: 'Status',
        field: 'status',
        hide: false,
        pinned: 'left',
        sortable: true,
        autoHeight: true,
        enableRowGroup: true,
        width: 120,
      },
      {
        headerName: 'Project Type',
        field: 'projectType',
        hide: false,
        pinned: null,
        autoHeight: true,
        width: 120,
        valueGetter: (params: ValueGetterParams) => {
          const { data }: { data: DealDto } = params
          const { projects } = data
          return find(projects)?.projectType
        },
        sortable: true,
        enableRowGroup: true,
      },
      {
        headerName: 'Description',
        field: 'description',
        hide: false,
        pinned: null,
        autoHeight: true,
        enableRowGroup: true,
        sortable: false,
        width: 275,
      },
      {
        headerName: 'Sector',
        field: 'sector',
        hide: false,
        pinned: null,
        autoHeight: true,
        enableRowGroup: true,
        width: 105,
      },
      {
        headerName: 'Target Completion Date',
        field: 'stratsTargetCompletionDt',
        hide: false,
        pinned: null,
        enableRowGroup: true,
        width: 170,
        valueGetter: (params: ValueGetterParams) =>
          getDate(params?.data?.stratsTargetCompletionDt),
      },
      {
        headerName: 'Team',
        field: 'mgmtTeam',
        hide: false,
        filter: true,
        pinned: null,
        sortable: true,
        enableRowGroup: true,
        width: 125,
        valueGetter: (params: ValueGetterParams) => {
          const { data }: { data: DealDto } = params
          const { projects } = data
          return find(projects)?.mgmtTeam
        },
      },
    ],
  },
  {
    headerName: 'Deal',
    children: [
      {
        headerName: 'Date Added',
        field: 'vintageDt',
        hide: false,
        pinned: null,
        enableRowGroup: true,
        width: 110,
        valueGetter: (params: ValueGetterParams) =>
          getDate(params?.data?.vintageDt),
      },
    ],
  },
  {
    headerName: 'Staffing',
    children: [
      {
        headerName: 'Project Lead',
        hide: false,
        pinned: null,
        enableRowGroup: true,
        width: 150,
        valueGetter: (params: ValueGetterParams) =>
          getStaffNameByRoleFromParams(params, 'teamlead'),
      },
      {
        headerName: 'Staff#1',
        hide: false,
        pinned: null,
        enableRowGroup: true,
        width: 150,
        valueGetter: (params: ValueGetterParams) =>
          getStaffNameByRoleFromParams(params, 'staff1'),
      },
      {
        headerName: 'Staff#2',
        hide: false,
        pinned: null,
        enableRowGroup: true,
        width: 150,
        valueGetter: (params) => getStaffNameByRoleFromParams(params, 'staff2'),
      },
      {
        headerName: 'Staff#3',
        hide: false,
        pinned: null,
        enableRowGroup: true,
        width: 150,
        valueGetter: (params) => getStaffNameByRoleFromParams(params, 'staff3'),
      },
      {
        headerName: 'Staff#4',
        hide: false,
        pinned: null,
        enableRowGroup: true,
        width: 150,
        valueGetter: (params) => getStaffNameByRoleFromParams(params, 'staff4'),
      },
      {
        headerName: 'Staff#5',
        hide: false,
        pinned: null,
        enableRowGroup: true,
        width: 150,
        valueGetter: (params) => getStaffNameByRoleFromParams(params, 'staff5'),
      },
    ],
  },
  {
    headerName: 'Others',
    children: [
      {
        headerName: 'Project Updates',
        field: 'comment',
        hide: false,
        pinned: 'right',
        autoHeight: true,
        filter: false,
        sortable: false,
        width: 275,
        cellRenderer: CommentaryModal,
      },
      {
        headerName: 'Created At',
        field: 'createdDt',
        pinned: 'right',
        width: 100,
        enableRowGroup: true,
        valueGetter: (params: ValueGetterParams) =>
          getDate(params?.data?.createdDt),
      },
      {
        headerName: 'Last Updated',
        field: 'lastUpdateDt',
        hide: false,
        pinned: 'right',
        width: 120,
        cellRenderer: PastActivityModal,
      },
    ],
  },
]

export const DEFAULT_COLUMN_DEFS: ColDef = SHARED_DEFAULT_COLUMN_DEFS

export default COLUMN_DEFS
