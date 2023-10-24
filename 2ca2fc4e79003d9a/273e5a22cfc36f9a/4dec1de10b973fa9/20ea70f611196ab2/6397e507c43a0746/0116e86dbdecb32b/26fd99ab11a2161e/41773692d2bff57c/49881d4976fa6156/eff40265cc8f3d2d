import { FC } from 'react'
import { Chart } from '@bpd/vendors/highcharts'
import { Box } from '@gic/battlefield-ui-pack'
import { useAppPalette } from '@bpd/bpd-web/shared/theme'
import { BpdSuspense } from '@bpd/bpd-web/shared/ui'
import { ChartRecord, getInsightChartData } from '../utils'

export interface DirectoryInsightChartProps {
  title?: string
  type: string
  records: ChartRecord[]
  team: string
  isError?: boolean
  isLoading?: boolean
  isReflow?: boolean
}

const DirectoryInsightChart: FC<DirectoryInsightChartProps> = (props) => {
  const { title, type, records, isError, isLoading, isReflow, team } = props
  const palette = useAppPalette()

  const chartOptions = getInsightChartData(type, records, team, title)

  return (
    <BpdSuspense error={isError} loading={isLoading}>
      <Box>
        {!!chartOptions && (
          <Chart
            reflowOn={[isReflow]}
            options={{ ...chartOptions, colors: [palette.primary.main] }}
          />
        )}
      </Box>
    </BpdSuspense>
  )
}

export default DirectoryInsightChart
