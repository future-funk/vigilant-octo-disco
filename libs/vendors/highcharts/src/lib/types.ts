import { formatPercent } from '@bpd/utils/formatters'

export type SeriesOptionsType = Omit<
  Highcharts.SeriesOptionsType,
  'data' | 'type'
> & {
  data: (number | string | { y: number | string; formattedX: string } | null)[]
  type?: string
}

export type AxisTypeValue = Highcharts.AxisTypeValue | 'percent' | 'numeric'

export type XAxisOptions = Highcharts.XAxisOptions & {
  interval?: Interval
  pointStart?: number | string
  type?: AxisTypeValue
}

export type YAxisOptions = Omit<Highcharts.YAxisOptions, 'type'> & {
  type: AxisTypeValue
}

export type ChartOptions = Omit<
  Highcharts.Options,
  'xAxis' | 'yAxis' | 'series'
> & {
  type?: string
  formatters?: { yAxis?: typeof formatPercent }
  series: SeriesOptionsType[]
  xAxis: XAxisOptions
  yAxis: YAxisOptions | YAxisOptions[]
}

export type Interval = 'YEAR' | 'QUARTER' | 'MONTH'
