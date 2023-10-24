import { BpdSelect, BpdSelectProps } from '@bpd/bpd-web/shared/ui'
import { FC } from 'react'
import { MY_DEALS_ITEM_KEY, SELECT_ITEMS } from '../../constants'
import { useAppDispatch } from '@bpd/bpd-web/shared/store'
import { MyWorkspaceActions } from '../../data'
import { withTheme } from '@bpd/bpd-web/shared/theme'

export interface DealOverviewSelectProps extends BpdSelectProps {}

const StyledBpdSelect = withTheme(BpdSelect)(({ theme }) => {
  return {
    '&&& .ant-select-selector': {
      width: '200px',
    },
  }
})

export const DealOverviewSelect: FC<DealOverviewSelectProps> = (props) => {
  const dispatch = useAppDispatch()

  const handleChange = (value: string) => {
    dispatch(MyWorkspaceActions.setDealOverviewSelectValue(value))
  }

  return (
    <StyledBpdSelect
      items={SELECT_ITEMS}
      defaultValue={MY_DEALS_ITEM_KEY}
      onChange={handleChange}
      {...props}
    />
  )
}

export default DealOverviewSelect
