import {
  formatRelativeNumber,
  formatPercent,
  formatNumber,
} from '@bpd/utils/formatters'
import { isNil, get } from 'lodash'
import dayjs, { Dayjs } from 'dayjs'
import Highcharts from 'highcharts'
import relativeTime from 'dayjs/plugin/relativeTime'
import chartTypeConfig from '../configs/charts'
import { TYPE } from '../constants'
export interface ChartRecord {
  count: number | string
  maxcr: number | string
  mincr: number | string
}

const getChartDataByType = (type: string, records: ChartRecord[]) => {
  dayjs.extend(relativeTime)
  if (type === TYPE.CHART_DEAL_DATE) {
    return (records || []).map((record: ChartRecord) => [record.count])
  }

  return (records || []).map((record: ChartRecord) => [
    record.mincr,
    record.count,
  ])
}

const getFormattedTooltip = (
  type: string,
  options: Highcharts.TooltipFormatterContextObject & { series: { basePointRange: number }},
  maxLimit: number | Dayjs
) => {
  const start = Number(options.x)
  const end = start + Number(options?.series?.basePointRange)
  const dealCount = options?.y || 0

  let bodyTemplate = ''

  switch (type) {
    case TYPE.CHART_CAP_RATE:
      bodyTemplate +=
        maxLimit > end
          ? `${formatPercent(start)} ~ ${formatPercent(end)}`
          : ` > ${formatPercent(start)}`
      break
    case TYPE.CHART_DEAL_DATE: {
      bodyTemplate += ``
      const relativeTimeNow = dayjs(`${start}-01-01`).fromNow()
      switch (relativeTimeNow) {
        case '3 months ago':
          bodyTemplate = 'Last 3 months'
          break
        case 'a year ago':
          bodyTemplate = 'Last 3-12 months'
          break
        case '3 years ago':
          bodyTemplate = 'Last 1-3 years'
          break
        case '5 years ago':
          bodyTemplate = 'Last 3-5 years'
          break
        default:
          bodyTemplate = 'Last >5 years'
      }
      break
    }
    default:
      bodyTemplate +=
        maxLimit > end
          ? `${formatRelativeNumber(start, 0)} ~ ${formatRelativeNumber(end, 0)}`
          : ` > ${formatRelativeNumber(start, 0)}`
      break
  }

  return `${bodyTemplate}<br/>  ${formatNumber(dealCount)} deals`
}

const getCategories = (
  type: string,
  records: ChartRecord[],
  maxLimit: number | Dayjs
) => {
  if (type === TYPE.CHART_DEAL_DATE) {
    return (records || []).map((record: ChartRecord) =>
      dayjs(record.mincr).year() < dayjs(maxLimit).year()
        ? dayjs(maxLimit).year().valueOf()
        : dayjs(record.mincr).year().valueOf()
    )
  }

  return null
}

const generateChartData = (
  type: string,
  records: ChartRecord[],
  team: string,
  title?: string
) => {
  if (!type) return

  const typeConfig = chartTypeConfig[type]
  if (isNil(typeConfig)) return

  const { maxLimit, tickInterval } = get(typeConfig.options, team)
    ? typeConfig.options[team]
    : typeConfig.options['default']

  if (!isNil(typeConfig)) {
    return {
      ...typeConfig,
      title: { ...typeConfig.title, text: title },
      tooltip: {
        ...typeConfig?.tooltip,
        formatter(this: Highcharts.TooltipFormatterContextObject) {
          return getFormattedTooltip(type, this, maxLimit)
        },
      },
      xAxis: {
        ...(tickInterval
          ? { ...typeConfig.xAxis, tickInterval }
          : typeConfig.xAxis),
        categories: getCategories(type, records, maxLimit),
      },
      series: [
        {
          data: getChartDataByType(type, records),
        },
      ],
    }
  }

  return {}
}

export default generateChartData
