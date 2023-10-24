import { CellStyleFunc } from 'ag-grid-community'

export const getLastFyHeader = (fy: string) => `Mar-${fy}`
export const getFyHeader = (fy: string) => `Mar-${fy} Projections`

export const getLongTextCellStyle: CellStyleFunc = () => {
  return {
    whiteSpace: 'normal',
    height: 'auto',
    wordBreak: 'break-word',
  }
}
