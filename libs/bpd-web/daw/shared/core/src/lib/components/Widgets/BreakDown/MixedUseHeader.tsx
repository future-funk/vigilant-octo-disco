import { FC } from 'react'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import {
  BpdCheckbox,
  BpdRuleConfig,
  SchemaFieldHeader,
  useSchemaRule,
} from '@bpd/bpd-web/shared/ui'
import { Stack } from '@gic/battlefield-ui-pack'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'

export interface MixedUseSectorHeaderProps {
  isVisible?: boolean
  value?: boolean
  onChange?: (e: CheckboxChangeEvent) => void
  required?: BpdRuleConfig[]
  disabled?: boolean
  arrayIndices: Record<string, number>
}

const StyledContainer = withTheme(Stack)({
  flexDirection: 'row',
  height: 20,
  justifyContent: 'space-between',
})

const MixedUseSectorHeader: FC<MixedUseSectorHeaderProps> = ({
  isVisible,
  value,
  onChange,
  disabled,
  required,
  arrayIndices,
}) => {
  const isRequired = useSchemaRule({
    config: required as BpdRuleConfig[],
    arrayIndices,
  })

  return (
    <StyledContainer>
      <SchemaFieldHeader title="Sector" required={isRequired} />
      {isVisible ? (
        <BpdCheckbox
          checked={value}
          title={'Mixed Use'}
          wrapperBoxProps={{ width: 'fit-content' }}
          onChange={onChange}
          disabled={disabled}
        />
      ) : null}
    </StyledContainer>
  )
}

export default MixedUseSectorHeader
