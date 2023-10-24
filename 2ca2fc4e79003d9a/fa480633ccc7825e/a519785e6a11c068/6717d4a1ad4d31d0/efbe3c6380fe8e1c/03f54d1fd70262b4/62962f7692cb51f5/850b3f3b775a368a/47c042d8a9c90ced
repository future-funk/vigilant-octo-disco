import { range } from 'lodash'
import dayjs from 'dayjs'
import { SliderMark } from './generateYrMarks'

const generateYrQMarks = (
  startDate: dayjs.ConfigType,
  endDate: dayjs.ConfigType
): SliderMark[] => {
  const startMonth = dayjs(startDate).month()
  const endMonth = dayjs(endDate).month()
  const startYear = dayjs(startDate).year()
  const endYear = dayjs(endDate).year()

  const yearQuarters = range(startYear, endYear + 1).flatMap((year) => {
    const startQuarter = year === startYear ? Math.ceil(startMonth / 3) : 1
    const endQuarter = year === endYear ? Math.ceil(endMonth / 3) : 4
    return range(startQuarter, endQuarter + 1).map((q, index) => ({
      value: year * 4 + q - 4,
      label: `${year} Q${q}`,
    }))
  })

  return yearQuarters
}

export default generateYrQMarks
