import { FC } from 'react'
import { AgGrid } from '@bpd/vendors/ag-grid'
import { GetOverviewByDimensionResult } from '@bpd/market-transactions/shared/data-access'
import { useGetOverviewGridColDef } from '../hooks'

export interface OverviewGridProps {
  data: GetOverviewByDimensionResult
  isError: boolean
  isFetching: boolean
  dimension: string
}

const OverviewGrid: FC<OverviewGridProps> = (props) => {
  const { data, isError, isFetching, dimension } = props

  const columnDefs = useGetOverviewGridColDef({ dimension })

  return (
    <AgGrid
      containerProps={{
        bordered: true,
        minHeight: 'unset',
        height: 'calc(100vh - 300px)',
      }}
      rowHeight={25}
      rowData={data}
      columnDefs={columnDefs}
      defaultColDef={{
        editable: false,
        sortable: true,
        filter: true,
        wrapText: true,
        autoHeight: true,
      }}
      suppressRowTransform={true}
      isLoading={isFetching}
      isError={isError}
    />
  )
}

export default OverviewGrid
