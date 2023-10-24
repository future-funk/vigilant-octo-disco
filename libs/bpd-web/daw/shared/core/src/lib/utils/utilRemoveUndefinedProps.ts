import { compact, isArray, isEmpty, isUndefined, omitBy } from 'lodash'
import { DealFormData } from '../configs'

const utilRemoveUndefinedProps = (dealFormObj: unknown): unknown => {
  return omitBy(dealFormObj as DealFormData, (value: unknown) => {
    if (isArray(value)) {
      return isEmpty(compact(value))
    }
    return isUndefined(value)
  })
}

export default utilRemoveUndefinedProps
