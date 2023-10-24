import { DealDto } from '@bpd/bpd-web/investment-process/shared/data-access'
import { ValueGetterParams } from 'ag-grid-community'
import { find, isEqual } from 'lodash'

const getStaffNameByRoleFromParams = (
  params: ValueGetterParams,
  staffRole: string
) => {
  const { data }: { data: DealDto } = params
  const { staffs } = data
  const staff = find(staffs, (staff) => isEqual(staff.role, staffRole))
  if (staff && staff.ntid) {
    return !staff.initials && !staff.name
      ? staff.ntid
      : `${staff.initials} - ${staff.name}`
  }
  return ''
}

export default getStaffNameByRoleFromParams
