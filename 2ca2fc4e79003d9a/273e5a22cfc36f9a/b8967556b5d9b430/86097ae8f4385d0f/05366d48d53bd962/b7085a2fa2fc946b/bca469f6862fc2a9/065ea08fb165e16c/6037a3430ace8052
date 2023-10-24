import { RowClassParams, RowClickedEvent, RowStyle } from 'ag-grid-community'
import { AgGridReact } from 'ag-grid-react'
import { initial, last, uniq } from 'lodash'
import { FC, useMemo, useRef, useState } from 'react'
import { DownloadOutlined } from '@ant-design/icons'
import { DEFAULT_COLUMN_DEFS } from '@bpd/vendors/ag-grid'
import { BpdLink } from '@bpd/bpd-web/shared/ui'
import { Card } from '@gic/battlefield-ui-pack'
import { useGetPortfolioSummary } from '../hooks'
import { getPortfolioSummaryColDef } from '../utils'
import StyledAgGrid from './StyledAgGrid'

export interface PortfolioSummaryGridProps {
  activeFy: string
  isLocalCurrency: boolean
  setSelectedParams: ({ strategy, project_currency }) => void
}

const MAX_GRID_HEIGHT = 300
const ROW_HEIGHT = 28

const PortfolioSummaryGrid: FC<PortfolioSummaryGridProps> = (props) => {
  const { activeFy, isLocalCurrency, setSelectedParams } = props
  const { data, isFetching, isError, isLoading } = useGetPortfolioSummary()

  const gridRef = useRef<AgGridReact>()
  const [selectedRowId, setSelectedRowId] = useState<string>('')

  const handleRowClicked = (params: RowClickedEvent<any>) => {
    const { node, data, api } = params
    const { strategy, currency } = data

    const id = `${strategy}-${currency}`
    if (node.rowPinned || selectedRowId === id) {
      api.deselectAll()
      setSelectedRowId(null)
      setSelectedParams({
        strategy: 'All',
        project_currency: 'All',
      })
    } else {
      node.setSelected(true, true)
      setSelectedRowId(id)
      setSelectedParams({ strategy, project_currency: currency })
    }
  }

  const handleGetRowStyle = (params: RowClassParams): RowStyle => {
    if (params.node.rowPinned) {
      return { fontWeight: 'bold' }
    }
    return {}
  }

  const ccList = useMemo(() => {
    if (!data) {
      return []
    }
    return uniq(data.map((p) => p.currency).filter((ccy) => ccy !== 'All'))
  }, [data])

  const columnDefs = useMemo(
    () => getPortfolioSummaryColDef(activeFy, ccList, isLocalCurrency),
    [activeFy, ccList, isLocalCurrency]
  )

  const gridHeight = useMemo(() => {
    if (!data) {
      return MAX_GRID_HEIGHT
    }
    const height = (data.length + 4) * ROW_HEIGHT + 50
    return height > MAX_GRID_HEIGHT ? MAX_GRID_HEIGHT : height
  }, [data?.length])

  const handleClickExport = () => {
    if (gridRef) {
      gridRef.current.api.exportDataAsExcel({
        fileName: `IRR Portfolio Summary`,
      })
    }
  }

  return (
    <Card
      title="Portfolio Summary"
      stretch
      disableBorder
      wrapperSx={{ height: 'auto' }}
      size="small"
      leftActions={
        <BpdLink
          startIcon={<DownloadOutlined />}
          onClick={handleClickExport}
          title="Download"
        />
      }
    >
      <StyledAgGrid
        ref={gridRef}
        columnDefs={columnDefs}
        containerProps={{
          bordered: true,
          width: '100%',
          height: gridHeight,
        }}
        defaultColDef={{
          ...DEFAULT_COLUMN_DEFS,
          wrapHeaderText: true,
          autoHeaderHeight: true,
        }}
        isFetching={isFetching}
        isError={isError}
        isLoading={isLoading}
        onRowClicked={handleRowClicked}
        getRowStyle={handleGetRowStyle}
        pinnedBottomRowData={[last(data)]}
        rowData={initial(data)}
        rowHeight={ROW_HEIGHT}
        rowSelection="single"
        setupScrollbarPropsItems={[]}
      />
    </Card>
  )
}

export default PortfolioSummaryGrid
