import HighchartsReact from 'highcharts-react-official'
import { MutableRefObject, useCallback } from 'react'
import { useResizeDetector } from 'react-resize-detector'

export interface UseChartResizeProps {
  injectedRef: React.ForwardedRef<HighchartsReact.RefObject>
}

export type UseChartResize = (
  props: UseChartResizeProps
) => MutableRefObject<HighchartsReact.RefObject>

const useChartResize: UseChartResize = (props) => {
  const { injectedRef } = props
  const chartRef = injectedRef as MutableRefObject<HighchartsReact.RefObject>

  const onResize = useCallback((width, height) => {
    if (!chartRef?.current) return
    chartRef.current.chart.setSize(width)
  }, [])

  const { ref } = useResizeDetector({
    skipOnMount: true,
    handleHeight: false,
    onResize,
  })

  return ref
}

export default useChartResize
