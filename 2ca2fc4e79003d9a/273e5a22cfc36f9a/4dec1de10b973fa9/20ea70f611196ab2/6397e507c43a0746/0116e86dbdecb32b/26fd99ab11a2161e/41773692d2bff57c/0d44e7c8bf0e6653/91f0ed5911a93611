import { chain } from 'lodash'

export interface ColumnConfig {
  title: string
  key: string
}

const csvHelper = <T>(rows: T[], columnConfig: ColumnConfig[]) => {
  const refinedData: string[] = []

  const headers = chain(columnConfig)
    .mapValues(function (o) {
      return o.title
    })
    .values()
    .value()

  refinedData.push(headers.join(','))

  rows.forEach((row: T) => {
    const columnData: string[] = []
    columnConfig.forEach((column: ColumnConfig) => {
      const key = column?.key
      const value = `"${row[key] || ''}"`
      columnData.push(value)
    })
    refinedData.push(columnData.join(','))
  })

  const buffer = refinedData.join('\n')
  return new Blob([buffer], { type: 'text/csv;charset=utf8;' })
}

export default csvHelper
