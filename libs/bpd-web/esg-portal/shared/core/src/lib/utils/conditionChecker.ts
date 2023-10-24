import { searchPreset, searchPresetProps, sqlOperator } from '../configs'
import { ESGPortalRequestPayload } from '@bpd/esg-portal/shared/data-access'
import { get, isNil, isEmpty } from 'lodash'

const validityChecker = <T = unknown>(value: T, type: string) => {
  if (typeof value === type) return true
  return false
}

const checkInClause = (value: string, selectedValue: string[] | number[]) => {
  return selectedValue.some((v: string | number) => value === v)
}

const generateConditions = (
  record: ESGPortalRequestPayload,
  selectedFilterValues: Record<string, string[] | number[]>
) => {
  const conditionResp: boolean[] = []

  searchPreset.forEach((condition: searchPresetProps) => {
    const { field, operator, typeOf } = condition

    const filterValue = get(selectedFilterValues, field) //filter selected Value   [1, 2, 3]

    const layerValueForFilter = get(record, field) // filter value in record   1

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
      }
    }
  })
  return !isEmpty(conditionResp) ? conditionResp.every(Boolean) : true
}

export default generateConditions
