import { SchemaFormTypes } from '@bpd/bpd-web/shared/ui'
import { FC } from 'react'
import { DawSchemaForm } from '.'
import { dealPreliminarySchema } from '../configs'

export interface DealPreliminaryFormProps {
  uiSchema?: SchemaFormTypes.SchemaForm
}

const DealPreliminaryForm: FC<DealPreliminaryFormProps> = ({
  uiSchema = dealPreliminarySchema,
}) => {
  return <DawSchemaForm {...{ uiSchema }} />
}

export default DealPreliminaryForm
