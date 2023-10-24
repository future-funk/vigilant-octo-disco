import { withTheme } from '@bpd/bpd-web/shared/theme'
import { Stack } from '@gic/battlefield-ui-pack'
import { Checkbox } from 'antd'
import type { LegendData } from '../types'

export interface LegendItemProps extends Omit<LegendData, 'color'> {
  onChange: (checked: boolean) => void
}

const StyledContainer = withTheme(Stack)(() => ({}))

const LayersControlItem = (props: LegendItemProps) => {
  const { label, visible, onChange } = props

  return (
    <StyledContainer>
      <Checkbox
        checked={visible}
        onChange={(event) => onChange(event.target.checked)}
      >
        {label}
      </Checkbox>
    </StyledContainer>
  )
}

export default LayersControlItem
