import { Company, GetCompanyResult } from '@bpd/market-transactions/shared/data-access'
import { AgGrid, useGrid } from '@bpd/vendors/ag-grid'
import { RowClickedEvent } from 'ag-grid-community'
import { FC, useState } from 'react'
import { DEFAULT_COLUMN_DEFS } from '../constants'
import { useGetCompanyGridColDef } from '../hooks'
import CompanyDecomposition from './CompanyDecomposition'

export interface CompanyGridProps {
  data: GetCompanyResult
  isFetching: boolean
  isError: boolean
  isLoading: boolean
}

const CompanyGrid: FC<CompanyGridProps> = (props) => {
  const { data, isFetching, isError, isLoading } = props
  const { ref, setContext } = useGrid()
  const [selectedRow, setSelectedRow] = useState<Company>(null)

  const handleDisplayedRowUpdated = () => {
    if (!ref) return
    const displayedRowCount = ref.api.getDisplayedRowCount()
    setContext({ displayedRowCount })
  }

  const handleRowClicked = (params: RowClickedEvent<any>) => {
    setSelectedRow(params.data)
  }

  const columnDefs = useGetCompanyGridColDef()

  return (
    <>
      <AgGrid
        columnDefs={columnDefs}
        containerProps={{
          bordered: true,
          width: '100%',
          height: 'calc(100vh - 330px)',
          minHeight: 'unset',
        }}
        defaultColDef={DEFAULT_COLUMN_DEFS}
        isFetching={isFetching}
        isError={isError}
        isLoading={isLoading}
        onDisplayedRowUpdated={handleDisplayedRowUpdated}
        onRowClicked={handleRowClicked}
        rowData={data}
        rowHeight={28}
      />
      {selectedRow ? (
        <CompanyDecomposition
          {...{ selectedRow, onCloseModal: () => setSelectedRow(null) }}
        />
      ) : null}
    </>
  )
}

export default CompanyGrid
