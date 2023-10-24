import { useMemo } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { renderSlot, Slot } from '@bpd/ui/libs/react-slots'
import { Stack, StackProps } from '@gic/battlefield-ui-pack'
import { Spin } from 'antd'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HighchartsExportData from 'highcharts/modules/export-data'
import HighchartsExporting from 'highcharts/modules/exporting'
import Varwide from 'highcharts/modules/variwide'
import HighchartsMore from 'highcharts/highcharts-more'
import Treemap from 'highcharts/modules/treemap'
import { forwardRef, MutableRefObject, useEffect, useRef } from 'react'
import { ChartOptions } from '../types'
import getEnhancedOptions from '../utils/getEnhancedOptions'
import { useChartResize } from '../hooks'

Varwide(Highcharts)
HighchartsExportData(Highcharts)
HighchartsExporting(Highcharts)
HighchartsMore(Highcharts)
Treemap(Highcharts)

export interface ChartProps extends Omit<HighchartsReact.Props, 'options'> {
  options: ChartOptions
  loading?: boolean
  reflowOn?: unknown[]
  header?: Slot
  containerSx?: StackProps['sx']
}

const ChartContainer = withTheme(Stack)(({ theme }) => ({
  gap: theme.spacing(2),
  minHeight: '250px',
}))

const Chart = forwardRef<HighchartsReact.RefObject, ChartProps>(
  (props, injectedRef) => {
    const {
      options,
      loading = options.series.every(({ data }) => !data.length),
      reflowOn,
      header,
      containerSx,
    } = props

    const localRef = useRef<HighchartsReact.RefObject>(null)
    const ref =
      (injectedRef as MutableRefObject<HighchartsReact.RefObject>) ?? localRef

    const containerRef = useChartResize({ injectedRef: ref })

    useEffect(() => {
      if (!ref.current) return
      ref.current.chart.reflow()
    }, reflowOn)

    const memorizedOptions = useMemo(() => {
      return getEnhancedOptions(options)
    }, [options])
    return (
      <ChartContainer ref={containerRef} sx={containerSx}>
        {renderSlot(header)}
        {loading ? (
          <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
        ) : (
          <HighchartsReact
            highcharts={Highcharts}
            options={memorizedOptions}
            ref={ref}
          />
        )}
      </ChartContainer>
    )
  }
)

export default Chart
