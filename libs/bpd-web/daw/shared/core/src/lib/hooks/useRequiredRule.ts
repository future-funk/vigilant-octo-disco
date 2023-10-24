import { FieldProps, isRuleConfig, useSchemaRule } from '@bpd/bpd-web/shared/ui'

export interface useRequiredRuleProps extends FieldProps {}

const useRequiredRule = (props: useRequiredRuleProps) => {
  const {
    input: { arrayIndices },
    uiField: { rule },
  } = props

  const useRequiredRule = isRuleConfig(rule?.validationRule?.required)
    ? useSchemaRule
    : undefined

  return {
    useRequiredRule,
    required: rule?.validationRule?.required,
    arrayIndices,
  }
}

export default useRequiredRule
