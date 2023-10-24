import { ValueGetterParams } from 'ag-grid-community'
import { find, isEqual, isNil } from 'lodash'

const getStaffingCommitmentFromParamsByStaffRole = (
  params: ValueGetterParams,
  role: string
) => {
  if (!isNil(params.data)) {
    const { staffs } = params.data
    const staff = find(staffs, (staff) => isEqual(staff.role, role))
    return staff && staff.commitment >= 0 ? staff.commitment : null
  }
}

export default getStaffingCommitmentFromParamsByStaffRole
