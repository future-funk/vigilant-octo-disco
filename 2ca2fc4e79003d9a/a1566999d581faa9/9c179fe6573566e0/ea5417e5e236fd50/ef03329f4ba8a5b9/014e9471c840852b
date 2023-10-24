import * as dayjs from 'dayjs'
import * as quarterOfYear from 'dayjs/plugin/quarterOfYear'
import { every, isNil, join } from 'lodash'

export interface FormatDateRangeConfig {
  start: string
  end: string
  separator?: string
  showQuarter?: boolean
}

const formatDateRange = (config: FormatDateRangeConfig) => {
  dayjs.extend(quarterOfYear)
  const { start, end, separator = ' - ', showQuarter = false } = config
  if (isNil(start) || isNil(end)) {
    return ''
  }
  const startDate = join(
    [
      dayjs(start).year(),
      ...(showQuarter ? [`Q${dayjs(start).quarter()}`] : []),
    ],
    ' '
  )
  const endDate = join(
    [dayjs(end).year(), ...(showQuarter ? [`Q${dayjs(end).quarter()}`] : [])],
    ' '
  )
  return every([start, end]) ? [startDate, endDate].join(separator) : ''
}

export default formatDateRange
