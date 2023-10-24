import { useMemo } from 'react'
import { map, chain, omit, size } from 'lodash'
import { ICellRendererParams } from 'ag-grid-community'
import { Typography } from '@gic/battlefield-ui-pack'
import { useAppSelector } from '@bpd/bpd-web/shared/store'
import { ColumnDefs } from '@bpd/vendors/ag-grid'
import { queries } from '@bpd/bpd-web/experts/shared/data-access'
import { BpdEmpty } from '@bpd/bpd-web/shared/ui'
import StyledAgGrid from './AgGrid.styles'
import { ExpertSelectors } from '../data'
import { ExpertTableCellRender } from './ExpertTableCellRender'
import DealModal from './DealModal'

const ExpertsTable = () => {
  const filters = useAppSelector(ExpertSelectors.getFilters)

  const { data: dealExpertsResult, ...restQueryResults } =
    queries.useGetDealExperts({ url: filters })

  const { columns, rows } = dealExpertsResult || {}

  const refs = map(rows, (row) => ({
    name: row.name,
    ...chain(columns)
      .map((column, index: number) => ({
        key: column,
        value: row?.cells[index]?.experts || [],
      }))
      .keyBy('key')
      .value(),
  }))

  const columnDefs: ColumnDefs = useMemo(
    () => [
      {
        headerName: 'Sector',
        field: 'name',
        pinned: true,
        sortable: true,
        width: 180,
        cellRenderer: (params: ICellRendererParams) => (
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 400, paddingLeft: 2, margin: '8px 0' }}
          >
            {params?.value}
          </Typography>
        ),
      },
      ...map(columns, (column) => ({
        headerName: column,
        field: column,
        cellRenderer: ExpertTableCellRender,
        minWidth: 240,
        cellRendererParams: (params: ICellRendererParams) => {
          const { value, data } = params
          return {
            experts: value?.value || {},
            viewBy: value?.key || '-',
            sector: data?.name || '-',
          }
        },
      })),
    ],
    [restQueryResults.isFetching]
  )

  return (
    <>
      <StyledAgGrid
        {...omit(restQueryResults, 'data')}
        suppressMovableColumns
        containerProps={{ bordered: true, height: '100%' }}
        columnDefs={columnDefs}
        rowData={size(refs) ? refs : null}
        defaultColDef={{
          wrapText: true,
          autoHeight: true,
        }}
        suppressRowHoverHighlight
        noRowsOverlayComponent={BpdEmpty}
      />

      <DealModal />
    </>
  )
}

export default ExpertsTable
