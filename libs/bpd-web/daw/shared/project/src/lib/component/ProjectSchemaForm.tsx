import { FC } from 'react'
import { SchemaForm, SchemaFormProps } from '@bpd/bpd-web/shared/ui'
import { get } from 'lodash'
import * as InternalWidgets from './Widgets'

export interface ProjectSchemaFormProps {
  name?: string
  uiSchema: SchemaFormProps['uiSchema']
  arrayIndices?: SchemaFormProps['arrayIndices']
}

const ProjectSchemaForm: FC<ProjectSchemaFormProps> = ({
  uiSchema,
  arrayIndices = { projectsInx: 0 },
  name = 'deal',
}) => {
  const onUIElementPreInit: SchemaFormProps['onUIElementPreInit'] = ({
    uiField,
  }) => {
    const widgetName = get(uiField, 'uiWidget', '')
    return get(InternalWidgets, widgetName, null)
  }

  return (
    <SchemaForm {...{ name, uiSchema, onUIElementPreInit, arrayIndices }} />
  )
}

export default ProjectSchemaForm
