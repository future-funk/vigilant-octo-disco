import { AgGrid } from '@bpd/vendors/ag-grid'
import { size } from 'lodash'
import { useMemo } from 'react'
import { DEFAULT_COLUMN_DEFS } from '../../constants'
import { useGetCompanyDecompGridColDef } from '../../hooks'

const MAX_GRID_HEIGHT = 340
const ROW_HEIGHT = 25

interface DecompGridProps {
  rowData: any[]
  dimension: string
  viewType: string
}

const DecompGrid = (props: DecompGridProps) => {
  const { rowData, dimension, viewType } = props

  const gridHeight = useMemo(() => {
    const height = (size(rowData) + 1) * ROW_HEIGHT
    return height > MAX_GRID_HEIGHT ? MAX_GRID_HEIGHT : height
  }, [size(rowData)])

  const columnDefs = useGetCompanyDecompGridColDef({
    dimension,
    viewType,
  })

  return (
    <AgGrid
      columnDefs={columnDefs}
      containerProps={{
        width: 450,
        height: gridHeight,
      }}
      defaultColDef={DEFAULT_COLUMN_DEFS}
      rowData={rowData}
      rowHeight={ROW_HEIGHT}
    />
  )
}

export default DecompGrid
