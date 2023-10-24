import {
  GetTxnByDimensionResult,
  GetYtdTxnByDimensionResult,
} from '@bpd/market-transactions/shared/data-access'
import { AgGrid } from '@bpd/vendors/ag-grid'
import { GridReadyEvent, RowClassParams, RowStyle } from 'ag-grid-community'
import { initial, last } from 'lodash'
import { FC } from 'react'
import { DEFAULT_COLUMN_DEFS } from '../constants'
import { useGetTxnGridColDef, useTransformTxnGridData } from '../hooks'

const ROW_HEIGHT = 25

export interface TxnGridProps {
  ytdData: GetYtdTxnByDimensionResult
  txnData: GetTxnByDimensionResult
  timeframe: number
  frequency: string
}

const TxnGrid: FC<TxnGridProps> = (props) => {
  const { ytdData, txnData, frequency, timeframe } = props

  const { rows, lastHeader, ytdHeader } = useTransformTxnGridData(
    txnData,
    ytdData,
    frequency,
    timeframe
  )

  const columnDefs = useGetTxnGridColDef({
    lastHeader,
    ytdHeader,
  })

  const handleGridSizeChanged = (event: GridReadyEvent) => {
    event.api.setDomLayout('autoHeight')
  }

  const handleGetRowStyle = (params: RowClassParams): RowStyle => {
    if (params.node.rowPinned) {
      return { fontWeight: 'bold' }
    }
    return {}
  }

  return (
    <AgGrid
      columnDefs={columnDefs}
      containerProps={{
        bordered: true,
        width: 600,
        minHeight: 'unset',
        mb: 3,
      }}
      defaultColDef={DEFAULT_COLUMN_DEFS}
      getRowStyle={handleGetRowStyle}
      onGridReady={handleGridSizeChanged}
      pinnedBottomRowData={[last(rows)]}
      rowData={initial(rows)}
      rowHeight={ROW_HEIGHT}
      suppressRowTransform={true}
    />
  )
}

export default TxnGrid
