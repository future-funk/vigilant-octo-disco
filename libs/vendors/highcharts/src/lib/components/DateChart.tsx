import { Chart, ChartHeader } from '@bpd/vendors/highcharts'
import { FC } from 'react'
import { Interval } from '../types'
import { ChartProps } from './Chart'
import DateChartActions from './DateChartActions'

export interface DateChartProps extends ChartProps {
  activeInterval?: Interval
  title: string
  onChangeInterval: (value: Interval) => void
}

const DateChart: FC<DateChartProps> = (props) => {
  const { activeInterval, title, onChangeInterval, ...chartProps } = props

  return (
    <Chart
      header={
        <ChartHeader title={title}>
          <DateChartActions
            activeInterval={activeInterval}
            onClick={onChangeInterval}
          />
        </ChartHeader>
      }
      {...chartProps}
    />
  )
}

export default DateChart
