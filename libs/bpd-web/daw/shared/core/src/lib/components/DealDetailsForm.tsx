import { FC } from 'react'
import { SchemaFormProps } from '@bpd/bpd-web/shared/ui'
import { dealDetailsSchema } from '../configs'
import DawSchemaForm from './DawSchemaForm'

export interface DealDetailsFormProps {
  uiSchema?: SchemaFormProps['uiSchema']
}

const DealDetailsForm: FC<DealDetailsFormProps> = ({
  uiSchema = dealDetailsSchema,
}) => {
  return <DawSchemaForm {...{ uiSchema }} />
}

export default DealDetailsForm
