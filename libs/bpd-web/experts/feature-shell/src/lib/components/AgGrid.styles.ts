import { withTheme } from '@bpd/bpd-web/shared/theme'
import { AgGrid } from '@bpd/vendors/ag-grid'

const StyledAgGrid = withTheme(AgGrid)(({ theme }) => {
  return {
    '&&& .ag-header-group-cell-label': {
      borderBottom: `1px solid ${theme.palette.table.grey}`,
    },
    '&&& .ag-header-cell': {
      borderRight: `1px solid ${theme.palette.table.border}`,
      textAlign: 'center',
    },
    '&&& .ag-header-cell-label': {
      justifyContent: 'flex-starts',
      fontWeight: 'bold',
    },
    '&&& .ag-pinned-left-header': {
      borderRight: `1px solid ${theme.palette.table.border}`,
    },
    '&&& .ag-cell': {
      height: 'auto',
      minHeight: '100%',
      wordBreak: 'break-word',
      alignContent: 'flex-start',
      flexWrap: 'wrap',
      borderRight: `1px solid ${theme.palette.table.grey} !important`,
      padding: '4px 0 !important',
    },
    '&&& .ag-cell-wrapper, .ag-cell-value': { width: '100%' },
    '&&& .ag-row': {
      cursor: 'default',
      borderBottom: `1px solid ${theme.palette.table.grey}`
    },
    '&&& .ag-root-wrapper:hover': {
      '.ps > .ps__rail-x': { opacity: 0.6 },
    },
    '&&& .sub-cell': { padding: '4px 16px', gap: '5px' },
    '&&& .selected-sub-cell': {
      backgroundColor: `${theme.palette.primary.cardHover}`,
      borderLeft: `4px solid ${theme.palette.primary.main}`,
      padding: '4px 12px',
      gap: '5px'
    },
    '&&& .ag-pinned-left-cols-container': { borderRight: '0px !important'}
  }
})

export default StyledAgGrid
