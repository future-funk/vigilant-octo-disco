import { forEach, get, isNil, isEmpty, find } from 'lodash'
import { sqlOperator, searchPreset } from '../config'
import { LogisticsResponseDto } from '../data'

const validityChecker = <T = unknown>(value: T, type: string) => {
  if (typeof value === type) return true
  return false
}

const checkInClause = (record: string, filterSelectedValue: string[]) => {
  return !isNil(find(filterSelectedValue, (value) => value === record))
}

const conditionHelper = (
  records: LogisticsResponseDto,
  selectedFilterValues: Record<string, string[]>
) => {
  const conditionResp: boolean[] = []

  forEach(searchPreset, (preset) => {
    const { column, operator, typeOf } = preset

    const filterValue = get(selectedFilterValues, column)

    const layerValueForFilter = get(records, column)

    if (filterValue) {
      switch (operator) {
        case sqlOperator.IN:
          if (!isEmpty(filterValue)) {
            if (validityChecker(layerValueForFilter, typeOf)) {
              conditionResp.push(
                checkInClause(layerValueForFilter as string, filterValue)
              )
            } else conditionResp.push(false)
          }
          break
      }
    }
  })

  return !isEmpty(conditionResp) ? conditionResp.every(Boolean) : true
}

export default conditionHelper
