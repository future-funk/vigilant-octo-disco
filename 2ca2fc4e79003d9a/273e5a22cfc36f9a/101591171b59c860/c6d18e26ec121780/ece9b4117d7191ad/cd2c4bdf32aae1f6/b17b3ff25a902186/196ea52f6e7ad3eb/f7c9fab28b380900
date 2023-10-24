import { FC } from 'react'
import { SchemaForm, SchemaFormProps } from '@bpd/bpd-web/shared/ui'
import { get } from 'lodash'
import * as InternalWidgets from './Widgets'
import DealAsyncTooltipHeader from './DealAsyncTooltipHeader'

export interface DawSchemaFormProps {
  name?: string
  uiSchema: SchemaFormProps['uiSchema']
  arrayIndices?: SchemaFormProps['arrayIndices']
}

const DawSchemaForm: FC<DawSchemaFormProps> = ({
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

  const onRenderHeader: SchemaFormProps['onRenderHeader'] = ({
    header,
    uiField,
  }) => {
    return header ? <DealAsyncTooltipHeader {...{ header, uiField }} /> : header
  }

  return (
    <SchemaForm
      name="deal"
      {...{ uiSchema, onUIElementPreInit, onRenderHeader, arrayIndices }}
    />
  )
}

export default DawSchemaForm
