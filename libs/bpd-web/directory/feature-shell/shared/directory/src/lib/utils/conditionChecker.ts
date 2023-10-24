import { searchPreset, searchPresetProps, sqlOperator } from '../configs'
import {
  Directory,
} from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'
import { toNumber, includes, get, isNil, isEmpty } from 'lodash'

interface ConditionCheckerItem<T> extends Directory {}

const validityChecker = <T = unknown>(value: T, type: string) => {
  if (typeof value === type) return true
  return false
}

const checkInClause = (value: string, selectedValue: string[]) => {
  return selectedValue.some((v: string) => value.includes(v))
}

const checkRangeClause = (
  value: number,
  operator: string,
  selectedValue: number | number[]
) => {
  if (operator === sqlOperator.GTE) {
    return value >= selectedValue ? true : false
  } else if (operator === sqlOperator.LTE) {
    return value <= selectedValue ? true : false
  } else if (operator === sqlOperator.RANGE) {
    return value >= selectedValue[0] && value <= selectedValue[1]
  }
  return false
}

const generateConditions = <T>(
  record: ConditionCheckerItem<T>,
  selectedFilterValues: Record<string, any>
) => {
  const conditionResp: boolean[] = []
  const { bpInvStatus } = record

  searchPreset
    .filter((condition: searchPresetProps) => {
      return condition.applicableTypes.some((type) =>
        includes(bpInvStatus, type)
      )
    })
    .forEach((condition: searchPresetProps) => {
      const { field, filter, operator, typeOf } = condition

      const filterValue = get(selectedFilterValues, filter) //filter selected Value
      const layerValueForFilter = get(record, field) // filter value in record

      if (!isNil(filterValue)) {
        switch (operator) {
          case sqlOperator.IN: {
            if (!isEmpty(filterValue)) {
              if (validityChecker(layerValueForFilter, typeOf)) {
                conditionResp.push(
                  checkInClause(layerValueForFilter as string, filterValue)
                )
              } else conditionResp.push(false)
            }
            break
          }
          case sqlOperator.GTE:
          case sqlOperator.LTE: {
            if (filterValue) {
              if (validityChecker(layerValueForFilter, typeOf)) {
                conditionResp.push(
                  checkRangeClause(
                    toNumber(layerValueForFilter),
                    operator,
                    filterValue
                  )
                )
              } else conditionResp.push(false)
            }
            break
          }
          case sqlOperator.RANGE: {
            if (!isEmpty(filterValue)) {
              if (validityChecker(layerValueForFilter, typeOf)) {
                conditionResp.push(
                  checkRangeClause(
                    toNumber(layerValueForFilter),
                    operator,
                    filterValue
                  )
                )
              } else conditionResp.push(false)
            }
            break
          }
        }
      }
    })
  return !isEmpty(conditionResp) ? conditionResp.every(Boolean) : true
}

export default generateConditions
