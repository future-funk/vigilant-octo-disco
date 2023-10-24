import { AgGrid } from '@bpd/vendors/ag-grid'
import { FC } from 'react'
import { DEFAULT_COLUMN_DEFS } from '../constants'
import { useGetTopSales, useGetTopSalesGridColDef } from '../hooks'

export interface TopSalesGridProps {
  topN: number
  salesType: string
  timeframe: number
}

const TopSalesGrid: FC<TopSalesGridProps> = (props) => {
  const { topN, salesType, timeframe } = props

  const { data, isError, isFetching, isLoading } = useGetTopSales({
    topN,
    salesType,
    timeframe,
  })

  const columnDefs = useGetTopSalesGridColDef(salesType)

  return (
    <AgGrid
      columnDefs={columnDefs}
      containerProps={{
        bordered: true,
        width: '100%',
        height: 'calc(100vh - 320px)',
      }}
      defaultColDef={DEFAULT_COLUMN_DEFS}
      isFetching={isFetching}
      isError={isError}
      isLoading={isLoading}
      rowData={data}
      setupScrollbarPropsItems={[]}
    />
  )
}

export default TopSalesGrid
