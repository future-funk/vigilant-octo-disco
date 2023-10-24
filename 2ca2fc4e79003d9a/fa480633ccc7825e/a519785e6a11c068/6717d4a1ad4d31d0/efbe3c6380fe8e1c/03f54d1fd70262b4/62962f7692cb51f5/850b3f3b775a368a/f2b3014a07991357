import dayjs from 'dayjs'
import { map } from 'lodash'

function getDateFromQuarterString(quarterString: string): string {
  const [year, quarter] = map(quarterString.split(' Q'), (v) => parseInt(v))

  const date = dayjs()
    .year(year)
    .quarter(quarter)
    .startOf('quarter')
    .format('YYYY-MM-DD')
  return date
}

export default getDateFromQuarterString
