import {
  CommentaryModal,
  StaffingCellRenderer,
} from '@bpd/bpd-web/investment-process/shared/core'
import { DealDto } from '@bpd/bpd-web/investment-process/shared/data-access'
import { SHARED_DEFAULT_COLUMN_DEFS } from '@bpd/bpd-web/investment-process/us/shared/core'
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
  ValueGetterParams,
} from 'ag-grid-community'

export const COLUMN_DEFS: ColumnDefs = [
  {
    headerName: 'Name',
    field: 'name',
    width: 130,
    autoHeight: true,
    cellRenderer: BpdNameCellRenderer,
    ...(window.innerWidth <= 1180 && { pinned: 'left' }),
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
    headerName: 'Approval Status',
    field: 'approvalStatus',
  },
  {
    headerName: 'NEC (USD)',
    field: 'necUsd',
    filter: 'agNumberColumnFilter',
    width: 150,
    valueGetter: (params: ValueGetterParams) =>
      getAccountingNumber(params?.data?.nec),
    cellStyle: getAccountingCellStyle,
  },
  {
    headerName: 'TIC (USD)',
    field: 'ticUsd',
    filter: 'agNumberColumnFilter',
    width: 150,
    valueGetter: (params: ValueGetterParams) =>
      getAccountingNumber(params?.data?.tic),
    cellStyle: getAccountingCellStyle,
  },
  {
    headerName: 'Staffing',
    field: 'teamList',
    width: 200,
    enableRowGroup: false,
    autoHeight: true,
    cellRenderer: StaffingCellRenderer,
  },
  {
    headerName: 'General Commentary',
    field: 'comment',
    autoHeight: true,
    width: 250,
    minWidth: 250,
    cellRenderer: CommentaryModal,
    flex: 1,
  },
]

export const DEFAULT_COLUMN_DEFS: ColDef = SHARED_DEFAULT_COLUMN_DEFS
