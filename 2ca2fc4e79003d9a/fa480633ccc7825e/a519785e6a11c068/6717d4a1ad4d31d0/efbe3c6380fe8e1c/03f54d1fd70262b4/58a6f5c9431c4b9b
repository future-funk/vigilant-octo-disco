import { FilterOutlined } from '@ant-design/icons'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { Button, Stack } from '@gic/battlefield-ui-pack'
import { FC } from 'react'
import CellRange, { CellRangeProps } from './CellRange'

export interface CellRangeBtnProps extends CellRangeProps {
  title: string
}

const StyledButton = withTheme(Button)(({ theme }) => ({
  alignItems: 'center',
  background: 'transparent',
  border: 0,
  color: theme.palette.primary.main,
  display: 'flex',
  fontSize: 'inherit',
  padding: 0,
  '&:focus, &:hover': { background: 'transparent' },
  '.anticon': { lineHeight: 1.3 },
}))

const CellRangeFilterBtn: FC<CellRangeProps> = ({ title, ...rest }) => (
  <CellRange {...rest}>
    <StyledButton icon={<FilterOutlined />}>{title}</StyledButton>
  </CellRange>
)

export default CellRangeFilterBtn
