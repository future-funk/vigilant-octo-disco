import {
  BpdTagSelect,
  BpdTagSelectProps,
  FieldProps,
} from '@bpd/bpd-web/shared/ui'
import { compact, join, split } from 'lodash'
import { FC } from 'react'

export interface WorkspaceTagSelectWidgetProps
  extends BpdTagSelectProps,
    FieldProps {
  onChange: (values: string) => void
}

const WorkspaceTagSelectWidget: FC<WorkspaceTagSelectWidgetProps> = ({
  uiField,
  input,
  value,
  onChange,
  ...componentProps
}) => {
  const onInternalChange = (newSelection: string[]) => {
    onChange(join(newSelection, ','))
  }
  return (
    <BpdTagSelect
      {...componentProps}
      onChange={onInternalChange}
      value={compact(split(value, ','))}
    />
  )
}

export default WorkspaceTagSelectWidget
