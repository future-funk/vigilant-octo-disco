import { FC, useCallback, useState } from 'react'
import { Card, Stack } from '@gic/battlefield-ui-pack'
import OverviewActionBar from './OverviewActionBar'
import OverviewGrid from './OverviewGrid'
import OverviewChart from './OverviewChart'
import { useGrid } from '@bpd/vendors/ag-grid'
import { DIMENSION_TYPE } from '../constants'
import { useGetOverviewByDimension } from '../hooks'

export interface OverviewProps {}

const Overview: FC<OverviewProps> = () => {
  const [dimension, setDimension] = useState<string>(DIMENSION_TYPE.COUNTRY)
  const { data, isError, isFetching } = useGetOverviewByDimension(dimension)
  const { ref } = useGrid()

  const handleChange = (key: string, value: string) => {
    setDimension(value)
  }

  const handleExport = useCallback(() => {
    if (ref) {
      ref.api.exportDataAsExcel({
        fileName: `market-transactions-overview-${dimension}`,
      })
    }
  }, [ref, dimension])

  return (
    <Card
      title="Overview"
      stretch
      divider
      size="small"
      disableBorder
      leftActions={
        <OverviewActionBar {...{ dimension, handleChange, handleExport }} />
      }
    >
      <Stack direction="row" spacing={1} justifyContent={'space-between'}>
        <Stack sx={{ minWidth: 570 }}>
          <OverviewGrid {...{ data, isError, isFetching, dimension }} />
        </Stack>
        <Stack flexGrow={1}>
          <OverviewChart {...{ chartData: data, isError, isFetching }} />
        </Stack>
      </Stack>
    </Card>
  )
}

export default Overview
