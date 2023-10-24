import { map } from 'lodash'
import { AnalyticsResponseDto } from '../data'

const getAnalyticsChartDataByType = (records: AnalyticsResponseDto[]) => {
  return map(records, (record) => ({
    name: record.country,
    data: [record.totalGlaSqm],
  }))
}

export default getAnalyticsChartDataByType
