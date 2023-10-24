import Highcharts from 'highcharts'
import { merge, toNumber } from 'lodash'
import { DEFAULT_OPTIONS } from '../constants/default-options'
import type { ChartOptions, XAxisOptions, YAxisOptions } from '../types'
import dateTimeFormatter from './formatters/dateTimeFormatter'
import { formatPercent } from '@bpd/utils/formatters'
import getTooltipTemplate from './templates/getTooltipTemplate'

const FONT_FAMILY = `Jost, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
        'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`

const MONTHS_IN_INTERVAL = {
  YEAR: 12,
  QUARTER: 3,
  MONTH: 1,
}

const getDateTimePlotOptions = ({ interval, pointStart }: XAxisOptions) => ({
  pointInterval: MONTHS_IN_INTERVAL[interval!],
  pointIntervalUnit: 'month',
  pointStart,
})

const getPlotOptions = ({ xAxis }: ChartOptions) => ({
  series: {
    lineWidth: 3,
    marker: { radius: 2 },
    ...(xAxis?.type === 'datetime' && getDateTimePlotOptions(xAxis)),
  },
})

const getChartOptions = ({ type }: ChartOptions) => ({
  type,
  style: { fontFamily: FONT_FAMILY },
})

const getXAxisFormat = (value: number | string, xAxis: XAxisOptions) =>
  xAxis?.type === 'datetime'
    ? dateTimeFormatter({
        epoch: value as number,
        interval: xAxis.interval!,
      })
    : value

const getXAxisOptions = ({ xAxis }: ChartOptions) => ({
  labels: {
    formatter(this: Highcharts.AxisLabelsFormatterContextObject) {
      return getXAxisFormat(this.value, xAxis)
    },
    ...xAxis?.labels,
  },
})

const getYAxisFormat = (value: number | string, yAxis: YAxisOptions) => {
  const { type } = yAxis

  switch (type) {
    case 'percent':
      return formatPercent(value as number, 0)
    case 'numeric':
      return Intl.NumberFormat('en', { notation: 'compact' }).format(
        toNumber(value)
      )
    default:
      return value.toString()
  }
}

const getYAxisOption = (yAxis: YAxisOptions) => ({
  title: { text: undefined },
  reversedStacks: false,
  labels: {
    formatter(this: Highcharts.AxisLabelsFormatterContextObject) {
      return getYAxisFormat(this.value, yAxis)
    },
  },
})

const getYAxisOptions = ({ yAxis }: ChartOptions) =>
  Array.isArray(yAxis) ? yAxis.map(getYAxisOption) : getYAxisOption(yAxis)

const getTooltipOptions = (options: ChartOptions) => ({
  useHTML: true,
  formatter(
    this: Highcharts.TooltipFormatterContextObject & {
      point: Highcharts.Point & { formattedX: string }
    }
  ) {
    //formattedX is used in scatter point
    return getTooltipTemplate({
      ...this,
      x: this.x
        ? getXAxisFormat(this.point?.formattedX || this.x, options.xAxis)
        : '',
      y: this.y
        ? getYAxisFormat(
            this.y,
            this.series?.yAxis?.userOptions as YAxisOptions
          )
        : '',
    })
  },
})

const getEnhancedOptions = (options: ChartOptions): Highcharts.ChartOptions => {
  const injectedOptions = merge({}, { ...DEFAULT_OPTIONS }, { ...options })
  return merge(injectedOptions, {
    chart: getChartOptions(injectedOptions),
    plotOptions: getPlotOptions(injectedOptions),
    xAxis: injectedOptions.xAxis || getXAxisOptions(injectedOptions),
    yAxis: getYAxisOptions(injectedOptions),
    tooltip: injectedOptions.tooltip || getTooltipOptions(injectedOptions),
    exporting: { enabled: false },
  }) as Highcharts.ChartOptions
}

export default getEnhancedOptions
