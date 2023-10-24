import { RowSpanParams } from 'ag-grid-community'
import { chain, get, isEmpty, range } from 'lodash'

/**
 * Returns the number of rows to span based on the current group and the columns to the left of the current column.
 * @param {RowSpanParams} params - The parameters required for calculating row span.
 * @param {string[]} leftColumnIds - The ids of the columns to the left of the current column.
 * @returns {number} - The number of rows to span.
 */
const calculateRowSpan = (
  params: RowSpanParams,
  leftColumnIds: string[]
): number => {
  try {
    const { data, column, node, api } = params
    const { rowIndex } = node || {}
    const columnId = column?.getColId()
    const currentValue = get(data, columnId!)
    const leftColumnValues = leftColumnIds.map((leftColumnId) =>
      get(data, leftColumnId)
    )

    // Iterate over all rows in the current group.
    const count = chain(range(rowIndex! + 1, api.getDisplayedRowCount()))
      .map((index) => api.getDisplayedRowAtIndex(index)?.data)
      .takeWhile((rowData) => {
        return (
          rowData[columnId!] === currentValue &&
          leftColumnIds.every((leftColumnId, idx) => {
            const leftColumnValue = leftColumnValues[idx]
            return (
              rowData[leftColumnId] === leftColumnValue ||
              isEmpty(rowData[leftColumnId])
            )
          })
        )
      })
      .size()
      .value()

    return count + 1 // It will hold index, so need to add by 1.
  } catch (error) {
    console.error(`Error while calculating row span: ${error}`)
    return 1
  }
}

export default calculateRowSpan;
