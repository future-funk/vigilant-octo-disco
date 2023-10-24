import { DownloadOutlined } from '@ant-design/icons'
import { BpdLink } from '@bpd/bpd-web/shared/ui'
import { formatNumber } from '@bpd/utils/formatters'
import { AgGrid } from '@bpd/vendors/ag-grid'
import { Card, Stack, Typography } from '@gic/battlefield-ui-pack'
import { AgGridReact } from 'ag-grid-react'
import { size } from 'lodash'
import pluralize from 'pluralize'
import { FC, useMemo, useRef } from 'react'
import { DEFAULT_COLUMN_DEFS, SALES_TYPE } from '../../constants'
import { useGetCompanyTxns, useGetTopSalesGridColDef } from '../../hooks'

const MAX_GRID_HEIGHT = 500
const ROW_HEIGHT = 25

interface CompanyTxnGridProps {
  timeframe: number
  companyCountry: string
  companyName: string
}

const CompanyTxnGrid: FC<CompanyTxnGridProps> = ({
  timeframe,
  companyCountry,
  companyName,
}: CompanyTxnGridProps) => {
  const gridRef = useRef<AgGridReact>()

  const handleClickExport = () => {
    if (gridRef) {
      gridRef.current.api.exportDataAsExcel({
        fileName: `market-transactions-company-transactions`,
      })
    }
  }

  const columnDefs = useGetTopSalesGridColDef(SALES_TYPE.PROPERTY_SALES, false)

  const {
    data: rowData = [],
    isError,
    isFetching,
    isLoading,
  } = useGetCompanyTxns({ timeframe, companyCountry, companyName })

  const gridHeight = useMemo(() => {
    const height = (rowData.length + 1) * ROW_HEIGHT
    return height > MAX_GRID_HEIGHT ? MAX_GRID_HEIGHT : height
  }, [rowData.length])

  return (
    <Card
      title={<CardTitle {...{ rowCount: size(rowData) }} />}
      size="small"
      divider
      disableBorder
      leftActions={
        <BpdLink
          startIcon={<DownloadOutlined />}
          onClick={handleClickExport}
          title="Download"
        />
      }
    >
      <AgGrid
        ref={gridRef}
        columnDefs={columnDefs}
        containerProps={{
          bordered: true,
          width: '100%',
          height: gridHeight,
        }}
        defaultColDef={{ ...DEFAULT_COLUMN_DEFS, autoHeight: false }}
        isFetching={isFetching}
        isError={isError}
        isLoading={isLoading}
        rowBuffer={50}
        rowData={rowData}
        rowHeight={ROW_HEIGHT}
        setupScrollbarPropsItems={[]}
      />
    </Card>
  )
}

export default CompanyTxnGrid

const CardTitle = ({ rowCount }: { rowCount: number }) => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography variant="subtitle1">Transactions</Typography>
      {rowCount ? (
        <Typography variant="body2">
          ({formatNumber(rowCount)} {pluralize('result', rowCount)})
        </Typography>
      ) : null}
    </Stack>
  )
}
