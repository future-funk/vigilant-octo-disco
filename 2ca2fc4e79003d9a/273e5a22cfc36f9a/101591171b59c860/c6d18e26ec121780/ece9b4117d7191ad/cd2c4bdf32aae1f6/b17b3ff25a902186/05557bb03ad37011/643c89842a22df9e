import { filter, get } from 'lodash'
import { DealFormData } from '../configs'

const utilRemoveStaffIfNtidNotThere = (dealFormObj: unknown) => {
  ;(dealFormObj as DealFormData).staffs = filter(
    (dealFormObj as DealFormData).staffs,
    (staff) => !!get(staff, 'ntid')
  )
  return dealFormObj
}

export default utilRemoveStaffIfNtidNotThere
