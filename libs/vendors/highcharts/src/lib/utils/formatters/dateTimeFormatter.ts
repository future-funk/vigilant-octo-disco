import dayjs from 'dayjs'
import quarterOfYear from 'dayjs/plugin/quarterOfYear'
import type { Interval } from '../../types'

dayjs.extend(quarterOfYear)

const dateTimeFormatter = ({
  epoch,
  interval,
}: {
  epoch: number
  interval: Interval
}) => {
  const date = dayjs(epoch)

  switch (interval) {
    case 'QUARTER':
      return `${date.year()} Q${date.quarter()}`
    case 'MONTH':
      return date.format('YYYY MMM')
    case 'YEAR':
    default:
      return date.year()
  }
}

export default dateTimeFormatter
