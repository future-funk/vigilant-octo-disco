import { SchemaFormTypes } from '@bpd/bpd-web/shared/ui'
import { FC } from 'react'
import { DawSchemaForm } from '.'
import { dealAllocationSchema } from '../configs'

export interface DealAllocationFormProps {
  uiSchema?: SchemaFormTypes.SchemaForm
}

const DealAllocationForm: FC<DealAllocationFormProps> = ({
  uiSchema = dealAllocationSchema,
}) => {
  return <DawSchemaForm {...{ uiSchema }} />
}

export default DealAllocationForm
