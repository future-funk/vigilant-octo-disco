import { Staff } from '@bpd/mv-irr/shared/data-access'
import { Box } from '@gic/battlefield-ui-pack'
import { filter, map, size } from 'lodash'

export const StaffName = (props: { staffs: Staff[]; roleName: string }) => {
  const { staffs, roleName } = props
  const items = filter(staffs, (staff) => staff.roleName === roleName)

  if (!size(staffs)) {
    return <span>-</span>
  }
  return (
    <Box>
      {map(items, (item, index) => (
        <Box key={item.ntid}>
          {item?.initials ? `${item.initials} - ${item.name}` : item.ntid}
          {index < size(items) - 1 && ','}
        </Box>
      ))}
    </Box>
  )
}
export default StaffName
