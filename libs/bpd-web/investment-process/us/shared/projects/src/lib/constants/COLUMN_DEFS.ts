import {
  SHARED_COLUMN_DEFS,
  SHARED_DEFAULT_COLUMN_DEFS,
  SHARED_DEFAULT_SIDE_BAR_DEFS,
} from '@bpd/bpd-web/investment-process/us/shared/core'
import { ColumnDefs } from '@bpd/vendors/ag-grid'
import { ColDef, SideBarDef } from 'ag-grid-community'

export const DEFAULT_SIDE_BAR_DEFS: SideBarDef = SHARED_DEFAULT_SIDE_BAR_DEFS

const COLUMN_DEFS: ColumnDefs = SHARED_COLUMN_DEFS

export const DEFAULT_COLUMN_DEFS: ColDef = SHARED_DEFAULT_COLUMN_DEFS

export default COLUMN_DEFS
