import { useAppSelector } from '@bpd/bpd-web/shared/store'
import {
  BpdSelectProps,
  BpdSelect,
  FieldProps,
  SchemaFieldHeader,
  SfErrorContainer,
} from '@bpd/bpd-web/shared/ui'
import {
  DawBlueprintApiQueries,
  DawUiSelectors,
} from '@bpd/daw/shared/data-access'
import { Stack } from '@gic/battlefield-ui-pack'
import { map, replace, toNumber, toPath } from 'lodash'
import { FC } from 'react'
import { useWatch } from 'react-hook-form'
import { useRequiredRule } from '../../../hooks'

export interface StaffFieldWidgetProps extends BpdSelectProps, FieldProps {
  labelByRole?: Record<string, string>
}

const STAFF_LABEL_BY_ROLE: Record<string, string> = {
  teamlead: 'Deal Lead',
}
const StaffFieldWidget: FC<StaffFieldWidgetProps> = ({
  input,
  uiField,
  labelByRole = STAFF_LABEL_BY_ROLE,
  hasError,
  ...componentProps
}) => {
  const paths = toPath(input.name)

  const requireRuleProps = useRequiredRule({ input, uiField })

  const role = useWatch({
    name: `staffs[${paths[1]}].role`,
  })

  const team = useAppSelector(DawUiSelectors.getTeam)

  const { data, isFetching } = DawBlueprintApiQueries.useGetStaffs(
    {
      team,
    },
    { skip: !team }
  )

  const options = isFetching
    ? [{ key: 'loading', label: 'Loading...', value: '', disabled: true }]
    : map(data ?? [], (staff) => ({
        label: (staff.left ? [staff.ntid] : [staff.initials, staff.name]).join(
          ' - '
        ),
        value: staff.ntid,
        key: staff.ntid,
        ...(staff.left ? { disabled: true } : {}),
      }))

  return (
    <Stack spacing={0.5}>
      <SchemaFieldHeader
        title={labelByRole[role] || `Staff #${replace(role, /\D/g, '')}`}
        {...requireRuleProps}
      />
      <SfErrorContainer hasError={input.hasError}>
        <BpdSelect {...componentProps} showSearch={true} items={options} />
      </SfErrorContainer>
    </Stack>
  )
}

export default StaffFieldWidget
