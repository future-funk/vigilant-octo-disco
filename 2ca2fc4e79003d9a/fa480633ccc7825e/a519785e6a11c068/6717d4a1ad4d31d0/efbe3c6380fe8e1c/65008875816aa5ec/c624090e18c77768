import { RowSpanParams } from 'ag-grid-community'
import { chain, get, head, isEqual } from 'lodash'

/**
 * Returns the value to display for a cell that spans multiple rows, based on the current group and the columns to the left of the current column.
 * @param {RowSpanParams} params - The parameters required for calculating row span.
 * @param {string[]} leftColumnIds - The ids of the columns to the left of the current column.
 * @returns {string} - The value to display for the cell.
 */
const getRowSpannedCellValue = (
  params: RowSpanParams,
  leftColumnIds: string[]
): string => {
  try {
    const { data, column, node, api } = params
    const { rowIndex } = node || {}
    const columnId = column?.getColId()
    const columnValue = get(data, columnId!)
    const currentLeftValues = leftColumnIds.map((leftColumnId) =>
      get(data, leftColumnId)
    )
    let previousLeftValues: string[] = []
    let previousGroupName = ''

    // Keep track of the first row index and group name for each unique value of the column and left column.
    const firstRows = chain(api.rowModel.rowsToDisplay)
      .map((row) => {
        if (row.rowIndex! < rowIndex!) {
          previousLeftValues = leftColumnIds.map((leftColumnId) =>
            get(row.data, leftColumnId)
          )
          previousGroupName = get(row.data, columnId)
        }
        const rowLeftValues = leftColumnIds.map((leftColumnId) =>
          get(row.data, leftColumnId)
        )
        return [
          `${rowLeftValues.join('_')}_${get(row.data, columnId)}`,
          row.rowIndex,
        ]
      })
      .uniqBy(head)
      .fromPairs()
      .value()

    // Get the index of the first row and group name for the current group.
    const {
      rowIndex: firstRowIndex,
      groupName: currentGroupName,
    }: { rowIndex: number; groupName: string } = {
      rowIndex: firstRows[`${currentLeftValues.join('_')}_${columnValue}`],
      groupName: columnValue,
    }

    // Set the value for the first row in the group, and store the current group name and left column values for the next row.
    const shouldDisplayGroupName =
      currentGroupName !== previousGroupName ||
      !isEqual(currentLeftValues, previousLeftValues)
    previousGroupName = currentGroupName
    previousLeftValues = currentLeftValues

    return rowIndex === firstRowIndex
      ? currentGroupName
      : shouldDisplayGroupName
      ? currentGroupName
      : ''
  } catch (error) {
    console.error(`Error while getting row spanned cell value: ${error}`)
    return ''
  }
}

export default getRowSpannedCellValue
