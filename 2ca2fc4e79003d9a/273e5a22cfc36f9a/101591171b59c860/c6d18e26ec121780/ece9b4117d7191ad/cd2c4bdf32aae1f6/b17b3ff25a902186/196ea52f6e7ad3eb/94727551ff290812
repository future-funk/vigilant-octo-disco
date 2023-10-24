import { SchemaFormProps } from '@bpd/bpd-web/shared/ui'
import { FC } from 'react'
import { DawSchemaForm } from '.'
import { dealCounterPartiesSchema } from '../configs'

export interface DealCounterPartiesFormProps {
  uiSchema?: SchemaFormProps['uiSchema']
}

const DealCounterPartiesForm: FC<DealCounterPartiesFormProps> = ({
  uiSchema = dealCounterPartiesSchema,
}) => {
  return <DawSchemaForm {...{ uiSchema }} />
}

export default DealCounterPartiesForm
