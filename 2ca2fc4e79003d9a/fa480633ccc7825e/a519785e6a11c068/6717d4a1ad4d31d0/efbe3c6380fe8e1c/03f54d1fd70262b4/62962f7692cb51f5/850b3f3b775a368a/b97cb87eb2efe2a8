import { range } from 'lodash'
import dayjs from 'dayjs'

export interface SliderMark {
  value: number
  label: string
}

function generateYearMarks(
  startDate: dayjs.ConfigType,
  endDate: dayjs.ConfigType
): SliderMark[] {
  const startYear = dayjs(startDate).year()
  const endYear = dayjs(endDate).year()

  return range(startYear, endYear + 1).map((year) => ({
    value: year,
    label: year.toString(),
  }))
}

export default generateYearMarks
