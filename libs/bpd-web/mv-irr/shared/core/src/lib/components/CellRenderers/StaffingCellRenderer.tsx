import { Box } from '@gic/battlefield-ui-pack'
import { ICellRendererParams } from 'ag-grid-community'
import { filter, map, size } from 'lodash'

const StaffingCellRenderer = (props: {
  params: ICellRendererParams
  roleName: string
}) => {
  const { params, roleName } = props
  const {
    data: { staffs },
  } = params
  const items = filter(staffs, (staff) => staff.roleName === roleName)

  return (
    <Box>
      {map(items, (item, index) => {
        return (
          <span key={item.ntid}>
            {item.initials ? (
              <span title={item.name}>{item.initials}</span>
            ) : (
              <span>{item.ntid}</span>
            )}
            {index < size(items) - 1 && ', '}
          </span>
        )
      })}
    </Box>
  )
}

export default StaffingCellRenderer
