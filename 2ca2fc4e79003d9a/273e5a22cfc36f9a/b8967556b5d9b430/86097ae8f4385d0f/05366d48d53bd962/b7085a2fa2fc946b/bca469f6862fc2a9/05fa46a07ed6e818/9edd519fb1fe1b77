import { formatNumber, formatPercent } from '@bpd/utils/formatters'
import { utils as AgGridUtils } from '@bpd/vendors/ag-grid'
import { ValueFormatterParams } from 'ag-grid-community'
const { CellFormattingTypes } = AgGridUtils

export const CustomCellFormatingTypes = {
  ...CellFormattingTypes,
  number: {
    valueFormatter: ({ value }: ValueFormatterParams) =>
      formatNumber(value) || '-',
  },
  percentage2Dp: {
    valueFormatter: ({ value }: ValueFormatterParams) =>
      formatPercent(value, 2) || '-',
  },
}
