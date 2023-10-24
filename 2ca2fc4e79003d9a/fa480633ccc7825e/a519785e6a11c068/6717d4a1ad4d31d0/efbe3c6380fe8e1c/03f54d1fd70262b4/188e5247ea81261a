import { withTheme } from '@bpd/bpd-web/shared/theme'
import { SelectItemInterface } from '@bpd/bpd-web/shared/ui'
import { Box, Select, Typography } from '@gic/battlefield-ui-pack'
import { find, get, isEqual } from 'lodash'
import { FC } from 'react'
import CellLoader from './CellLoader'

interface HeaderDropdownItem {
  key: string | number
  value: string | number
  label: string | number
}

export interface HeaderDropdownProps {
  isLoading?: boolean
  value: string | number
  items: HeaderDropdownItem[]
  onChange: (value: string) => void
  disableDropdown?: boolean
}

const StyledSelect = withTheme(Select)({
  fontSize: 'inherit',
  '&:not(.ant-select-customize-input) > .ant-select-selector': {
    background: 'inherit',
    border: 0,
    fontSize: 'inherit',
  },
  '& .ant-select-selection-item': {
    color: 'inherit',
    fontWeight: 'inherit',
    fontSize: 'inherit',
  },
  '& .ant-select-arrow': { fontSize: 10 },
})

export const HeaderDropdown: FC<HeaderDropdownProps> = (props) => {
  const { isLoading, items, onChange, value, disableDropdown } = props

  return (
    <Box className="ag-cell-label-container">
      <Box className="ag-header-cell-label">
        {isLoading ? (
          <CellLoader />
        ) : disableDropdown ? (
          <Typography variant="subtitle3">
            {get(
              find(items, (item) => {
                const { value: headerValue } = item
                return isEqual(headerValue, value)
              }),
              'label'
            )}
          </Typography>
        ) : (
          <StyledSelect
            items={items as unknown as SelectItemInterface[]}
            value={value}
            onChange={onChange}
          />
        )}
      </Box>
    </Box>
  )
}

export default HeaderDropdown
