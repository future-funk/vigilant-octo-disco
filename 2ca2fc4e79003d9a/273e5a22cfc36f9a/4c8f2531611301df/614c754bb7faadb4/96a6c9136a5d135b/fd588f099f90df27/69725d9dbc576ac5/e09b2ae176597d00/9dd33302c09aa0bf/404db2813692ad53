import {
  CommentaryModal,
  WorkloadCellRenderer,
} from '@bpd/bpd-web/investment-process/shared/core'
import { DealDto } from '@bpd/bpd-web/investment-process/shared/data-access'
import {
  getAccountingCellStyle,
  getAccountingNumber,
  getDate,
} from '@bpd/bpd-web/shared/core'
import { BpdNameCellRenderer } from '@bpd/bpd-web/shared/ui'
import { ColumnDefs } from '@bpd/vendors/ag-grid'
import { ICellRendererParams, ValueGetterParams } from 'ag-grid-community'

export const COLUMN_DEFS: ColumnDefs = [
  {
    headerName: 'Name',
    field: 'Name',
    width: 130,
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
    width: 100,
    valueGetter: (params: ValueGetterParams) =>
      getAccountingNumber(params?.data?.nec),
    cellStyle: getAccountingCellStyle,
  },
  {
    headerName: 'TIC (USD)',
    field: 'ticUsd',
    filter: 'agNumberColumnFilter',
    width: 100,
    valueGetter: (params: ValueGetterParams) =>
      getAccountingNumber(params?.data?.tic),
    cellStyle: getAccountingCellStyle,
  },
  {
    headerName: 'Workload',
    field: 'teamListPerc',
    width: 200,
    cellRenderer: WorkloadCellRenderer,
  },
  {
    headerName: 'General Commentary',
    field: 'comment',
    width: 250,
    minWidth: 250,
    cellRenderer: CommentaryModal,
    flex: 1,
  },
]
