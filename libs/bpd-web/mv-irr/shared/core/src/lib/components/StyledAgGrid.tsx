import { withTheme } from '@bpd/bpd-web/shared/theme'
import { AgGrid } from '@bpd/vendors/ag-grid'
import { CSSProperties } from 'react'

const StyledAgGrid = withTheme(AgGrid)(({ theme }) => {
  const headerLabelCommonStyle: CSSProperties = {
    justifyContent: 'flex-start',
  }
  return {
    '&&& .ag-header-group-cell-label': {
      ...headerLabelCommonStyle,
      borderBottom: `1px solid ${theme.palette.table.divider}`,
    },
    '&&& .ag-header-cell-label': headerLabelCommonStyle,
    '&&& .ag-cell': {
      height: 'auto',
      wordBreak: 'break-word',
      whiteSpace: 'normal',
    },
  }
})
export default StyledAgGrid
