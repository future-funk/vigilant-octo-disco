import { DealStaffsDto } from '@bpd/bpd-web/investment-process/shared/data-access'
import { formatPercent } from '@bpd/utils/formatters'
import { ValueGetterParams } from 'ag-grid-community'
import { find, isEqual, isNil } from 'lodash'

const getStaffWorkloadPercentFromParamsByStaffRole = (
  params: ValueGetterParams,
  staffRole: string
) => {
  const { staffs }: { staffs: DealStaffsDto } = params.data
  const staff = find(staffs, (staff) => isEqual(staff.role, staffRole))
  if (isNil(staff) || isNil(staff?.commitment)) return ''
  return formatPercent(staff.commitment, 0)
}

export default getStaffWorkloadPercentFromParamsByStaffRole
