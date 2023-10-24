import { DownloadOutlined } from '@ant-design/icons'
import { BpdLink } from '@bpd/bpd-web/shared/ui'
import { useGrid } from '@bpd/vendors/ag-grid'
import { Card, Stack } from '@gic/battlefield-ui-pack'
import { FC, useCallback, useState } from 'react'
import { DEFAULT_TOP_SALES } from '../constants'
import { TopSalesParams } from '../types'
import TopSalesGrid from './TopSalesGrid'
import TopSalesMetrics from './TopSalesMetrics'

export interface TopSalesProps {}

const TopSales: FC<TopSalesProps> = () => {
  const { ref } = useGrid()
  const [salesParams, setTopSalesParams] =
    useState<TopSalesParams>(DEFAULT_TOP_SALES)

  const { topN, salesType, timeframe } = salesParams

  const handleClickExport = useCallback(() => {
    if (ref?.api) {
      ref.api.exportDataAsExcel({
        fileName: `market-transactions-top-${salesType}`,
      })
    }
  }, [salesType])

  return (
    <Card
      title="Top Sales"
      stretch
      divider
      size="small"
      disableBorder
      leftActions={
        <BpdLink
          startIcon={<DownloadOutlined />}
          onClick={handleClickExport}
          title="Download"
          sx={{ height: 28 }}
        />
      }
    >
      <Stack spacing={1}>
        <TopSalesMetrics {...{ setTopSalesParams }} />
        <TopSalesGrid {...{ topN, salesType, timeframe }} />
      </Stack>
    </Card>
  )
}

export default TopSales
