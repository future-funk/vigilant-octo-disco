import { mapKeys, startCase } from 'lodash'
import { DealFormData } from '../configs'

const utilConvertCheckListKeysToTitleCase = (dealFormObj: unknown) => {
  if ((dealFormObj as DealFormData).checkList) {
    const updatedCheckList = mapKeys(
      (dealFormObj as DealFormData).checkList,
      (value, key) => startCase(key)
    )
    ;(dealFormObj as DealFormData).checkList = updatedCheckList
  }
  return dealFormObj
}

export default utilConvertCheckListKeysToTitleCase
